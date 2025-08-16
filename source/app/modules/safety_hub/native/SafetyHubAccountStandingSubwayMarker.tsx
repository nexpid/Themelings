// app/modules/safety_hub/native/SafetyHubAccountStandingSubwayMarker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot4 = var5;
    var2 = var2.jsxs;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var8 = var9.createStyles;
    var5 = {};
    var2 = 56;
    var11 = 'center';
    var10 = {'width': 56, 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'space-between', 'alignItems': 'center', 'rowGap': 8, 'flex': 1};
    var5['container'] = var10;
    var10 = {'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'zIndex': 1};
    var12 = 4;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var10['padding'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var10['borderRadius'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_SURFACE_RAISED;
    var10['backgroundColor'] = var14;
    var5['marker'] = var10;
    var10 = {'display': 'flex', 'borderRadius': null, 'backgroundColor': null, 'width': '100%', 'height': '100%'};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var10['borderRadius'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_BASE_TERTIARY;
    var10['backgroundColor'] = var14;
    var5['empty'] = var10;
    var10 = {};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var10['borderRadius'] = var14;
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_SURFACE_RAISED;
    var10['backgroundColor'] = var12;
    var5['icon'] = var10;
    var10 = {};
    var10['textAlign'] = var11;
    var5['label'] = var10;
    var10 = {'alignItems': 'flex-start', 'textAlign': 'left'};
    var5['firstOption'] = var10;
    var10 = {'alignItems': 'flex-end', 'textAlign': 'right'};
    var5['lastOption'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot6 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/safety_hub/native/SafetyHubAccountStandingSubwayMarker.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function SafetyHubAccountStandingSubwayMarker(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.selectedIcon;
            var2 = var1.style;
            var _closure2_slot0 = var2;
            var9 = var1.status;
            var19 = var1.isSelected;
            var _closure2_slot1 = var19;
            var16 = var1.index;
            var5 = var1.onLayout;
            var20 = var1.size;
            var18 = var1.numOptions;
            var1 = _closure1_slot6;
            var4 = undefined;
            var15 = var1.bind(var4)();
            var _closure2_slot2 = var15;
            var8 = {};
            var23 = var15.container;
            var24 = var8;
            var1 = copyDataProperties(var24, var23);
            var17 = 0;
            if(!(var17 !== var16)) { _fun0001_ip = 98; continue _fun0001 }
 94:
            var1 = {};
            _fun0001_ip = 104; continue _fun0001;
 98:
            var1 = var15.firstOption;
 104:
            var24 = var8;
            var23 = var1;
            var1 = copyDataProperties(var24, var23);
            var13 = 1;
            var1 = var18 - var13;
            if(!(var16 !== var1)) { _fun0001_ip = 129; continue _fun0001 }
 125:
            var1 = {};
            _fun0001_ip = 135; continue _fun0001;
 129:
            var1 = var15.lastOption;
 135:
            var24 = var8;
            var23 = var1;
            var1 = copyDataProperties(var24, var23);
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var1['style'] = var8;
            var1['onLayout'] = var5;
            if(var19) { _fun0001_ip = 365; continue _fun0001 }
 170:
            var11 = _closure1_slot4;
            var8 = _closure1_slot3;
            var5 = {};
            var12 = {};
            var23 = var15.marker;
            var24 = var12;
            var14 = copyDataProperties(var24, var23);
            var14 = 'width';
            var12[var14] = var20;
            var14 = 'height';
            var12[var14] = var20;
            var20 = 0;
            if(var19) { _fun0001_ip = 258; continue _fun0001 }
 218:
            var20 = 0;
            if(!(var17 === var16)) { _fun0001_ip = 258; continue _fun0001 }
 224:
            var21 = _closure1_slot1;
            var22 = _closure1_slot2;
            var14 = 4;
            var14 = var22[var14];
            var14 = var21.bind(var4)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_4;
            var20 = -var14;
 258:
            var14 = 'marginLeft';
            var12[var14] = var20;
            var14 = 0;
            if(var19) { _fun0001_ip = 316; continue _fun0001 }
 272:
            var13 = var18 - var13;
            var14 = 0;
            if(!(var16 === var13)) { _fun0001_ip = 316; continue _fun0001 }
 282:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var13 = 4;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.spacing;
            var13 = var13.PX_4;
            var14 = -var13;
 316:
            var13 = 'marginRight';
            var12[var13] = var14;
            var5['style'] = var12;
            var14 = _closure1_slot4;
            var13 = _closure1_slot3;
            var12 = {};
            var15 = var15.empty;
            var12['style'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var5['children'] = var12;
            var7 = var11.bind(var4)(var8, var5);
 365:
            var5 = new Array(2);
            var5[0] = var7;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 5;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var8 = var6.intl;
            var7 = var8.format;
            var6 = {};
            var10 = function hook(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var6 = arg1;
                    var5 = _closure1_slot4;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var1 = var3[var1];
                    var4 = undefined;
                    var1 = var2.bind(var4)(var1);
                    var3 = var1.Text;
                    var1 = _closure2_slot1;
                    if(var1) { _fun0002_ip = 76; continue _fun0002 }
 47:
                    var2 = {'color': 'interactive-normal', 'variant': 'text-xxs/normal'};
                    var1 = _closure2_slot2;
                    var1 = var1.label;
                    var2['style'] = var1;
                    var2['children'] = var6;
                    _fun0002_ip = 114; continue _fun0002;
 76:
                    var1 = {};
                    var7 = {};
                    var8 = _closure2_slot0;
                    var8 = var8.color;
                    var7['color'] = var8;
                    var1['style'] = var7;
                    var7 = 'text-xxs/bold';
                    var1['variant'] = var7;
                    var1['children'] = var6;
                    var2 = var1;
 114:
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var6['hook'] = var10;
            var6 = var7.bind(var8)(var9, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['SUBWAY_MARKER_WIDTH'] = var2;
    return var1;
})();