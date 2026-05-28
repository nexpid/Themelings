// app/modules/voice_panel/native/header/VoicePanelSettingsOverview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var7;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot23;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot23;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var2 = function VoicePanelSettingsOverviewHeader(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var3 = var2.guildId;
            var _closure2_slot0 = var3;
            var5 = var2.channelId;
            var _closure2_slot1 = var5;
            var2 = _closure1_slot21;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var16 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 16;
            var3 = var13[var2];
            var8 = var16.bind(var4)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot12;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure1_slot12;
                var1 = var3.getVoiceStatesForChannelAlt;
                var6 = _closure2_slot1;
                var5 = _closure2_slot0;
                var1 = var1.bind(var3)(var6, var5);
                var7 = var1.slice;
                var4 = 0;
                var3 = 2;
                var7 = var7.bind(var1)(var4, var3);
                var4 = var7.map;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.user;
                    return var1;
                };
                var4 = var4.bind(var7)(var3);
                var7 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 17;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var7.bind(var3)(var2);
                var7 = var1.length;
                var1 = var4.length;
                var8 = var7 - var1;
                var12 = undefined;
                var11 = var5;
                var10 = var6;
                var9 = var4;
                var1 = var12[var2](var11, var10, var9, var8, var7);
                return var1;
            };
            var14 = var7.bind(var8)(var6, var3);
            var2 = var13[var2];
            var7 = var16.bind(var4)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var6.bind(var7)(var3, var1, var2);
            var8 = _closure1_slot1;
            var1 = 18;
            var1 = var13[var1];
            var1 = var8.bind(var4)(var1);
            var18 = var1.bind(var4)(var2);
            var1 = 19;
            var1 = var13[var1];
            var3 = var16.bind(var4)(var1);
            var2 = var3.useIsSecureFramesUIEnabled;
            var1 = {};
            var1['channelId'] = var5;
            var6 = var2.bind(var3)(var1);
            var1 = 20;
            var1 = var13[var1];
            var3 = var16.bind(var4)(var1);
            var2 = var3.useIsCallSecureFramesVerified;
            var1 = {};
            var1['channelId'] = var5;
            var15 = var2.bind(var3)(var1);
            var3 = _closure1_slot19;
            var7 = 21;
            var1 = var13[var7];
            var2 = var8.bind(var4)(var1);
            var1 = {};
            var5 = var10.headerContainer;
            var1['style'] = var5;
            var9 = _closure1_slot19;
            var5 = var13[var7];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var11 = var10.channelTitleWrapper;
            var5['style'] = var11;
            var17 = _closure1_slot18;
            var11 = 22;
            var13 = var13[var11];
            var13 = var16.bind(var4)(var13);
            var16 = var13.Text;
            var13 = {'style': null, 'variant': 'heading-lg/bold', 'lineClamp': 1, 'accessibilityRole': 'header'};
            var19 = var10.channelTitle;
            var13['style'] = var19;
            var13['children'] = var18;
            var16 = var17.bind(var4)(var16, var13);
            var13 = new Array(2);
            var13[0] = var16;
            if(!var15) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var18 = _closure1_slot18;
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var16 = 23;
            var16 = var23[var16];
            var16 = var22.bind(var4)(var16);
            var17 = var16.ShieldLockIcon;
            var16 = {};
            var19 = var10.secureFramesIcon;
            var16['style'] = var19;
            var19 = 'xs';
            var16['size'] = var19;
            var19 = 24;
            var20 = var23[var19];
            var20 = var22.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var23[var19];
            var19 = var22.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.mR9cf3;
            var19 = var20.bind(var21)(var19);
            var16['accessibilityLabel'] = var19;
            var15 = var18.bind(var4)(var17, var16);
