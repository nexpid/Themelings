// app/modules/contact_sync/native/components/ContactSyncNameUpdateModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ContactSyncScenes;
    var _closure1_slot7 = var7;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var11 = function onClose() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.pop;
        var2 = var2.bind(var3)();
        return var1;
    };
    var _closure1_slot9 = var11;
    var4 = 7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flex': 1, 'backgroundColor': null, 'justifyContent': 'center'};
    var12 = 8;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_PRIMARY;
    var10['backgroundColor'] = var12;
    var12 = 9;
    var12 = var6[var12];
    var12 = var5.bind(var1)(var12);
    var13 = var12.NAV_BAR_HEIGHT;
    var12 = 32;
    var12 = var13 + var12;
    var10['paddingTop'] = var12;
    var4['container'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = function ContactSyncNameInputScreen() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = _closure1_slot10;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 10;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useContactSyncAccount;
            var9 = var1.bind(var2)();
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var1 = false;
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var7 = var2[var1];
            var1 = 1;
            var1 = var2[var1];
            var _closure2_slot0 = var1;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 233; continue _fun0002 }
 10:
                            var4 = arg1;
                            var6 = _closure2_slot0;
                            var2 = undefined;
                            var5 = true;
                            var5 = var6.bind(var2)(var5);
 29: // try_start_0
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var6 = 11;
                            var6 = var8[var6];
                            var7 = var7.bind(var2)(var6);
                            var6 = var7.updateName;
                            var4 = var6.bind(var7)(var4);
                            SaveGenerator(address=67);
 65:
                            return var4;
 67:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                            if(var6) { _fun0002_ip = 97; continue _fun0002 }
 73:
                            var7 = _closure2_slot0;
                            var6 = false;
                            var6 = var7.bind(var2)(var6);
                            var5 = _closure1_slot9;
                            var5 = var5.bind(var2)();
 92: // try_end0
                            _fun0002_ip = 230; continue _fun0002;
 97:
                            return var4;
 100: // catch_target0
                            CatchBlockStart(arg_register=3);
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var4 = 12;
                            var4 = var9[var4];
                            var6 = var8.bind(var2)(var4);
                            var5 = var6.open;
                            var4 = {};
                            var10 = 'ERROR_GENERIC_TITLE';
                            var4['key'] = var10;
                            var12 = _closure1_slot0;
                            var7 = 13;
                            var10 = var9[var7];
                            var10 = var12.bind(var2)(var10);
                            var11 = var10.intl;
                            var10 = var11.string;
                            var7 = var9[var7];
                            var7 = var12.bind(var2)(var7);
                            var7 = var7.t;
                            var7 = var7.R0RpRU;
                            var7 = var10.bind(var11)(var7);
                            var4['content'] = var7;
                            var7 = 14;
                            var7 = var9[var7];
                            var7 = var8.bind(var2)(var7);
                            var4['icon'] = var7;
                            var4 = var5.bind(var6)(var4);
                            var4 = _closure2_slot0;
                            var3 = false;
                            var3 = var4.bind(var2)(var3);
 230:
                            return var2;
 233:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var10 = var1.bind(var4)();
            var _closure2_slot1 = var10;
            var3 = _closure1_slot8;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = var6.container;
            var1['style'] = var6;
            var6 = _closure1_slot1;
            var5 = 15;
            var5 = var11[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['onNext'] = var10;
            var8 = function onRemoveName() {
                var3 = _closure2_slot1;
                var2 = undefined;
                var1 = null;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var5['onRemoveName'] = var8;
            var5['loading'] = var7;
            var7 = null;
            var10 = var7 == var9;
            var8 = undefined;
            if(var10) { _fun0001_ip = 181; continue _fun0001 }
 176:
            var8 = var9.name;
 181:
            var9 = var7 != var8;
            var7 = '';
            if(!var9) { _fun0001_ip = 195; continue _fun0001 }
 192:
            var7 = var8;
 195:
            var5['initialName'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var4 = {};
    var8 = var7.NAME_INPUT;
    var7 = {'render': null, 'ignoreKeyboard': true, 'fullscreen': true, 'headerLeft': null, 'title': ''};
    var9 = function render() {
        var4 = _closure1_slot8;
        var3 = _closure1_slot11;
        var2 = undefined;
        var1 = {};
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var7['render'] = var9;
    var9 = 16;
    var9 = var6[var9];
    var10 = var5.bind(var1)(var9);
    var9 = var10.getHeaderCloseButton;
    var9 = var9.bind(var10)(var11);
    var7['headerLeft'] = var9;
    var4[var8] = var7;
    var _closure1_slot12 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/contact_sync/native/components/ContactSyncNameUpdateModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ContactSyncNameUpdateModal() {
        var4 = _closure1_slot8;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 17;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.Navigator;
        var1 = {};
        var6 = _closure1_slot7;
        var6 = var6.NAME_INPUT;
        var1['initialRouteName'] = var6;
        var5 = _closure1_slot12;
        var1['screens'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();