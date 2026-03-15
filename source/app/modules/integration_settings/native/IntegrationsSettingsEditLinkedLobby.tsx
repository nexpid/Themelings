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
    var9 = {};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var9['backgroundColor'] = var12;
    var4['screenContainer'] = var9;
    var9 = {'alignItems': 'center', 'marginTop': 8, 'marginBottom': 32, 'gap': 12};
    var4['header'] = var9;
    var9 = {'height': 1, 'width': 48};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_STRONG;
    var9['backgroundColor'] = var10;
    var4['divider'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/integration_settings/native/IntegrationsSettingsEditLinkedLobby.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EditLinkedLobby(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = var3.channel;
            var _closure2_slot0 = var2;
            var3 = var3.numScreensToPop;
            var _closure2_slot1 = var3;
            var5 = undefined;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 6;
            var4 = var7[var4];
            var12 = var6.bind(var5)(var4);
            var8 = var12.useToken;
            var10 = _closure1_slot1;
            var9 = 5;
            var4 = var7[var9];
            var4 = var10.bind(var5)(var4);
            var4 = var4.modules;
            var4 = var4.mobile;
            var4 = var4.TABLE_ROW_PADDING;
            var12 = var8.bind(var12)(var4);
            var4 = _closure1_slot9;
            var22 = var4.bind(var5)();
            var4 = 7;
            var4 = var7[var4];
            var8 = var6.bind(var5)(var4);
            var4 = var8.useNavigation;
            var16 = var4.bind(var8)();
            var _closure2_slot2 = var16;
            var4 = 8;
            var4 = var7[var4];
            var8 = var10.bind(var5)(var4);
            var4 = 9;
            var4 = var7[var4];
            var4 = var10.bind(var5)(var4);
            var4 = var4.EDIT_CHANNEL_SYNCING;
            var4 = var8.bind(var5)(var4);
            var10 = var4.analyticsLocations;
            var _closure2_slot3 = var10;
            var4 = 10;
            var4 = var7[var4];
            var7 = var6.bind(var5)(var4);
            var6 = var7.useGetOrFetchApplication;
            var8 = var2.linkedLobby;
            var14 = null;
            var13 = var14 == var8;
            var4 = undefined;
            if(var13) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var8.application_id;
case 2:
            var18 = var6.bind(var7)(var4);
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 11;
            var4 = var7[var4];
            var6 = var6.bind(var5)(var4);
            var4 = true;
            var21 = var6.bind(var5)(var2, var4);
            var4 = var2.linkedLobby;
            var6 = var14 == var4;
            var8 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var4.linked_at;
case 4:
            _closure2_slot4 = var8;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 12;
            var4 = var6[var4];
            var15 = var7.bind(var5)(var4);
            var13 = var15.useStateFromStores;
            var4 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getUser;
                    var1 = _closure2_slot0;
                    var4 = var1.linkedLobby;
                    var1 = null;
                    var5 = var1 == var4;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = var4.linked_by;
case 6:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var7 = var13.bind(var15)(var7, var4);
            _closure2_slot5 = var7;
            var15 = _closure1_slot3;
            var13 = var15.useCallback;
            var4 = new Array(2);
            var4[0] = var16;
            var4[1] = var3;
            var3 = function() {
                var3 = _closure2_slot2;
                var2 = var3.pop;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var13 = var13.bind(var15)(var3, var4);
            var4 = _closure1_slot1;
            var3 = 13;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var4 = var2.id;
            var3 = var14 == var18;
            var15 = undefined;
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var15 = var18.name;
case 8:
            var16 = var14 != var15;
            var3 = '';
            if(!var16) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var15;
case 10:
            var15 = var6.bind(var5)(var4, var3, var13);
            var4 = _closure1_slot3;
            var6 = var4.useCallback;
            var3 = new Array(3);
            var3[0] = var7;
            var3[1] = var10;
            var2 = var2.id;
            var3[2] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 14;
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
case 12:
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
case 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var2 = global;
                    var4 = var2.Date;
                    var12 = _closure2_slot4;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {constructor: {value: var4}});
                    var13 = var3;
                    var2 = new var13[var4](var12, var11);
                    var7 = var2 instanceof Object ? var2 : var3;
                    var2 = _closure2_slot5;
                    if(!(var1 == var2)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 15;
                    var4 = var9[var2];
                    var3 = undefined;
                    var4 = var6.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var9[var2];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.t;
                    var3 = var2.EyygeM;
                    var2 = {};
                    var2['linkedAtDate'] = var7;
                    var2 = var4.bind(var5)(var3, var2);
                    _fun0004_ip = 18; continue _fun0004;
case 16:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 15;
                    var5 = var10[var3];
                    var4 = undefined;
                    var5 = var9.bind(var4)(var5);
                    var6 = var5.intl;
                    var5 = var6.format;
                    var3 = var10[var3];
                    var3 = var9.bind(var4)(var3);
                    var3 = var3.t;
                    var4 = var3.uV2AkA;
                    var3 = {};
                    var8 = _closure2_slot5;
                    var8 = var8.username;
                    var3['username'] = var8;
                    var8 = function usernameHook(arg1, arg2) {
                        var5 = _closure1_slot6;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 16;
                        var1 = var3[var1];
                        var4 = undefined;
                        var1 = var2.bind(var4)(var1);
                        var3 = var1.Text;
                        var2 = {'onPress': null, 'variant': 'text-sm/semibold', 'color': 'text-strong'};
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
case 18:
                    return var2;
case 14:
                    return var1;
                }
            };
            var24 = var3.bind(var4)(var1, var2);
            var2 = var14 == var18;
            var1 = null;
            if(var2) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var4 = _closure1_slot6;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 17;
            var2 = var16[var2];
            var2 = var17.bind(var5)(var2);
            var3 = var2.Form;
            var2 = {};
            var6 = var22.screenContainer;
            var2['style'] = var6;
            var6 = {};
            var10 = 16;
            var6['paddingTop'] = var10;
            var2['contentContainerStyle'] = var6;
            var8 = _closure1_slot8;
            var6 = 18;
            var6 = var16[var6];
            var6 = var17.bind(var5)(var6);
            var7 = var6.Stack;
            var6 = {};
            var25 = _closure1_slot1;
            var9 = var16[var9];
            var9 = var25.bind(var5)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_24;
            var6['spacing'] = var9;
            var9 = {};
            var9['paddingHorizontal'] = var12;
            var6['style'] = var9;
            var12 = _closure1_slot4;
            var9 = {};
            var13 = var22.header;
            var9['style'] = var13;
            var20 = 19;
            var13 = var16[var20];
            var19 = var25.bind(var5)(var13);
            var13 = {};
            var23 = 20;
            var23 = var16[var23];
            var26 = var25.bind(var5)(var23);
            var25 = var26.getApplicationIconSource;
            var23 = {};
            var27 = var18.id;
            var23['id'] = var27;
            var27 = var18.icon;
            var23['icon'] = var27;
            var23 = var25.bind(var26)(var23);
            var13['source'] = var23;
            var20 = var16[var20];
            var20 = var17.bind(var5)(var20);
            var20 = var20.AvatarSizes;
            var20 = var20.XXLARGE;
            var13['size'] = var20;
            var19 = var4.bind(var5)(var19, var13);
            var13 = new Array(3);
            var13[0] = var19;
            var16 = var16[var10];
            var16 = var17.bind(var5)(var16);
            var17 = var16.Text;
            var16 = {'variant': 'text-md/medium', 'color': 'mobile-text-heading-primary'};
            var18 = var18.name;
            var16['children'] = var18;
            var16 = var4.bind(var5)(var17, var16);
            var13[1] = var16;
            var14 = var14 != var24;
            if(!var14) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var18 = _closure1_slot8;
            var17 = _closure1_slot7;
            var16 = {};
            var23 = _closure1_slot6;
            var20 = _closure1_slot4;
            var19 = {};
            var22 = var22.divider;
            var19['style'] = var22;
            var20 = var23.bind(var5)(var20, var19);
            var19 = new Array(2);
            var19[0] = var20;
            var22 = _closure1_slot0;
            var20 = _closure1_slot2;
            var20 = var20[var10];
            var20 = var22.bind(var5)(var20);
            var22 = var20.Text;
            var20 = {'variant': 'text-sm/medium', 'color': 'text-subtle'};
            var20['children'] = var24;
            var20 = var23.bind(var5)(var22, var20);
            var19[1] = var20;
            var16['children'] = var19;
            var14 = var18.bind(var5)(var17, var16);
case 21:
            var13[2] = var14;
            var9['children'] = var13;
            var12 = var8.bind(var5)(var12, var9);
            var9 = new Array(3);
            var9[0] = var12;
            var12 = _closure1_slot6;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var10 = var20[var10];
            var10 = var19.bind(var5)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-sm/normal', 'color': 'text-default'};
            var16 = 15;
            var13 = var20[var16];
            var13 = var19.bind(var5)(var13);
            var18 = var13.intl;
            var17 = var18.format;
            var13 = var20[var16];
            var13 = var19.bind(var5)(var13);
            var13 = var13.t;
            var14 = var13.DA9v5F;
            var13 = {};
            var13['channelName'] = var21;
            var13 = var17.bind(var18)(var14, var13);
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var10 = 21;
            var10 = var20[var10];
            var10 = var19.bind(var5)(var10);
            var11 = var10.TableRowGroup;
            var10 = {};
            var13 = 22;
            var13 = var20[var13];
            var13 = var19.bind(var5)(var13);
            var14 = var13.TableRow;
            var13 = {};
            var17 = var20[var16];
            var17 = var19.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.LLWaxQ;
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
case 19:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();