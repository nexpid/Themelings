// app/modules/create_guild/native/components/JoinServer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var7 = var6[var10];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.CreateGuildModalStates;
    var _closure1_slot5 = var7;
    var4 = var4.NUXGuildTemplatesAnalytics;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['flex'] = var9;
    var9 = {};
    var10 = 5;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.NAV_BAR_HEIGHT;
    var9['marginTop'] = var10;
    var4['contentContainer'] = var9;
    var9 = {};
    var10 = 8;
    var9['marginLeft'] = var10;
    var4['backButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/create_guild/native/components/JoinServer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function JoinServerContainer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var14 = var2.initialRoute;
            var _closure2_slot0 = var14;
            var1 = var2.onClose;
            var _closure2_slot1 = var1;
            var2 = var2.location;
            var _closure2_slot2 = var2;
            var2 = _closure1_slot8;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var13 = _closure1_slot4;
            var3 = var13.useState;
            var2 = '';
            var2 = var3.bind(var13)(var2);
            var12 = _closure1_slot3;
            var8 = 2;
            var2 = var12.bind(var4)(var2, var8);
            var5 = 0;
            var9 = var2[var5];
            var _closure2_slot3 = var9;
            var3 = 1;
            var2 = var2[var3];
            var _closure2_slot4 = var2;
            var2 = var13.useState;
            var15 = false;
            var2 = var2.bind(var13)(var15);
            var2 = var12.bind(var4)(var2, var8);
            var11 = var2[var5];
            var2 = var2[var3];
            var _closure2_slot5 = var2;
            var2 = var13.useState;
            var2 = var2.bind(var13)(var15);
            var2 = var12.bind(var4)(var2, var8);
            var8 = var2[var5];
            var2 = var2[var3];
            var _closure2_slot6 = var2;
            var2 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 6;
            var3 = var12[var3];
            var5 = var2.bind(var4)(var3);
            var3 = var5.useNavigation;
            var15 = var3.bind(var5)();
            var _closure2_slot7 = var15;
            var5 = var13.useLayoutEffect;
            var3 = new Array(3);
            var3[0] = var15;
            var3[1] = var14;
            var3[2] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot7;
                    var2 = var3.setOptions;
                    var1 = {};
                    var7 = _closure2_slot0;
                    var4 = _closure1_slot5;
                    var4 = var4.JOIN_SERVER;
                    if(!(var7 !== var4)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 7;
                    var7 = var7[var4];
                    var4 = undefined;
                    var8 = var8.bind(var4)(var7);
                    var7 = var8.getHeaderBackButton;
                    var4 = function() {
                        var2 = _closure2_slot1;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var4 = var7.bind(var8)(var4);
                    _fun0002_ip = 4; continue _fun0002;
case 2:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var6 = 7;
                    var7 = var7[var6];
                    var6 = undefined;
                    var7 = var8.bind(var6)(var7);
                    var6 = var7.getHeaderCloseButton;
                    var5 = function() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 8;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.trackNUFStep;
                        var2 = _closure1_slot6;
                        var4 = var2.STEP_GUILD_JOIN;
                        var3 = var2.STEP_FRIEND_LIST;
                        var2 = {};
                        var7 = true;
                        var2['skip'] = var7;
                        var2 = var5.bind(var6)(var4, var3, var2);
                        var2 = _closure2_slot1;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var4 = var6.bind(var7)(var5);
case 4:
                    var1['headerLeft'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var5.bind(var13)(var1, var3);
            var3 = _closure1_slot7;
            var1 = 9;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.SafeAreaPaddingView;
            var1 = {};
            var5 = true;
            var1['top'] = var5;
            var13 = var6.flex;
            var5 = new Array(2);
            var5[0] = var13;
            var6 = var6.contentContainer;
            var5[1] = var6;
            var1['style'] = var5;
            var6 = _closure1_slot1;
            var5 = 10;
            var5 = var12[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['inviteString'] = var9;
            var9 = null;
            if(!var11) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 11;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.IRq5am;
            var9 = var11.bind(var12)(var10);
case 5:
            var5['error'] = var9;
            var5['submitting'] = var8;
            var8 = function onInviteChange(arg1) {
                var3 = _closure2_slot4;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5['onInviteChange'] = var8;
            var7 = function onDone() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = var3.trim;
                    var4 = var1.bind(var3)();
                    var1 = '';
                    if(!(var1 === var4)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var5 = _closure2_slot5;
                    var3 = undefined;
                    var1 = true;
                    var1 = var5.bind(var3)(var1);
                    _fun0003_ip = 9; continue _fun0003;
case 7:
                    var3 = _closure2_slot6;
                    var6 = undefined;
                    var1 = true;
                    var1 = var3.bind(var6)(var1);
                    var3 = _closure2_slot5;
                    var1 = false;
                    var1 = var3.bind(var6)(var1);
                    var3 = var4.split;
                    var1 = '/';
                    var3 = var3.bind(var4)(var1);
                    var1 = var3.pop;
                    var5 = var1.bind(var3)();
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 12;
                    var3 = var7[var3];
                    var6 = var4.bind(var6)(var3);
                    var4 = var6.resolveInvite;
                    var7 = _closure2_slot2;
                    var3 = null;
                    var7 = var3 != var7;
                    var3 = 'Join Guild Modal';
                    if(!var7) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var3 = _closure2_slot2;
case 10:
                    var6 = var4.bind(var6)(var5, var3);
                    var4 = var6.then;
                    var3 = function() {
                        var3 = _closure2_slot6;
                        var1 = undefined;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3 = var4.bind(var6)(var3);
                    var4 = _closure2_slot7;
                    var3 = var4.push;
                    var1 = _closure1_slot5;
                    var2 = var1.ACCEPT_INVITE;
                    var1 = {};
                    var1['code'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 9:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['onDone'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();