// app/modules/instant_invite/native/components/GroupDMInviteManagementScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function GroupDMInviteManagement(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.channelId;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot5;
            var3 = var4.useState;
            var1 = new Array(0);
            var3 = var3.bind(var4)(var1);
            var1 = _closure1_slot4;
            var5 = undefined;
            var10 = 2;
            var4 = var1.bind(var5)(var3, var10);
            var3 = 0;
            var1 = var4[var3];
            var _closure2_slot1 = var1;
            var9 = 1;
            var4 = var4[var9];
            var _closure2_slot2 = var4;
            var8 = _closure1_slot5;
            var6 = var8.useState;
            var4 = true;
            var6 = var6.bind(var8)(var4);
            var4 = _closure1_slot4;
            var6 = var4.bind(var5)(var6, var10);
            var4 = var6[var3];
            var6 = var6[var9];
            var _closure2_slot3 = var6;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 8;
            var6 = var11[var6];
            var8 = var8.bind(var5)(var6);
            var6 = function() {
                var3 = function() {
                    var4 = _closure1_slot3;
                    var3 = undefined;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0002_ip = 148; continue _fun0002 }
 10:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 9;
                                var2 = var3[var2];
                                var3 = undefined;
                                var2 = var5.bind(var3)(var2);
                                var6 = var2.HTTP;
                                var5 = var6.get;
                                var2 = {'url': null, 'retries': 3, 'oldFormErrors': true, 'rejectWithError': true};
                                var9 = _closure1_slot10;
                                var8 = var9.INSTANT_INVITES;
                                var7 = _closure2_slot0;
                                var7 = var8.bind(var9)(var7);
                                var2['url'] = var7;
                                var2 = var5.bind(var6)(var2);
                                SaveGenerator(address=92);
 90:
                                return var2;
 92:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0002_ip = 145; continue _fun0002 }
 98:
                                var7 = var2.body;
                                var6 = var7.map;
                                var5 = function(arg1) {
                                    var2 = arg1;
                                    var3 = _closure1_slot8;
                                    var1 = {};
                                    var7 = var1;
                                    var6 = var2;
                                    var4 = copyDataProperties(var7, var6);
                                    var5 = var2.max_uses;
                                    var4 = 'maxUses';
                                    var1[var4] = var5;
                                    var5 = var2.max_age;
                                    var4 = 'maxAge';
                                    var1[var4] = var5;
                                    var4 = var2.created_at;
                                    var2 = 'createdAt';
                                    var1[var2] = var4;
                                    var2 = var3.prototype;
                                    var2 = Object.create(var2, {constructor: {value: var3}});
                                    var8 = var2;
                                    var7 = var1;
                                    var1 = new var8[var3](var7, var6);
                                    var1 = var1 instanceof Object ? var1 : var2;
                                    return var1;
                                };
                                var6 = var6.bind(var7)(var5);
                                var5 = _closure2_slot2;
                                var5 = var5.bind(var3)(var6);
                                var5 = _closure2_slot3;
                                var4 = false;
                                var4 = var5.bind(var3)(var4);
                                return var3;
 145:
                                return var2;
 148:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure4_slot0 = var2;
                    var1 = function() {
                        var1 = undefined;
                        var4 = _closure4_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var1 = undefined;
                var3 = var3.bind(var1)();
                var4 = var3.bind(var1)();
                var3 = var4.catch;
                var2 = function() {
                    var3 = _closure2_slot3;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6 = var8.bind(var5)(var6);
            var11 = _closure1_slot5;
            var8 = var11.useState;
            var6 = 21;
            var8 = var8.bind(var11)(var6);
            var6 = _closure1_slot4;
            var8 = var6.bind(var5)(var8, var10);
            var6 = var8[var3];
            var8 = var8[var9];
            var _closure2_slot4 = var8;
            var11 = _closure1_slot5;
            var10 = var11.useMemo;
            var9 = new Array(1);
            var9[0] = var1;
            var8 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.sortBy;
                var2 = _closure2_slot1;
                var1 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.inviter;
                        var1 = null;
                        var4 = var1 == var3;
                        var2 = undefined;
                        if(var4) { _fun0003_ip = 44; continue _fun0003 }
 20:
                        var4 = var3.username;
                        var3 = var1 == var4;
                        var2 = undefined;
                        if(var3) { _fun0003_ip = 44; continue _fun0003 }
 34:
                        var3 = var4.toLowerCase;
                        var2 = var3.bind(var4)();
 44:
                        var3 = var1 != var2;
                        var1 = '';
                        if(!var3) { _fun0003_ip = 58; continue _fun0003 }
 55:
                        var1 = var2;
 58:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var9 = var10.bind(var11)(var8, var9);
            var12 = _closure1_slot5;
            var11 = var12.useEffect;
            var10 = function() {
                var3 = _closure2_slot4;
                var1 = undefined;
                var2 = 21;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = new Array(0);
            var8 = var11.bind(var12)(var10, var8);
            var12 = _closure1_slot5;
            var11 = var12.useCallback;
            var10 = function(arg1) {
                var1 = arg1;
                var1 = var1.code;
                return var1;
            };
            var8 = new Array(0);
            var8 = var11.bind(var12)(var10, var8);
            var12 = _closure1_slot5;
            var11 = var12.useCallback;
            var10 = new Array(1);
            var10[0] = var1;
            var7 = function(arg1) {
                var1 = arg1;
                var8 = var1.item;
                var4 = _closure1_slot11;
                var3 = _closure1_slot6;
                var2 = {};
                var7 = {};
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 11;
                var10 = var9[var1];
                var1 = undefined;
                var10 = var6.bind(var1)(var10);
                var10 = var10.spacing;
                var10 = var10.PX_12;
                var7['marginHorizontal'] = var10;
                var2['style'] = var7;
                var7 = _closure1_slot11;
                var5 = 12;
                var5 = var9[var5];
                var6 = var6.bind(var1)(var5);
                var5 = {};
                var5['invite'] = var8;
                var8 = function onInviteRevoked(arg1) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var3 = _closure2_slot2;
                    var4 = _closure2_slot1;
                    var2 = var4.filter;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.code;
                        var1 = _closure4_slot0;
                        var1 = var1.code;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var2 = var2.bind(var4)(var1);
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var5['onInviteRevoked'] = var8;
                var5 = var7.bind(var1)(var6, var5);
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var7 = var11.bind(var12)(var7, var10);
            if(var4) { _fun0001_ip = 540; continue _fun0001 }
 298:
            var1 = var1.length;
            if(!(var3 !== var1)) { _fun0001_ip = 369; continue _fun0001 }
 307:
            var4 = _closure1_slot11;
            var3 = _closure1_slot7;
            var1 = {};
            var10 = _closure1_slot12;
            var10 = var10.list;
            var1['style'] = var10;
            var1['data'] = var9;
            var1['keyExtractor'] = var8;
            var1['renderItem'] = var7;
            var7 = 10;
            var1['initialNumToRender'] = var7;
            var1['windowSize'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 538; continue _fun0001;
 369:
            var6 = _closure1_slot11;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 14;
            var3 = var11[var3];
            var4 = var8.bind(var5)(var3);
            var3 = {};
            var7 = 15;
            var7 = var11[var7];
            var7 = var8.bind(var5)(var7);
            var3['lightSource'] = var7;
            var7 = 16;
            var7 = var11[var7];
            var7 = var8.bind(var5)(var7);
            var3['darkSource'] = var7;
            var10 = _closure1_slot0;
            var7 = 17;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var12 = var8.intl;
            var9 = var12.string;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.+nLJkZ;
            var8 = var9.bind(var12)(var8);
            var3['title'] = var8;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.F53CAQ;
            var7 = var8.bind(var9)(var7);
            var3['body'] = var7;
            var1 = var6.bind(var5)(var4, var3);
 538:
            _fun0001_ip = 578; continue _fun0001;
 540:
            var4 = _closure1_slot11;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 13;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.SceneLoadingIndicator;
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
 578:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.Platform;
    var9 = var4.StyleSheet;
    var10 = var4.View;
    var _closure1_slot6 = var10;
    var4 = var4.FlatList;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ChannelSettingsSections;
    var _closure1_slot9 = var8;
    var4 = var4.Endpoints;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot11 = var4;
    var8 = var9.create;
    var4 = {};
    var10 = {};
    var11 = 8;
    var10['paddingTop'] = var11;
    var4['list'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        var2 = arg1;
        var7 = var2.channelId;
        var _closure2_slot0 = var7;
        var6 = var2.onClose;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot5;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            var4 = _closure2_slot0;
            var3 = _closure2_slot1;
            var2 = function getScreens(arg1, arg2) {
                var1 = arg1;
                var _closure4_slot0 = var1;
                var1 = {};
                var2 = _closure1_slot9;
                var3 = var2.INSTANT_INVITES_MANAGEMENT;
                var2 = {};
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var8 = 17;
                var9 = var7[var8];
                var5 = undefined;
                var9 = var6.bind(var5)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var7[var8];
                var8 = var6.bind(var5)(var8);
                var8 = var8.t;
                var8 = var8.OQ9MKi;
                var8 = var9.bind(var10)(var8);
                var2['title'] = var8;
                var8 = 18;
                var8 = var7[var8];
                var10 = var6.bind(var5)(var8);
                var9 = var10.getHeaderCloseButton;
                var8 = arg2;
                var8 = var9.bind(var10)(var8);
                var2['headerLeft'] = var8;
                var4 = function render() {
                    var4 = _closure1_slot11;
                    var3 = _closure1_slot13;
                    var2 = {};
                    var1 = _closure4_slot0;
                    var2['channelId'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var2['render'] = var4;
                var4 = 19;
                var4 = var7[var4];
                var4 = var6.bind(var5)(var4);
                var4 = var4.ImpressionNames;
                var4 = var4.GDM_SETTINGS_INVITES;
                var2['impressionName'] = var4;
                var1[var3] = var2;
                return var1;
            };
            var1 = undefined;
            var1 = var2.bind(var1)(var4, var3);
            return var1;
        };
        var6 = var3.bind(var4)(var1, var2);
        var4 = _closure1_slot11;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 20;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.Navigator;
        var1 = {};
        var1['screens'] = var6;
        var5 = _closure1_slot9;
        var5 = var5.INSTANT_INVITES_MANAGEMENT;
        var1['initialRouteName'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/instant_invite/native/components/GroupDMInviteManagementScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();