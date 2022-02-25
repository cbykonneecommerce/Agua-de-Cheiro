(function () {

  const getBrands = () => {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.vtex.ds.v10+json',
        'Content-Type': 'application/json',
        'X-VTEX-API-AppKey': 'vtexappkey-aguadecheiro-OTELYJ',
        'X-VTEX-API-AppToken': 'XPXDEXBBBZYZENXUTHUWXTBIMMTVHDCMOTRAFCRIGWIOMUECFZVGTNTEOOQRDFUXXLKLWWORQMQBKMWSIRQHHVTBANMQLZEABLRAJSGJKEQGXSTCSXJMPMPBSJLJJYGQ'
      },
    };

    fetch('/api/catalog_system/pvt/brand/list', options)
      .then(response => response.json())
      .then(brandList => mountListBrands(brandList))
      .catch(err => console.error(err));
  }

  const mountListBrands = (brandList) => {
    const $brands = brandList.map((brand, index) => {
      if (!brand.isActive) return
      return (
        brandItem(brand.imageUrl, brand.name)
      )
    })

    $('.brand__content').append(`
        <ul class="brand__list">
          ${$brands.join('')}
        </ul>
      `
    )

  }

  const brandItem = (imageUrl, brandName) => {
    function createImageName(brandName) {
      brandName = brandName.split(' ').join('-').normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
      return brandName
    }
    const image = imageUrl === null ? `/arquivos/${createImageName(brandName)}.png?v=5` : imageUrl
    return (
      `
      <li class="brand__item">
        <a href="/${createImageName(brandName)}" title="${brandName}" class="d-block">
          <img class="brand__background" src="/arquivos/bg-${createImageName(brandName)}.png?v=5" alt="${brandName}" onerror="this.parentNode.parentNode.style.display='none'" />
          <div class="brand__box-content">
            <div class="brand__logo brand__logo--${createImageName(brandName)}">
              <img src="${image}" onerror="this.parentNode.parentNode.parentNode.parentNode.style.display='none'" alt="${brandName}" />
            </div>
            <h3 class="brand__name">${brandName}</h3>
          </div>
        </a>
      </li>
    `
    )
  }

  const init = () => {
    getBrands()
  }

  init();
})();