case 36:
            var13[1] = var15;
            var5['children'] = var13;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(3);
            var5[0] = var8;
            var13 = _closure1_slot18;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var11];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'style': null, 'variant': 'text-sm/medium', 'accessibilityRole': 'summary'};
            var15 = var10.channelSubtitle;
            var8['style'] = var15;
            var8['children'] = var14;
            var8 = var13.bind(var4)(var9, var8);
            var5[1] = var8;
            if(!var6) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var9 = _closure1_slot19;
            var8 = _closure1_slot1;
            var18 = _closure1_slot2;
            var7 = var18[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var10 = var10.secureFrames;
            var7['style'] = var10;
            var14 = _closure1_slot18;
            var17 = _closure1_slot0;
            var10 = 25;
            var10 = var18[var10];
            var10 = var17.bind(var4)(var10);
            var13 = var10.LockIcon;
            var10 = {'size': 'xxs', 'color': 'status-positive'};
            var13 = var14.bind(var4)(var13, var10);
            var10 = new Array(2);
            var10[0] = var13;
            var13 = _closure1_slot18;
            var11 = var18[var11];
            var11 = var17.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-xs/medium', 'color': 'status-positive'};
            var14 = 24;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14["3BogKe"];
            var14 = var15.bind(var16)(var14);
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 38:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot24 = var2;
    var1 = function ShareActivityLogsButton() {
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 26;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.stringify;
                var6 = _closure1_slot15;
                var2 = new Array(1);
                var2[0] = var6;
                var2 = var3.bind(var4)(var2);
                var3 = '';
                if(!(var3 !== var2)) { _fun0005_ip = 40; continue _fun0005 }
case 28:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 28;
                var3 = var6[var3];
                var7 = var4.bind(var1)(var3);
                var3 = var7.closeVoicePanelSettingsActionSheet;
                var3 = var3.bind(var7)();
                var3 = 29;
                var3 = var6[var3];
                var6 = var4.bind(var1)(var3);
                var4 = var6.showShareActionSheet;
                var3 = {};
                var3['message'] = var2;
                var2 = 'Activity Logs';
                var2 = var4.bind(var6)(var3, var2);
                _fun0005_ip = 41; continue _fun0005;
case 40:
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 27;
                var2 = var9[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var6 = 'EMBEDDED_ACTIVITIES_SHARE_EMPTY_LOGS_ERROR_MESSAGE';
                var2['key'] = var6;
                var8 = _closure1_slot0;
                var5 = 24;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.i+9VWy;
                var5 = var6.bind(var7)(var5);
                var2['content'] = var5;
                var2 = var3.bind(var4)(var2);
case 41:
                return var1;
            }
        };
        var1 = new Array(0);
        var7 = var3.bind(var4)(var2, var1);
        var4 = _closure1_slot18;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 30;
        var1 = var8[var1];
        var3 = undefined;
        var1 = var6.bind(var3)(var1);
        var2 = var1.TableRow;
        var1 = {};
        var1['onPress'] = var7;
        var10 = _closure1_slot18;
        var7 = 31;
        var7 = var8[var7];
        var7 = var6.bind(var3)(var7);
        var9 = var7.TableRowIcon;
        var7 = {};
        var11 = 32;
        var11 = var8[var11];
        var11 = var6.bind(var3)(var11);
        var11 = var11.WrenchIcon;
        var7['IconComponent'] = var11;
        var12 = _closure1_slot1;
        var11 = 33;
        var11 = var8[var11];
        var11 = var12.bind(var3)(var11);
        var7['source'] = var11;
        var7 = var10.bind(var3)(var9, var7);
        var1['icon'] = var7;
        var7 = 24;
        var9 = var8[var7];
        var9 = var6.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var7 = var8[var7];
        var7 = var6.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.iQzQs3;
        var7 = var9.bind(var10)(var7);
        var1['label'] = var7;
        var7 = _closure1_slot18;
        var5 = 34;
        var5 = var8[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.TableRowArrow;
        var5 = {};
        var5 = var7.bind(var3)(var6, var5);
        var1['trailing'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function ActivityDebugToggle() {
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 16;
        var2 = var9[var2];
        var4 = undefined;
        var6 = var8.bind(var4)(var2);
        var5 = var6.useStateFromStores;
        var2 = _closure1_slot6;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var2 = _closure1_slot6;
            var1 = var2.getShowActivitiesDebugOverlay;
            var1 = var1.bind(var2)();
            return var1;
        };
        var7 = var5.bind(var6)(var3, var2);
        var5 = _closure1_slot3;
        var3 = var5.useCallback;
        var2 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 35;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY';
            var2['type'] = var5;
            var5 = arg1;
            var2['visible'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = new Array(0);
        var6 = var3.bind(var5)(var2, var1);
        var3 = _closure1_slot18;
        var1 = 36;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.TableSwitchRow;
        var1 = {};
        var11 = _closure1_slot18;
        var5 = 31;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var10 = var5.TableRowIcon;
        var5 = {};
        var13 = 32;
        var13 = var9[var13];
        var13 = var8.bind(var4)(var13);
        var13 = var13.WrenchIcon;
        var5['IconComponent'] = var13;
        var13 = _closure1_slot1;
        var12 = 33;
        var12 = var9[var12];
        var12 = var13.bind(var4)(var12);
        var5['source'] = var12;
        var5 = var11.bind(var4)(var10, var5);
        var1['icon'] = var5;
        var5 = 24;
        var10 = var9[var5];
        var10 = var8.bind(var4)(var10);
        var12 = var10.intl;
        var11 = var12.string;
        var10 = var9[var5];
        var10 = var8.bind(var4)(var10);
        var10 = var10.t;
        var10 = var10.qv5/SP;
        var10 = var11.bind(var12)(var10);
        var1['accessibilityHint'] = var10;
        var1['value'] = var7;
        var1['onValueChange'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.qv5/SP;
        var5 = var6.bind(var7)(var5);
        var1['label'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var8 = var5.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var5 = 1;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var12 = 4;
    var5 = var7[var12];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.AnalyticsSections;
    var _closure1_slot13 = var9;
    var9 = var5.Permissions;
    var _closure1_slot14 = var9;
    var5 = var5.RPC_APPLICATION_LOGGING_CATEGORY;
    var _closure1_slot15 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.isStreamParticipant;
    var _closure1_slot16 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.SECURE_FRAMES_CALL_VERIFICATION_BOTTOM_SHEET_KEY;
    var _closure1_slot17 = var5;
    var5 = 13;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot18 = var9;
    var9 = var5.jsxs;
    var _closure1_slot19 = var9;
    var5 = var5.Fragment;
    var _closure1_slot20 = var5;
    var5 = 14;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = {};
    var11 = {};
    var13 = 'center';
    var11['alignItems'] = var13;
    var5['headerContainer'] = var11;
    var11 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'marginTop': 8};
    var5['channelTitleWrapper'] = var11;
    var11 = {};
    var11['textAlign'] = var13;
    var5['channelTitle'] = var11;
    var11 = {'marginTop': 4, 'marginHorizontal': 16, 'textAlign': 'center'};
    var5['channelSubtitle'] = var11;
    var11 = {'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': null, 'borderRadius': null, 'marginTop': 8, 'padding': 4, 'gap': 4};
    var13 = 15;
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_SURFACE_HIGH;
    var11['backgroundColor'] = var15;
    var13 = var7[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var11['borderRadius'] = var13;
    var5['secureFrames'] = var11;
    var11 = {};
    var11['marginStart'] = var12;
    var5['secureFramesIcon'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot21 = var5;
    var5 = var8.memo;
    var4 = function VoicePanelSettingsOverview(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var15 = var1.guildId;
            var _closure2_slot0 = var15;
            var13 = var1.channelId;
            var _closure2_slot1 = var13;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var5 = var3[var1];
            var4 = undefined;
            var8 = var2.bind(var4)(var5);
            var7 = var8.useStateFromStores;
            var5 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var30 = var7.bind(var8)(var6, var5);
            var _closure2_slot2 = var30;
            var5 = 37;
            var5 = var3[var5];
            var5 = var2.bind(var4)(var5);
            var6 = var5.DeveloperMode;
            var5 = var6.useSetting;
            var8 = var5.bind(var6)();
            var5 = var3[var1];
            var9 = var2.bind(var4)(var5);
            var7 = var9.useStateFromStores;
            var5 = _closure1_slot12;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var4 = _closure1_slot12;
                var3 = var4.getVoiceStatesForChannelAlt;
                var2 = _closure2_slot1;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var22 = var7.bind(var9)(var6, var5);
            var _closure2_slot3 = var22;
            var5 = var3[var1];
            var10 = var2.bind(var4)(var5);
            var9 = var10.useStateFromStoresArray;
            var5 = _closure1_slot11;
            var7 = new Array(1);
            var7[0] = var5;
            var6 = new Array(2);
            var6[0] = var30;
            var6[1] = var22;
            var5 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var8 = null;
                    if(!(var8 != var1)) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                    var3 = _closure2_slot2;
                    var1 = var3.isPrivate;
                    var1 = var1.bind(var3)();
                    if(!var1) { _fun0007_ip = 42; continue _fun0007 }
case 44:
                    var1 = global;
                    var4 = var1.Set;
                    var5 = _closure2_slot3;
                    var3 = var5.map;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.user;
                        var1 = var1.id;
                        return var1;
                    };
                    var12 = var3.bind(var5)(var1);
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {constructor: {value: var4}});
                    var13 = var3;
                    var1 = new var13[var4](var12, var11);
                    var7 = var1 instanceof Object ? var1 : var3;
                    var1 = new Array(0);
                    var3 = _closure1_slot22;
                    var2 = _closure2_slot2;
                    var2 = var2.recipients;
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if(var2) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                    var11 = var3.value;
                    var9 = _closure1_slot11;
                    var2 = var9.getUser;
                    var9 = var2.bind(var9)(var11);
                    var2 = var8 == var9;
                    if(var2) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                    var10 = var7.has;
                    var2 = var10.bind(var7)(var11);
case 47:
                    if(var2) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var9);
case 49:
                    var9 = var4.bind(var5)();
                    var2 = var9.done;
                    var3 = var9;
                    if(!var2) { _fun0007_ip = 46; continue _fun0007 }
case 45:
                    return var1;
case 42:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var20 = var9.bind(var10)(var7, var5, var6);
            var5 = var3[var1];
            var9 = var2.bind(var4)(var5);
            var7 = var9.useStateFromStores;
            var5 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var2 = _closure1_slot9;
                var1 = var2.isSelfDeaf;
                var1 = var1.bind(var2)();
                return var1;
            };
            var41 = var7.bind(var9)(var6, var5);
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var6 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 38;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.toggleSelfDeaf;
                var2 = var2.bind(var3)();
                return var1;
            };
            var5 = new Array(0);
            var40 = var7.bind(var9)(var6, var5);
            var5 = var3[var1];
            var10 = var2.bind(var4)(var5);
            var9 = var10.useStateFromStores;
            var5 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var5;
            var6 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getVoiceParticipantsHidden;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var37 = var9.bind(var10)(var7, var6);
            var _closure2_slot4 = var37;
            var6 = var3[var1];
            var9 = var2.bind(var4)(var6);
            var7 = var9.useStateFromStores;
            var6 = new Array(2);
            var6[0] = var5;
            var5 = _closure1_slot7;
            var6[1] = var5;
            var5 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure1_slot5;
                    var2 = var4.getSelectedParticipant;
                    var1 = _closure2_slot1;
                    var2 = var2.bind(var4)(var1);
                    var4 = _closure1_slot16;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var1 = null;
                    if(!var4) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                    var4 = var2.stream;
                    var4 = var4.ownerId;
                    var6 = _closure1_slot7;
                    var3 = var6.getId;
                    var3 = var3.bind(var6)();
                    var1 = null;
                    if(!(var4 !== var3)) { _fun0008_ip = 51; continue _fun0008 }
case 53:
                    var1 = var2.id;
case 51:
                    return var1;
                }
            };
            var24 = var7.bind(var9)(var6, var5);
            var _closure2_slot5 = var24;
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var6 = new Array(2);
            var6[0] = var13;
            var6[1] = var37;
            var5 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 39;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.toggleVoiceParticipantsHidden;
                var3 = _closure2_slot1;
                var2 = _closure2_slot4;
                var2 = !var2;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var35 = var7.bind(var9)(var5, var6);
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var6 = new Array(1);
            var6[0] = var13;
            var5 = function() {
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 28;
                var3 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.closeVoicePanelSettingsActionSheet;
                var3 = var3.bind(var5)();
                var3 = _closure1_slot1;
                var2 = 40;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = _closure2_slot1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var26 = var7.bind(var9)(var5, var6);
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var6 = new Array(1);
            var6[0] = var15;
            var5 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 28;
                var2 = var4[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var2 = var5.closeVoicePanelSettingsActionSheet;
                var2 = var2.bind(var5)();
                var2 = 41;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.showVoiceSettingsActionSheet;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var18 = var7.bind(var9)(var5, var6);
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var6 = new Array(1);
            var6[0] = var13;
            var5 = function() {
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 42;
                var4 = var3[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var7 = _closure1_slot0;
                var4 = 44;
                var4 = var3[var4];
                var7 = var7.bind(var1)(var4);
                var4 = 43;
                var4 = var3[var4];
                var3 = var3.paths;
                var4 = var7.bind(var1)(var4, var3);
                var3 = _closure1_slot17;
                var2 = {};
                var7 = _closure2_slot1;
                var2['channelId'] = var7;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var36 = var7.bind(var9)(var5, var6);
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var6 = new Array(2);
            var6[0] = var13;
            var6[1] = var24;
            var5 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0009_ip = 54; continue _fun0009 }
case 55:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 45;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.openSecureFramesStreamVerification;
                    var2 = _closure2_slot5;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2, var1);
case 54:
                    var1 = undefined;
                    return var1;
                }
            };
            var31 = var7.bind(var9)(var5, var6);
            var5 = 46;
            var6 = var3[var5];
            var7 = var2.bind(var4)(var6);
            var6 = var7.useIsCallRTCConnectionEmpty;
            var29 = var6.bind(var7)();
            var5 = var3[var5];
            var6 = var2.bind(var4)(var5);
            var5 = var6.useIsStreamRTCConnectionEmpty;
            var23 = var5.bind(var6)(var24);
            var5 = var3[var1];
            var10 = var2.bind(var4)(var5);
            var9 = var10.useStateFromStores;
            var5 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var5;
            var6 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentEmbeddedActivity;
                var2 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var5 = new Array(0);
            var10 = var9.bind(var10)(var7, var6, var5);
            var5 = _closure1_slot1;
            var6 = 47;
            var6 = var3[var6];
            var6 = var5.bind(var4)(var6);
            var7 = var6.bind(var4)(var30);
            var1 = var3[var1];
            var14 = var2.bind(var4)(var1);
            var12 = var14.useStateFromStores;
            var1 = _closure1_slot10;
            var9 = new Array(1);
            var9[0] = var1;
            var6 = new Array(1);
            var6[0] = var13;
            var1 = function() {
                var4 = _closure1_slot10;
                var3 = var4.canWithPartialContext;
                var1 = _closure1_slot14;
                var2 = var1.MANAGE_CHANNELS;
                var1 = {};
                var5 = _closure2_slot1;
                var1['channelId'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var14 = var12.bind(var14)(var9, var1, var6);
            var1 = 48;
            var1 = var3[var1];
            var6 = var2.bind(var4)(var1);
            var1 = var6.useCanInviteMembers;
            var21 = var1.bind(var6)(var13);
            var1 = 49;
            var1 = var3[var1];
            var6 = var2.bind(var4)(var1);
            var1 = var6.useInviteMembersCallback;
            var28 = var1.bind(var6)(var13);
            var1 = 50;
            var1 = var3[var1];
            var1 = var5.bind(var4)(var1);
            var9 = var1.bind(var4)(var30);
            var1 = 19;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useIsSecureFramesUIEnabled;
            var1 = {};
            var1['channelId'] = var13;
            var19 = var2.bind(var3)(var1);
            var _closure2_slot6 = var19;
            var3 = _closure1_slot19;
            var2 = _closure1_slot20;
            var1 = {};
            var12 = _closure1_slot18;
            var6 = _closure1_slot24;
            var5 = {};
            var5['guildId'] = var15;
            var5['channelId'] = var13;
            var6 = var12.bind(var4)(var6, var5);
            var5 = new Array(6);
            var5[0] = var6;
            var12 = null;
            var6 = null;
            if(!var9) { _fun0006_ip = 56; continue _fun0006 }
case 57:
            var15 = _closure1_slot18;
            var13 = _closure1_slot0;
            var32 = _closure1_slot2;
            var9 = 51;
            var9 = var32[var9];
            var9 = var13.bind(var4)(var9);
            var13 = var9.VoicePanelFormSection;
            var9 = {};
            var16 = false;
            var9['hasIcons'] = var16;
            var27 = _closure1_slot18;
            var25 = _closure1_slot1;
            var16 = 52;
            var16 = var32[var16];
            var25 = var25.bind(var4)(var16);
            var16 = {};
            var16['channel'] = var30;
            var30 = _closure1_slot13;
            var30 = var30.CHANNEL_ACTION_SHEET;
            var16['analyticsSection'] = var30;
            var16 = var27.bind(var4)(var25, var16);
            var9['children'] = var16;
            var6 = var15.bind(var4)(var13, var9);
case 56:
            var5[1] = var6;
            var6 = var14;
            if(var14) { _fun0006_ip = 58; continue _fun0006 }
case 59:
            var6 = var7;
case 58:
            if(!var6) { _fun0006_ip = 60; continue _fun0006 }
case 61:
            var13 = _closure1_slot18;
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 51;
            var7 = var15[var7];
            var7 = var9.bind(var4)(var7);
            var9 = var7.VoicePanelFormSection;
            var7 = {};
            var15 = false;
            var7['hasIcons'] = var15;
            if(!var14) { _fun0006_ip = 62; continue _fun0006 }
case 63:
            var25 = _closure1_slot18;
            var27 = _closure1_slot0;
            var32 = _closure1_slot2;
            var15 = 30;
            var15 = var32[var15];
            var15 = var27.bind(var4)(var15);
            var16 = var15.TableRow;
            var15 = {};
            var15['onPress'] = var26;
            var26 = 24;
            var30 = var32[var26];
            var30 = var27.bind(var4)(var30);
            var34 = var30.intl;
            var33 = var34.string;
            var30 = var32[var26];
            var30 = var27.bind(var4)(var30);
            var30 = var30.t;
            var30 = var30.XPDhcc;
            var30 = var33.bind(var34)(var30);
            var15['label'] = var30;
            var30 = var32[var26];
            var30 = var27.bind(var4)(var30);
            var33 = var30.intl;
            var30 = var33.string;
            var26 = var32[var26];
            var26 = var27.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26.w7ZEot;
            var26 = var30.bind(var33)(var26);
            var15['subLabel'] = var26;
            var30 = _closure1_slot18;
            var26 = 34;
            var26 = var32[var26];
            var26 = var27.bind(var4)(var26);
            var27 = var26.TableRowArrow;
            var26 = {};
            var26 = var30.bind(var4)(var27, var26);
            var15['trailing'] = var26;
            var14 = var25.bind(var4)(var16, var15);
case 62:
            var7['children'] = var14;
            var6 = var13.bind(var4)(var9, var7);
case 60:
            var5[2] = var6;
            var14 = _closure1_slot19;
            var38 = _closure1_slot0;
            var33 = _closure1_slot2;
            var7 = 51;
            var6 = var33[var7];
            var6 = var38.bind(var4)(var6);
            var9 = var6.VoicePanelFormSection;
            var6 = {};
            var13 = true;
            var6['hasIcons'] = var13;
            var30 = _closure1_slot18;
            var16 = 30;
            var15 = var33[var16];
            var15 = var38.bind(var4)(var15);
            var25 = var15.TableRow;
            var15 = {};
            var15['onPress'] = var18;
            var32 = _closure1_slot18;
            var26 = 31;
            var18 = var33[var26];
            var18 = var38.bind(var4)(var18);
            var27 = var18.TableRowIcon;
            var18 = {};
            var34 = 53;
            var34 = var33[var34];
            var34 = var38.bind(var4)(var34);
            var34 = var34.SettingsIcon;
            var18['IconComponent'] = var34;
            var43 = _closure1_slot1;
            var34 = 54;
            var39 = var33[var34];
            var39 = var43.bind(var4)(var39);
            var18['source'] = var39;
            var18 = var32.bind(var4)(var27, var18);
            var15['icon'] = var18;
            var18 = 24;
            var27 = var33[var18];
            var27 = var38.bind(var4)(var27);
            var39 = var27.intl;
            var32 = var39.string;
            var27 = var33[var18];
            var27 = var38.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.NiTd0e;
            var27 = var32.bind(var39)(var27);
            var15['label'] = var27;
            var27 = var33[var18];
            var27 = var38.bind(var4)(var27);
            var39 = var27.intl;
            var32 = var39.string;
            var27 = var33[var18];
            var27 = var38.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27["16SG+O"];
            var27 = var32.bind(var39)(var27);
            var15['subLabel'] = var27;
            var42 = _closure1_slot18;
            var27 = 34;
            var32 = var33[var27];
            var32 = var38.bind(var4)(var32);
            var39 = var32.TableRowArrow;
            var32 = {};
            var32 = var42.bind(var4)(var39, var32);
            var15['trailing'] = var32;
            var25 = var30.bind(var4)(var25, var15);
            var15 = new Array(5);
            var15[0] = var25;
            var39 = _closure1_slot18;
            var25 = 36;
            var30 = var33[var25];
            var30 = var38.bind(var4)(var30);
            var32 = var30.TableSwitchRow;
            var30 = {};
            var45 = _closure1_slot18;
            var42 = var33[var26];
            var42 = var38.bind(var4)(var42);
            var44 = var42.TableRowIcon;
            var42 = {};
            var46 = 55;
            var46 = var33[var46];
            var46 = var38.bind(var4)(var46);
            var46 = var46.HeadphonesSlashIcon;
            var42['IconComponent'] = var46;
            var46 = 56;
            var46 = var33[var46];
            var46 = var43.bind(var4)(var46);
            var42['source'] = var46;
            var42 = var45.bind(var4)(var44, var42);
            var30['icon'] = var42;
            var42 = var33[var18];
            var42 = var38.bind(var4)(var42);
            var45 = var42.intl;
            var44 = var45.string;
            var42 = var33[var18];
            var42 = var38.bind(var4)(var42);
            var42 = var42.t;
            var42 = var42.wjcRFX;
            var42 = var44.bind(var45)(var42);
            var30['accessibilityHint'] = var42;
            var30['value'] = var41;
            var30['onValueChange'] = var40;
            var40 = var33[var18];
            var40 = var38.bind(var4)(var40);
            var42 = var40.intl;
            var41 = var42.string;
            var40 = var33[var18];
            var40 = var38.bind(var4)(var40);
            var40 = var40.t;
            var40 = var40.wjcRFX;
            var40 = var41.bind(var42)(var40);
            var30['label'] = var40;
            var40 = var33[var18];
            var40 = var38.bind(var4)(var40);
            var42 = var40.intl;
            var41 = var42.string;
            var40 = var33[var18];
            var40 = var38.bind(var4)(var40);
            var40 = var40.t;
            var40 = var40.M3VN2U;
            var40 = var41.bind(var42)(var40);
            var30['subLabel'] = var40;
            var30 = var39.bind(var4)(var32, var30);
            var15[1] = var30;
            var32 = _closure1_slot18;
            var25 = var33[var25];
            var25 = var38.bind(var4)(var25);
            var30 = var25.TableSwitchRow;
            var25 = {};
            var41 = _closure1_slot18;
            var39 = var33[var26];
            var39 = var38.bind(var4)(var39);
            var40 = var39.TableRowIcon;
            var39 = {};
            var42 = 57;
            var42 = var33[var42];
            var42 = var38.bind(var4)(var42);
            var42 = var42.VideoIcon;
            var39['IconComponent'] = var42;
            var42 = 58;
            var42 = var33[var42];
            var42 = var43.bind(var4)(var42);
            var39['source'] = var42;
            var39 = var41.bind(var4)(var40, var39);
            var25['icon'] = var39;
            var39 = var33[var18];
            var39 = var38.bind(var4)(var39);
            var41 = var39.intl;
            var40 = var41.string;
            var39 = var33[var18];
            var39 = var38.bind(var4)(var39);
            var39 = var39.t;
            var39 = var39.ZMTRyc;
            var39 = var40.bind(var41)(var39);
            var25['accessibilityHint'] = var39;
            var25['value'] = var37;
            var25['onValueChange'] = var35;
            var35 = var33[var18];
            var35 = var38.bind(var4)(var35);
            var39 = var35.intl;
            var37 = var39.string;
            var35 = var33[var18];
            var35 = var38.bind(var4)(var35);
            var35 = var35.t;
            var35 = var35.ZMTRyc;
            var35 = var37.bind(var39)(var35);
            var25['label'] = var35;
            var35 = var33[var18];
            var35 = var38.bind(var4)(var35);
            var37 = var35.intl;
            var35 = var37.string;
            var33 = var33[var18];
            var33 = var38.bind(var4)(var33);
            var33 = var33.t;
            var33 = var33.MlpCFS;
            var33 = var35.bind(var37)(var33);
            var25['subLabel'] = var33;
            var25 = var32.bind(var4)(var30, var25);
            var15[2] = var25;
            var25 = var19;
            if(!var19) { _fun0006_ip = 64; continue _fun0006 }
case 65:
            var25 = var12 == var24;
case 64:
            if(!var25) { _fun0006_ip = 66; continue _fun0006 }
case 67:
            var25 = !var29;
case 66:
            if(!var25) { _fun0006_ip = 68; continue _fun0006 }
case 69:
            var32 = _closure1_slot18;
            var35 = _closure1_slot0;
            var33 = _closure1_slot2;
            var29 = var33[var16];
            var29 = var35.bind(var4)(var29);
            var30 = var29.TableRow;
            var29 = {};
            var29['onPress'] = var36;
            var38 = _closure1_slot18;
            var36 = var33[var26];
            var36 = var35.bind(var4)(var36);
            var37 = var36.TableRowIcon;
            var36 = {};
            var39 = 25;
            var39 = var33[var39];
            var39 = var35.bind(var4)(var39);
            var39 = var39.LockIcon;
            var36['IconComponent'] = var39;
            var40 = _closure1_slot1;
            var39 = var33[var34];
            var39 = var40.bind(var4)(var39);
            var36['source'] = var39;
            var36 = var38.bind(var4)(var37, var36);
            var29['icon'] = var36;
            var36 = var33[var18];
            var36 = var35.bind(var4)(var36);
            var38 = var36.intl;
            var37 = var38.string;
            var36 = var33[var18];
            var36 = var35.bind(var4)(var36);
            var36 = var36.t;
            var36 = var36.cTQI5t;
            var36 = var37.bind(var38)(var36);
            var29['label'] = var36;
            var36 = var33[var18];
            var36 = var35.bind(var4)(var36);
            var38 = var36.intl;
            var37 = var38.string;
            var36 = var33[var18];
            var36 = var35.bind(var4)(var36);
            var36 = var36.t;
            var36 = var36.Etxti2;
            var36 = var37.bind(var38)(var36);
            var29['subLabel'] = var36;
            var36 = _closure1_slot18;
            var33 = var33[var27];
            var33 = var35.bind(var4)(var33);
            var35 = var33.TableRowArrow;
            var33 = {};
            var33 = var36.bind(var4)(var35, var33);
            var29['trailing'] = var33;
            var25 = var32.bind(var4)(var30, var29);
case 68:
            var15[3] = var25;
            if(!var19) { _fun0006_ip = 70; continue _fun0006 }
case 71:
            var19 = var12 != var24;
case 70:
            if(!var19) { _fun0006_ip = 72; continue _fun0006 }
case 73:
            var19 = !var23;
case 72:
            if(!var19) { _fun0006_ip = 74; continue _fun0006 }
case 75:
            var25 = _closure1_slot18;
            var30 = _closure1_slot0;
            var29 = _closure1_slot2;
            var23 = var29[var16];
            var23 = var30.bind(var4)(var23);
            var24 = var23.TableRow;
            var23 = {};
            var23['onPress'] = var31;
            var33 = _closure1_slot18;
            var31 = var29[var26];
            var31 = var30.bind(var4)(var31);
            var32 = var31.TableRowIcon;
            var31 = {};
            var35 = 25;
            var35 = var29[var35];
            var35 = var30.bind(var4)(var35);
            var35 = var35.LockIcon;
            var31['IconComponent'] = var35;
            var35 = _closure1_slot1;
            var34 = var29[var34];
            var34 = var35.bind(var4)(var34);
            var31['source'] = var34;
            var31 = var33.bind(var4)(var32, var31);
            var23['icon'] = var31;
            var31 = var29[var18];
            var31 = var30.bind(var4)(var31);
            var33 = var31.intl;
            var32 = var33.string;
            var31 = var29[var18];
            var31 = var30.bind(var4)(var31);
            var31 = var31.t;
            var31 = var31.QogHld;
            var31 = var32.bind(var33)(var31);
            var23['label'] = var31;
            var31 = var29[var18];
            var31 = var30.bind(var4)(var31);
            var33 = var31.intl;
            var32 = var33.string;
            var31 = var29[var18];
            var31 = var30.bind(var4)(var31);
            var31 = var31.t;
            var31 = var31.j5+1ed;
            var31 = var32.bind(var33)(var31);
            var23['subLabel'] = var31;
            var31 = _closure1_slot18;
            var29 = var29[var27];
            var29 = var30.bind(var4)(var29);
            var30 = var29.TableRowArrow;
            var29 = {};
            var29 = var31.bind(var4)(var30, var29);
            var23['trailing'] = var29;
            var19 = var25.bind(var4)(var24, var23);
case 74:
            var15[4] = var19;
            var6['children'] = var15;
            var6 = var14.bind(var4)(var9, var6);
            var5[3] = var6;
            var9 = var22.length;
            var6 = 0;
            var6 = var9 > var6;
            if(var6) { _fun0006_ip = 76; continue _fun0006 }
case 77:
            var6 = var21;
case 76:
            if(!var6) { _fun0006_ip = 78; continue _fun0006 }
case 79:
            var15 = _closure1_slot19;
            var23 = _closure1_slot0;
            var19 = _closure1_slot2;
            var9 = var19[var7];
            var9 = var23.bind(var4)(var9);
            var14 = var9.VoicePanelFormSection;
            var9 = {};
            var24 = var19[var18];
            var24 = var23.bind(var4)(var24);
            var30 = var24.intl;
            var29 = var30.formatToPlainString;
            var19 = var19[var18];
            var19 = var23.bind(var4)(var19);
            var19 = var19.t;
            var25 = var19.AWmdd9;
            var23 = {};
            var32 = var22.length;
            var19 = global;
            var24 = var19.HermesInternal;
            var31 = var24.concat;
            var24 = '';
            var31 = var31.bind(var24)(var32);
            var23['count'] = var31;
            var23 = var29.bind(var30)(var25, var23);
            var19 = var19.HermesInternal;
            var19 = var19.concat;
            var19 = var19.bind(var24)(var23);
            var9['title'] = var19;
            var9['hasIcons'] = var13;
            var19 = null;
            if(!var21) { _fun0006_ip = 80; continue _fun0006 }
case 81:
            var23 = _closure1_slot18;
            var25 = _closure1_slot0;
            var24 = _closure1_slot2;
            var16 = var24[var16];
            var16 = var25.bind(var4)(var16);
            var21 = var16.TableRow;
            var16 = {};
            var16['onPress'] = var28;
            var29 = _closure1_slot18;
            var26 = var24[var26];
            var26 = var25.bind(var4)(var26);
            var28 = var26.TableRowIcon;
            var26 = {};
            var30 = 59;
            var30 = var24[var30];
            var30 = var25.bind(var4)(var30);
            var30 = var30.GroupPlusIcon;
            var26['IconComponent'] = var30;
            var31 = _closure1_slot1;
            var30 = 60;
            var30 = var24[var30];
            var30 = var31.bind(var4)(var30);
            var26['source'] = var30;
            var26 = var29.bind(var4)(var28, var26);
            var16['icon'] = var26;
            var26 = var24[var18];
            var26 = var25.bind(var4)(var26);
            var29 = var26.intl;
            var28 = var29.string;
            var26 = var24[var18];
            var26 = var25.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26.f1+QIK;
            var26 = var28.bind(var29)(var26);
            var16['label'] = var26;
            var26 = _closure1_slot18;
            var24 = var24[var27];
            var24 = var25.bind(var4)(var24);
            var25 = var24.TableRowArrow;
            var24 = {};
            var24 = var26.bind(var4)(var25, var24);
            var16['trailing'] = var24;
            var19 = var23.bind(var4)(var21, var16);
case 80:
            var16 = new Array(3);
            var16[0] = var19;
            var21 = var22.map;
            var19 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure1_slot18;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 51;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.MemberRowItem;
                    var2 = {};
                    var6 = var1.user;
                    var2['user'] = var6;
                    var6 = var1.voiceState;
                    var6 = var6.selfStream;
                    var2['selfStream'] = var6;
                    var7 = var1.nick;
                    var6 = null;
                    var8 = var6 != var7;
                    var6 = undefined;
                    if(!var8) { _fun0010_ip = 9; continue _fun0010 }
case 82:
                    var6 = var7;
case 9:
                    var2['nick'] = var6;
                    var7 = _closure2_slot1;
                    var2['channelId'] = var7;
                    var7 = _closure2_slot0;
                    var2['guildId'] = var7;
                    var6 = _closure2_slot6;
                    var2['showSecureFramesUI'] = var6;
                    var1 = var1.user;
                    var1 = var1.id;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var19 = var21.bind(var22)(var19);
            var16[1] = var19;
            var19 = var20.map;
            var17 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot18;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 51;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.MemberRowItem;
                var2 = {};
                var2['user'] = var1;
                var7 = _closure2_slot1;
                var2['channelId'] = var7;
                var6 = _closure2_slot0;
                var2['guildId'] = var6;
                var6 = true;
                var2['notConnected'] = var6;
                var2['showRing'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var17 = var19.bind(var20)(var17);
            var16[2] = var17;
            var9['children'] = var16;
            var6 = var15.bind(var4)(var14, var9);
case 78:
            var5[4] = var6;
            var6 = null;
            if(!var8) { _fun0006_ip = 83; continue _fun0006 }
case 84:
            var9 = _closure1_slot19;
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = var14[var7];
            var7 = var17.bind(var4)(var7);
            var8 = var7.VoicePanelFormSection;
            var7 = {};
            var15 = var14[var18];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var18];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.J6rqB7;
            var14 = var15.bind(var16)(var14);
            var7['title'] = var14;
            var7['hasIcons'] = var13;
            var12 = null;
            if(!var10) { _fun0006_ip = 85; continue _fun0006 }
case 86:
            var14 = _closure1_slot18;
            var13 = _closure1_slot25;
            var10 = {};
            var12 = var14.bind(var4)(var13, var10);
case 85:
            var10 = new Array(2);
            var10[0] = var12;
            var13 = _closure1_slot18;
            var12 = _closure1_slot26;
            var11 = {};
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 83:
            var5[5] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 61;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_panel/native/header/VoicePanelSettingsOverview.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['VoicePanelSettingsOverviewHeader'] = var2;
    return var1;
})();