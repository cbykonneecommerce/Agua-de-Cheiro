$("#commit").on('click', () => {

  event.preventDefault();
  let dados = {
    firstName: $("#cl_first_name").val(),
    email: $("#cl_email").val(),
    homePhone: $("#ctTel").val(),
    cpf: $("#cl_cpf").val(),
    description: $("#co_description").val()
  }

  fetch("/api/dataentities/CO/documents", {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dados)
  })
    .then((res) => { return res })
    .then(result => {
      alert("Formulario enviado");
    })
    .catch(err => console.error(err))
})

const getStores = () => {
  fetch("/api/dataentities/LS/search?_fields=state,city,neighborhood,address,contact", {
    method: 'GET',
    headers: {
      "REST-Range": "resources=0-999",
      "Accept": "application/vnd.vtex.masterdata.v10+json",
      "Content-Type": "application/vnd.vtex.masterdata.v10+json"
    }
  })
    .then((res) => { return res.json() })
    .then((result) => {
      let state = result.map((item) => {

        return item.state
      }).filter((item, index, array) => {
        return array.indexOf(item) === index
      })
      state = state.sort();
      renderStates(state)
      renderCities(result)
    })
    .catch(err => console.error(err))
}

const renderStates = (state) => {
  const stateList = state.map(item => {
    return (`
      <div class="stores__state" data-id="${item}">
        <h4>${item}</h4>
        <div class="stores__cities">
          <div class="stores__table stores__table--head">
            <div class="stores__cell">Cidade</div>
            <div class="stores__cell">Bairro</div>
            <div class="stores__cell">Endereço</div>
            <div class="stores__cell">Contatos</div>
          </div>
        </div>
      </div>
    `)
  })

  $('.stores__body').append(stateList)
}
const renderCities = (state) => {
  state.forEach(store => {
    $('.stores__body').find(`.stores__state[data-id='${store.state}'] .stores__cities`).append(`
      <div class="stores__table">
        <div class="stores__cell stores__cell--city">${store.city}</div>
        <div class="stores__cell">${store.neighborhood}</div>
        <div class="stores__cell stores__cell--address">${store.address}</div>
        <div class="stores__cell">${store.contact}</div>
      </div>
    `)
  })

}


$(document).ready(() => {
  if ($('body').hasClass('quem-somos')) {
    getStores();
  }
})

