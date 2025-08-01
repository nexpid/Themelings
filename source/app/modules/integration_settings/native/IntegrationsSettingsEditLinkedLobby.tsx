// app/modules/integration_settings/native/IntegrationsSettingsEditLinkedLobby.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var7 = var4.Fragment;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'alignItems': 'center', 'marginTop': 8, 'marginBottom': 32, 'gap': 12};
    var4['header'] = var9;
    var9 = {'paddingLeft': 12, 'marginBottom': 8};
    var4['currentlySyncingText'] = var9;
    var9 = {'height': 1, 'width': 48};
    var10 = 5;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.DIVIDER_STRONG;
    var9['backgroundColor'] = var10;
    var4['divider'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/integration_settings/native/IntegrationsSettingsEditLinkedLobby.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EditLinkedLobby(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = var3.channel;
            var _closure2_slot0 = var2;
            var3 = var3.numScreensToPop;
            var _closure2_slot1 = var3;
            var5 = undefined;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var4 = _closure1_slot9;
            var14 = var4.bind(var5)();
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 6;
            var4 = var7[var4];
            var8 = var6.bind(var5)(var4);
            var4 = var8.useNavigation;
            var13 = var4.bind(var8)();
            var _closure2_slot2 = var13;
            var9 = _closure1_slot1;
            var4 = 7;
            var4 = var7[var4];
            var8 = var9.bind(var5)(var4);
            var4 = 8;
            var4 = var7[var4];
            var4 = var9.bind(var5)(var4);
            var4 = var4.EDIT_CHANNEL_SYNCING;
            var4 = var8.bind(var5)(var4);
            var9 = var4.analyticsLocations;
            var _closure2_slot3 = var9;
            var4 = 9;
            var4 = var7[var4];
            var7 = var6.bind(var5)(var4);
            var6 = var7.useGetOrFetchApplication;
            var8 = var2.linkedLobby;
            var17 = null;
            var10 = var17 == var8;
            var4 = undefined;
            if(var10) { _fun0001_ip = 173; continue _fun0001 }
 167:
            var4 = var8.application_id;
 173:
            var20 = var6.bind(var7)(var4);
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 10;
            var4 = var7[var4];
            var6 = var6.bind(var5)(var4);
            var4 = true;
            var22 = var6.bind(var5)(var2, var4);
            var4 = var2.linkedLobby;
            var6 = var17 == var4;
            var8 = undefined;
            if(var6) { _fun0001_ip = 229; continue _fun0001 }
 221:
            var8 = var4.linked_at;
 229:
            _closure2_slot4 = var8;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 11;
            var4 = var6[var4];
            var12 = var7.bind(var5)(var4);
            var10 = var12.useStateFromStores;
            var4 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getUser;
                    var1 = _closure2_slot0;
                    var4 = var1.linkedLobby;
                    var1 = null;
                    var5 = var1 == var4;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 43; continue _fun0002 }
 37:
                    var1 = var4.linked_by;
 43:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var7 = var10.bind(var12)(var7, var4);
            _closure2_slot5 = var7;
            var12 = _closure1_slot3;
            var10 = var12.useCallback;
            var4 = new Array(2);
            var4[0] = var13;
            var4[1] = var3;
            var3 = function() {
                var3 = _closure2_slot2;
                var2 = var3.pop;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var10 = var10.bind(var12)(var3, var4);
            var4 = _closure1_slot1;
            var3 = 12;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var4 = var2.id;
            var3 = var17 == var20;
            var12 = undefined;
            if(var3) { _fun0001_ip = 356; continue _fun0001 }
 351:
            var12 = var20.name;
 356:
            var13 = var17 != var12;
            var3 = '';
            if(!var13) { _fun0001_ip = 370; continue _fun0001 }
 367:
            var3 = var12;
 370:
            var15 = var6.bind(var5)(var4, var3, var10);
            var4 = _closure1_slot3;
            var6 = var4.useCallback;
            var3 = new Array(3);
            var3[0] = var7;
            var3[1] = var9;
            var2 = var2.id;
            var3[2] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 80; continue _fun0003 }
 13:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = _closure2_slot5;
                    var5 = var5.id;
                    var1['userId'] = var5;
                    var5 = _closure2_slot0;
                    var5 = var5.id;
                    var1['channelId'] = var5;
                    var4 = _closure2_slot3;
                    var1['sourceAnalyticsLocations'] = var4;
                    var1 = var2.bind(var3)(var1);
 80:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var6.bind(var4)(var2, var3);
            _closure2_slot6 = var6;
            var3 = var4.useMemo;
            var2 = new Array(3);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var6;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 227; continue _fun0004 }
 16:
                    var2 = global;
                    var4 = var2.Date;
                    var12 = _closure2_slot4;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {constructor: {value: var4}});
                    var13 = var3;
                    var2 = new var13[var4](var12, var11);
                    var7 = var2 instanceof Object ? var2 : var3;
                    var2 = _closure2_slot5;
                    if(!(var1 == var2)) { _fun0004_ip = 128; continue _fun0004 }
 56:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 14;
                    var4 = var9[var2];
                    var3 = undefined;
                    var4 = var6.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var9[var2];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.t;
                    var3 = var2.EyygeH;
                    var2 = {};
                    var2['linkedAtDate'] = var7;
                    var2 = var4.bind(var5)(var3, var2);
                    _fun0004_ip = 225; continue _fun0004;
 128:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 14;
                    var5 = var10[var3];
                    var4 = undefined;
                    var5 = var9.bind(var4)(var5);
                    var6 = var5.intl;
                    var5 = var6.format;
                    var3 = var10[var3];
                    var3 = var9.bind(var4)(var3);
                    var3 = var3.t;
                    var4 = var3.uV2AkJ;
                    var3 = {};
                    var8 = _closure2_slot5;
                    var8 = var8.username;
                    var3['username'] = var8;
                    var8 = function usernameHook(arg1, arg2) {
                        var5 = _closure1_slot6;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 15;
                        var1 = var3[var1];
                        var4 = undefined;
                        var1 = var2.bind(var4)(var1);
                        var3 = var1.Text;
                        var2 = {'onPress': null, 'variant': 'text-sm/semibold', 'color': 'text-primary'};
                        var1 = _closure2_slot6;
                        var2['onPress'] = var1;
                        var1 = arg1;
                        var2['children'] = var1;
                        var1 = arg2;
                        var1 = var5.bind(var4)(var3, var2, var1);
                        return var1;
                    };
                    var3['usernameHook'] = var8;
                    var3['linkedAtDate'] = var7;
                    var2 = var5.bind(var6)(var4, var3);
 225:
                    return var2;
 227:
                    return var1;
                }
            };
            var26 = var3.bind(var4)(var1, var2);
            var2 = var17 == var20;
            var1 = null;
            if(var2) { _fun0001_ip = 1085; continue _fun0001 }
 470:
            var4 = _closure1_slot6;
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 16;
            var2 = var18[var2];
            var2 = var19.bind(var5)(var2);
            var3 = var2.RedesignCompat;
            var2 = {};
            var8 = _closure1_slot8;
            var13 = 17;
            var6 = var18[var13];
            var6 = var19.bind(var5)(var6);
            var7 = var6.Form;
            var6 = {};
            var12 = _closure1_slot4;
            var9 = {};
            var10 = var14.header;
            var9['style'] = var10;
            var24 = _closure1_slot1;
            var21 = 18;
            var10 = var18[var21];
            var16 = var24.bind(var5)(var10);
            var10 = {};
            var23 = 19;
            var23 = var18[var23];
            var25 = var24.bind(var5)(var23);
            var24 = var25.getApplicationIconSource;
            var23 = {};
            var27 = var20.id;
            var23['id'] = var27;
            var27 = var20.icon;
            var23['icon'] = var27;
            var23 = var24.bind(var25)(var23);
            var10['source'] = var23;
            var21 = var18[var21];
            var21 = var19.bind(var5)(var21);
            var21 = var21.AvatarSizes;
            var21 = var21.XXLARGE;
            var10['size'] = var21;
            var10 = var4.bind(var5)(var16, var10);
            var16 = new Array(3);
            var16[0] = var10;
            var10 = 15;
            var18 = var18[var10];
            var18 = var19.bind(var5)(var18);
            var19 = var18.Text;
            var18 = {'variant': 'text-md/medium', 'color': 'header-primary'};
            var20 = var20.name;
            var18['children'] = var20;
            var18 = var4.bind(var5)(var19, var18);
            var16[1] = var18;
            var17 = var17 != var26;
            if(!var17) { _fun0001_ip = 806; continue _fun0001 }
 702:
            var20 = _closure1_slot8;
            var19 = _closure1_slot7;
            var18 = {};
            var25 = _closure1_slot6;
            var23 = _closure1_slot4;
            var21 = {};
            var24 = var14.divider;
            var21['style'] = var24;
            var23 = var25.bind(var5)(var23, var21);
            var21 = new Array(2);
            var21[0] = var23;
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var23 = var23[var10];
            var23 = var24.bind(var5)(var23);
            var24 = var23.Text;
            var23 = {'variant': 'text-sm/medium', 'color': 'text-secondary'};
            var23['children'] = var26;
            var23 = var25.bind(var5)(var24, var23);
            var21[1] = var23;
            var18['children'] = var21;
            var17 = var20.bind(var5)(var19, var18);
 806:
            var16[2] = var17;
            var9['children'] = var16;
            var12 = var8.bind(var5)(var12, var9);
            var9 = new Array(3);
            var9[0] = var12;
            var12 = _closure1_slot6;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var10 = var20[var10];
            var10 = var19.bind(var5)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-sm/normal', 'color': 'header-secondary'};
            var14 = var14.currentlySyncingText;
            var10['style'] = var14;
            var16 = 14;
            var14 = var20[var16];
            var14 = var19.bind(var5)(var14);
            var21 = var14.intl;
            var18 = var21.format;
            var14 = var20[var16];
            var14 = var19.bind(var5)(var14);
            var14 = var14.t;
            var17 = var14.DA9v5O;
            var14 = {};
            var14['channelName'] = var22;
            var14 = var18.bind(var21)(var17, var14);
            var10['children'] = var14;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var10 = var20[var13];
            var10 = var19.bind(var5)(var10);
            var11 = var10.FormSection;
            var10 = {};
            var13 = var20[var13];
            var13 = var19.bind(var5)(var13);
            var14 = var13.FormRow;
            var13 = {};
            var17 = var20[var16];
            var17 = var19.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.LLWaxc;
            var16 = var17.bind(var18)(var16);
            var13['label'] = var16;
            var16 = 'danger';
            var13['variant'] = var16;
            var13['onPress'] = var15;
            var13 = var12.bind(var5)(var14, var13);
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1085:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();