// app/modules/mfa/native/MfaScreenUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var2 = {};
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var8 = var5.bind(var1)(var7);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var1 = {};
            var2 = {};
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 1;
            var7 = var6[var4];
            var5 = undefined;
            var7 = var9.bind(var5)(var7);
            var7 = var7.NAV_BAR_HEIGHT;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var6[var4];
            var6 = var9.bind(var5)(var6);
            var6 = var6.STATUS_BAR_HEIGHT;
            var6 = var7 - var6;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var6 = var7;
case 4:
            var2['marginTop'] = var6;
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var6 = 2;
            var7 = var7[var6];
            var7 = var9.bind(var5)(var7);
            var9 = var7.spacing;
            if(var8) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var7 = var9.PX_16;
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var7 = var9.PX_24;
case 7:
            var2['marginLeft'] = var7;
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var6];
            var7 = var9.bind(var5)(var7);
            var9 = var7.spacing;
            if(var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var9.PX_16;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var7 = var9.PX_24;
case 10:
            var2['marginRight'] = var7;
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var6];
            var7 = var9.bind(var5)(var7);
            var9 = var7.spacing;
            if(var8) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var7 = var9.PX_16;
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var7 = var9.PX_24;
case 13:
            var2['paddingBottom'] = var7;
            var2['flex'] = var4;
            var4 = 'column';
            var2['flexDirection'] = var4;
            var4 = 'space-between';
            var2['justifyContent'] = var4;
            var4 = 'stretch';
            var2['alignItems'] = var4;
            var1['contentContainer'] = var2;
            var4 = 'center';
            var2 = {'flexDirection': 'column', 'alignItems': 'center'};
            var1['mfaContainerHeader'] = var2;
            var2 = {'flexDirection': 'column', 'alignItems': 'center'};
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var6];
            var7 = var9.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_12;
            var2['marginTop'] = var7;
            var1['mfaContainerHeaderContent'] = var2;
            var2 = {};
            var9 = 0;
            if(var8) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var10 = var10[var6];
            var10 = var11.bind(var5)(var10);
            var10 = var10.spacing;
            var9 = var10.PX_32;
case 14:
            var2['marginHorizontal'] = var9;
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var6];
            var9 = var10.bind(var5)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_16;
            var2['marginBottom'] = var9;
            var7 = 0;
            if(var8) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var6];
            var8 = var9.bind(var5)(var8);
            var8 = var8.spacing;
            var7 = var8.PX_12;
case 16:
            var2['marginTop'] = var7;
            var2['textAlign'] = var4;
            var1['mfaContainerFooter'] = var2;
            var2 = {'flexDirection': 'column', 'alignSelf': 'stretch'};
            var1['inputContainer'] = var2;
            var2 = {'flexDirection': 'column', 'alignSelf': 'stretch'};
            var1['smsContainer'] = var2;
            var2 = {'flexDirection': 'row', 'alignSelf': 'stretch'};
            var1['smsInput'] = var2;
            var2 = {};
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.BACKGROUND_SURFACE_HIGH;
            var2['backgroundColor'] = var7;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.radii;
            var3 = var3.md;
            var2['borderRadius'] = var3;
            var1['radioItem'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var2['useScreenStyles'] = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/mfa/native/MfaScreenUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();