const a11_0x21d7=['querySelectorAll','length','Increases\x20<img\x20class=\x27potion-recipe-icon\x27\x20src=\x22./svgs/','innerText','setAttribute','696bfpDmV','class','keys','603670gUMZvV','forEach','739NzQGKj','weak','kettle-cell-selected','potion-recipe-ingredient-icon','effect','display-none','innerHTML','25mdfzVc','classList','svgs/','109njdrcP','left','.potion-recipe-name','right','.potion-recipe-book-page-number','.potion-recipe-description','src','addEventListener','6899MgZHUZ','12252adDhZV','166897GpqKzc','.plant-selection-container','add','852010QuyJrx','click','1351xunGTj','querySelector','.svg','name','#potion-recipe-book-page-btn-right','remove','189FUsNbw','img','.ingredients-weak','appendChild','.potion-recipe-book-btn','ingredients','.ingredients-normal','.kettle-cell','createElement'];const a11_0x3c7863=a11_0x4d4d;function a11_0x4d4d(_0x2a1450,_0x307942){return a11_0x4d4d=function(_0x21d76e,_0x4d4dd7){_0x21d76e=_0x21d76e-0xdf;let _0x2f50c5=a11_0x21d7[_0x21d76e];return _0x2f50c5;},a11_0x4d4d(_0x2a1450,_0x307942);}(function(_0x3e0466,_0x366ef5){const _0xbb0e78=a11_0x4d4d;while(!![]){try{const _0x38da4b=-parseInt(_0xbb0e78(0xff))*parseInt(_0xbb0e78(0xf8))+parseInt(_0xbb0e78(0xf3))*parseInt(_0xbb0e78(0xdf))+parseInt(_0xbb0e78(0xf6))+-parseInt(_0xbb0e78(0x10f))+parseInt(_0xbb0e78(0xe5))*parseInt(_0xbb0e78(0x10a))+parseInt(_0xbb0e78(0x10c))+-parseInt(_0xbb0e78(0x10b))*parseInt(_0xbb0e78(0x102));if(_0x38da4b===_0x366ef5)break;else _0x3e0466['push'](_0x3e0466['shift']());}catch(_0x132956){_0x3e0466['push'](_0x3e0466['shift']());}}}(a11_0x21d7,0xc5775));import{alchemyRecipes,newRecipeList,potionEffects}from'./alchemy_recipes.js';const potionRecipeBookBtn=document[a11_0x3c7863(0xe0)](a11_0x3c7863(0xe9)),flipLeftBtn=document[a11_0x3c7863(0xe0)]('#potion-recipe-book-page-btn-left'),flipRightBtn=document['querySelector'](a11_0x3c7863(0xe3)),potionRecipeBook=document[a11_0x3c7863(0xe0)]('.potion-recipe-book-container'),pageCount=document[a11_0x3c7863(0xe0)](a11_0x3c7863(0x106)),potionRecipeName=document['querySelector'](a11_0x3c7863(0x104)),weakIngredientsIMGS=document[a11_0x3c7863(0xe0)](a11_0x3c7863(0xe7)),normalIngredientsIMGS=document[a11_0x3c7863(0xe0)](a11_0x3c7863(0xeb)),potionDescription=document['querySelector'](a11_0x3c7863(0x107));let pageIndex=0x0,bookLength=Object[a11_0x3c7863(0xf5)](alchemyRecipes)[a11_0x3c7863(0xef)];function flipPage(_0x17c49f){const _0x5714bb=a11_0x3c7863;_0x17c49f===_0x5714bb(0x103)?(pageIndex===0x0?pageIndex=bookLength-0x1:pageIndex--,loadPage(pageIndex)):(pageIndex===bookLength-0x1?pageIndex=0x0:pageIndex++,loadPage(pageIndex));}function loadPage(_0x589b7a){const _0x3725a9=a11_0x3c7863;let _0x1899c5=Object[_0x3725a9(0xf5)](alchemyRecipes)[_0x589b7a];pageCount[_0x3725a9(0xf1)]=_0x589b7a+0x1+'/'+bookLength,potionRecipeName[_0x3725a9(0xf1)]=alchemyRecipes[_0x1899c5][_0x3725a9(0xe2)];potionEffects[_0x1899c5]['production']===!![]?potionDescription[_0x3725a9(0xfe)]='Increases\x20<img\x20class=\x27potion-recipe-icon\x27\x20src=\x22./svgs/'+potionEffects[_0x1899c5][_0x3725a9(0xfc)]+'_icon.svg\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20production':potionDescription[_0x3725a9(0xfe)]=_0x3725a9(0xf0)+potionEffects[_0x1899c5][_0x3725a9(0xfc)]+'_icon.svg\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20ATK';weakIngredientsIMGS[_0x3725a9(0xfe)]='',normalIngredientsIMGS[_0x3725a9(0xfe)]='';for(const _0x22d870 in newRecipeList[_0x3725a9(0xf9)+_0x1899c5][_0x3725a9(0xea)]){for(let _0xe884ef=0x0;_0xe884ef<newRecipeList[_0x3725a9(0xf9)+_0x1899c5][_0x3725a9(0xea)][_0x22d870];_0xe884ef++){let _0x2ef0e2=document[_0x3725a9(0xed)](_0x3725a9(0xe6));_0x2ef0e2[_0x3725a9(0x108)]=_0x3725a9(0x101)+_0x22d870+_0x3725a9(0xe1),_0x2ef0e2['setAttribute'](_0x3725a9(0xf4),'potion-recipe-ingredient-icon'),weakIngredientsIMGS[_0x3725a9(0xe8)](_0x2ef0e2);}}for(const _0x1d54c0 in newRecipeList[_0x1899c5][_0x3725a9(0xea)]){for(let _0x4e951c=0x0;_0x4e951c<newRecipeList[_0x1899c5][_0x3725a9(0xea)][_0x1d54c0];_0x4e951c++){let _0x107665=document[_0x3725a9(0xed)](_0x3725a9(0xe6));_0x107665[_0x3725a9(0x108)]=_0x3725a9(0x101)+_0x1d54c0+_0x3725a9(0xe1),_0x107665[_0x3725a9(0xf2)](_0x3725a9(0xf4),_0x3725a9(0xfb)),normalIngredientsIMGS[_0x3725a9(0xe8)](_0x107665);}}}loadPage(0x0);let isRecipeBookOpen=![];function toggleRecipeBook(){const _0x54f0ff=a11_0x3c7863;isRecipeBookOpen?(potionRecipeBook[_0x54f0ff(0x100)][_0x54f0ff(0x10e)]('display-none'),isRecipeBookOpen=![]):(document[_0x54f0ff(0xee)](_0x54f0ff(0xec))[_0x54f0ff(0xf7)](_0xe6c893=>_0xe6c893['classList'][_0x54f0ff(0xe4)](_0x54f0ff(0xfa))),document[_0x54f0ff(0xe0)](_0x54f0ff(0x10d))[_0x54f0ff(0x100)][_0x54f0ff(0x10e)]('display-none'),potionRecipeBook['classList'][_0x54f0ff(0xe4)](_0x54f0ff(0xfd)),isRecipeBookOpen=!![]);}export function closeRecipeBook(){const _0x208ee1=a11_0x3c7863;potionRecipeBook[_0x208ee1(0x100)][_0x208ee1(0x10e)](_0x208ee1(0xfd)),isRecipeBookOpen=![];}potionRecipeBookBtn['addEventListener'](a11_0x3c7863(0x110),()=>toggleRecipeBook()),flipLeftBtn[a11_0x3c7863(0x109)](a11_0x3c7863(0x110),()=>flipPage(a11_0x3c7863(0x103))),flipRightBtn['addEventListener']('click',()=>flipPage(a11_0x3c7863(0x105)));