// app/modules/main_tabs_v2/native/shared_components/user_list/GroupDMRow.tsx
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
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserRowModes;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/user_list/GroupDMRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GroupDMRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var13 = var8.channel;
            var _closure2_slot0 = var13;
            var3 = var8.mode;
            var5 = undefined;
            if(!(var3 === var5)) { _fun0001_ip = 38; continue _fun0001 }
 25:
            var1 = _closure1_slot4;
            var3 = var1.NONE;
 38:
            var7 = var8.selected;
            if(!(var7 === var5)) { _fun0001_ip = 50; continue _fun0001 }
 48:
            var7 = false;
 50:
            var11 = var8.disabled;
            if(!(var11 === var5)) { _fun0001_ip = 61; continue _fun0001 }
 59:
            var11 = false;
 61:
            var16 = var8.onPress;
            var _closure2_slot1 = var16;
            var2 = {'channel': 0, 'mode': 0, 'selected': 0, 'disabled': 0, 'onPress': 0};
            var4 = null;
            var20 = var2;
            var19 = null;
            var1 = silentSetPrototypeOf(var20, var19);
            var20 = {};
            var19 = var8;
            var18 = var2;
            var8 = copyDataProperties(var20, var19, var18);
            var10 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 3;
            var1 = var14[var1];
            var1 = var10.bind(var5)(var1);
            var1 = var1.bind(var5)(var13);
            var15 = _closure1_slot3;
            var12 = var15.useCallback;
            var9 = new Array(2);
            var9[0] = var13;
            var9[1] = var16;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 28; continue _fun0002 }
 13:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var12.bind(var15)(var6, var9);
            var15 = _closure1_slot5;
            var6 = 4;
            var6 = var14[var6];
            var10 = var10.bind(var5)(var6);
            var6 = {};
            var12 = _closure1_slot0;
            var16 = 5;
            var16 = var14[var16];
            var16 = var12.bind(var5)(var16);
            var16 = var16.AvatarSizes;
            var16 = var16.REFRESH_MEDIUM_32;
            var6['size'] = var16;
            var6['channel'] = var13;
            var10 = var15.bind(var5)(var10, var6);
            var6 = 6;
            var6 = var14[var6];
            var12 = var12.bind(var5)(var6);
            var6 = var12.useRecipientsLabel;
            var14 = var6.bind(var12)(var13);
            var6 = {};
            var20 = var6;
            var19 = var8;
            var8 = copyDataProperties(var20, var19);
            var8 = 'disabled';
            var6[var8] = var11;
            var8 = var4 != var14;
            var11 = undefined;
            if(!var8) { _fun0001_ip = 335; continue _fun0001 }
 282:
            var13 = _closure1_slot5;
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = 7;
            var8 = var15[var8];
            var8 = var12.bind(var5)(var8);
            var12 = var8.Text;
            var8 = {'variant': 'text-xs/medium', 'color': 'text-muted', 'lineClamp': 1};
            var8['children'] = var14;
            var11 = var13.bind(var5)(var12, var8);
 335:
            var8 = 'subLabel';
            var6[var8] = var11;
            var8 = 'icon';
            var6[var8] = var10;
            var8 = 'onPress';
            var6[var8] = var9;
            var8 = var4 != var1;
            var4 = '';
            if(!var8) { _fun0001_ip = 376; continue _fun0001 }
 373:
            var4 = var1;
 376:
            var1 = 'label';
            var6[var1] = var4;
            var4 = 1;
            var1 = 'labelLineClamp';
            var6[var1] = var4;
            var1 = _closure1_slot4;
            var1 = var1.TOGGLE;
            if(!(var3 !== var1)) { _fun0001_ip = 461; continue _fun0001 }
 411:
            var4 = _closure1_slot5;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 9;
            var1 = var8[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.TableRow;
            var1 = {};
            var20 = var1;
            var19 = var6;
            var8 = copyDataProperties(var20, var19);
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 518; continue _fun0001;
 461:
            var4 = _closure1_slot5;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 8;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.TableCheckboxRow;
            var2 = {};
            var20 = var2;
            var19 = var6;
            var6 = copyDataProperties(var20, var19);
            var6 = 'checked';
            var2[var6] = var7;
            var1 = var4.bind(var5)(var3, var2);
 518:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();