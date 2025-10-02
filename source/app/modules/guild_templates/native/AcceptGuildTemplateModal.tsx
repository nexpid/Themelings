// app/modules/guild_templates/native/AcceptGuildTemplateModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = function ConnectedAcceptGuildTemplate(arg1) {
        var1 = arg1;
        var14 = var1.code;
        var _closure2_slot0 = var14;
        var2 = _closure1_slot0;
        var15 = _closure1_slot3;
        var1 = 8;
        var1 = var15[var1];
        var4 = undefined;
        var6 = var2.bind(var4)(var1);
        var5 = var6.useStateFromStores;
        var1 = _closure1_slot7;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function() {
            var3 = _closure1_slot7;
            var2 = var3.getGuildTemplate;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var13 = var5.bind(var6)(var3, var1);
        var _closure2_slot1 = var13;
        var5 = _closure1_slot6;
        var3 = var5.useState;
        var6 = _closure1_slot2;
        var1 = 9;
        var1 = var15[var1];
        var6 = var6.bind(var4)(var1);
        var1 = var6.getGuildNameSuggestion;
        var1 = var1.bind(var6)();
        var3 = var3.bind(var5)(var1);
        var1 = _closure1_slot5;
        var7 = 2;
        var1 = var1.bind(var4)(var3, var7);
        var5 = 0;
        var12 = var1[var5];
        var _closure2_slot2 = var12;
        var3 = 1;
        var1 = var1[var3];
        var _closure2_slot3 = var1;
        var6 = _closure1_slot6;
        var1 = var6.useState;
        var10 = null;
        var6 = var1.bind(var6)(var10);
        var1 = _closure1_slot5;
        var1 = var1.bind(var4)(var6, var7);
        var11 = var1[var5];
        var _closure2_slot4 = var11;
        var1 = var1[var3];
        var _closure2_slot5 = var1;
        var6 = _closure1_slot6;
        var1 = var6.useState;
        var6 = var1.bind(var6)(var10);
        var1 = _closure1_slot5;
        var1 = var1.bind(var4)(var6, var7);
        var10 = var1[var5];
        var1 = var1[var3];
        var _closure2_slot6 = var1;
        var6 = _closure1_slot1;
        var1 = 10;
        var1 = var15[var1];
        var1 = var6.bind(var4)(var1);
        var1 = var1.bind(var4)(var13);
        var3 = _closure1_slot9;
        var1 = 11;
        var1 = var15[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.SafeAreaPaddingView;
        var1 = {};
        var5 = true;
        var1['top'] = var5;
        var5 = _closure1_slot10;
        var5 = var5.container;
        var1['style'] = var5;
        var7 = _closure1_slot9;
        var5 = 12;
        var5 = var15[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var5['code'] = var14;
        var5['guildTemplate'] = var13;
        var5['name'] = var12;
        var12 = function setName(arg1) {
            var3 = _closure2_slot3;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var5['setName'] = var12;
        var5['icon'] = var11;
        var5['errors'] = var10;
        var10 = _closure1_slot4;
        var9 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 13;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.openImagePicker;
                    var2 = {};
                    var6 = _closure1_slot8;
                    var2['size'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=57);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var5 = var2.base64;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var4 = _closure2_slot5;
                    var4 = var4.bind(var3)(var5);
case 8:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var9 = var10.bind(var4)(var9);
        var5['chooseIcon'] = var9;
        var8 = function createServer() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = _closure2_slot1;
                var3 = null;
                if(!(var3 != var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var3 = 14;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.acceptGuildTemplate;
                var3 = _closure2_slot1;
                var4 = var3.code;
                var3 = _closure2_slot2;
                var2 = _closure2_slot4;
                var4 = var5.bind(var6)(var4, var3, var2);
                var3 = var4.then;
                var2 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.hideModal;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = function(arg1) {
                    var3 = _closure2_slot6;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var2, var1);
case 10:
                var1 = undefined;
                return var1;
            }
        };
        var5['createServer'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.StyleSheet;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UPLOAD_MEDIUM_SIZE;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {};
    var10 = 7;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.NAV_BAR_HEIGHT;
    var9['marginTop'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_templates/native/AcceptGuildTemplateModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AcceptGuildTemplateModal(arg1) {
        var1 = arg1;
        var6 = var1.code;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot6;
        var4 = var5.useMemo;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            var3 = {};
            var1 = _closure2_slot0;
            var3['code'] = var1;
            var2 = function getScreens(arg1) {
                var1 = arg1;
                var _closure4_slot0 = var1;
                var1 = {};
                var3 = {'title': '', 'fullscreen': true};
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var4 = 16;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.getHeaderCloseButton;
                var4 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.hideModal;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var4 = var5.bind(var6)(var4);
                var3['headerLeft'] = var4;
                var2 = function render() {
                    var4 = _closure1_slot9;
                    var3 = _closure1_slot11;
                    var2 = {};
                    var5 = _closure4_slot0;
                    var6 = var2;
                    var1 = copyDataProperties(var6, var5);
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var3['render'] = var2;
                var2 = 'ACCEPT_GUILD_TEMPLATE';
                var1[var2] = var3;
                return var1;
            };
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            return var1;
        };
        var5 = var4.bind(var5)(var2, var3);
        var4 = _closure1_slot9;
        var2 = _closure1_slot0;
        var3 = _closure1_slot3;
        var1 = 17;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.Navigator;
        var1 = {};
        var6 = 'ACCEPT_GUILD_TEMPLATE';
        var1['initialRouteName'] = var6;
        var1['screens'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();