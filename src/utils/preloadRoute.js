// Preload route chunks on hover or idle
export const preloadRoute = (target) => {
  if (target === 'about') {
    import('../components/About/AboutSection');
  } else if (target === 'contact' || target?.startsWith('/contact')) {
    import('../components/Contact/ContactPage');
  } else if (target === 'products' || target?.startsWith('/products')) {
    import('../components/Products/pages/PipesProductPage');
    import('../components/Products/pages/PipeGradeDetailView');
    import('../components/Products/pages/SheetsPlatesProductPage');
    import('../components/Products/pages/SheetPlateGradeDetailView');
    import('../components/Products/pages/BarsProductPage');
    import('../components/Products/pages/BarGradeDetailView');
    import('../components/Products/pages/PipeFittingsProductPage');
    import('../components/Products/pages/PipeFittingGradeDetailView');
    import('../components/Products/pages/FlangesProductPage');
    import('../components/Products/pages/FlangeGradeDetailView');
    import('../components/Products/pages/FlangeTypeDetailView');
    import('../components/Products/pages/FastenersProductPage');
    import('../components/Products/pages/FastenerGradeDetailView');
    import('../components/Products/pages/ProductsLandingView');
    import('../components/Products/pages/DivisionView');
    import('../components/Products/pages/ProductFamilyView');
    import('../components/Products/pages/ProductDetailView');
  } else if (target === 'materials' || target?.startsWith('/materials')) {
    import('../components/Materials/pages/MaterialsLandingView');
    import('../components/Materials/pages/MaterialDetailView');
  }
};
