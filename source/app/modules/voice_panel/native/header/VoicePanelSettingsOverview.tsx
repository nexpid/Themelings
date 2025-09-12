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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot23;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot23;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 345:
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
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var2 = function VoicePanelSettingsOverviewHeader(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var3 = var2.guildId;
            var _closure2_slot0 = var3;
            var5 = var2.channelId;
            var _closure2_slot1 = var5;
            var2 = _closure1_slot21;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 17;
            var3 = var15[var2];
            var8 = var17.bind(var4)(var3);
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
                var2 = 18;
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
            var2 = var15[var2];
            var7 = var17.bind(var4)(var2);
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
            var9 = _closure1_slot1;
            var1 = 19;
            var1 = var15[var1];
            var1 = var9.bind(var4)(var1);
            var19 = var1.bind(var4)(var2);
            var1 = 20;
            var1 = var15[var1];
            var3 = var17.bind(var4)(var1);
            var2 = var3.useIsSecureFramesUIEnabled;
            var1 = {};
            var1['channelId'] = var5;
            var6 = var2.bind(var3)(var1);
            var1 = 21;
            var1 = var15[var1];
            var3 = var17.bind(var4)(var1);
            var2 = var3.useIsCallSecureFramesVerified;
            var1 = {};
            var1['channelId'] = var5;
            var16 = var2.bind(var3)(var1);
            var3 = _closure1_slot19;
            var7 = 22;
            var1 = var15[var7];
            var2 = var9.bind(var4)(var1);
            var1 = {};
            var5 = var10.headerContainer;
            var1['style'] = var5;
            var11 = _closure1_slot18;
            var13 = 23;
            var5 = var15[var13];
            var8 = var9.bind(var4)(var5);
            var5 = {};
            var13 = var15[var13];
            var13 = var17.bind(var4)(var13);
            var13 = var13.VoicePanelEmojiVariant;
            var13 = var13.VoicePanelSettingsHeader;
            var5['variant'] = var13;
            var8 = var11.bind(var4)(var8, var5);
            var5 = new Array(4);
            var5[0] = var8;
            var13 = _closure1_slot19;
            var8 = var15[var7];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var11 = var10.channelTitleWrapper;
            var8['style'] = var11;
            var18 = _closure1_slot18;
            var11 = 24;
            var15 = var15[var11];
            var15 = var17.bind(var4)(var15);
            var17 = var15.Text;
            var15 = {'style': null, 'variant': 'heading-lg/bold', 'lineClamp': 1, 'accessibilityRole': 'header'};
            var20 = var10.channelTitle;
            var15['style'] = var20;
            var15['children'] = var19;
            var17 = var18.bind(var4)(var17, var15);
            var15 = new Array(2);
            var15[0] = var17;
            if(!var16) { _fun0004_ip = 498; continue _fun0004 }
 391:
            var19 = _closure1_slot18;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var17 = 25;
            var17 = var24[var17];
            var17 = var23.bind(var4)(var17);
            var18 = var17.ShieldLockIcon;
            var17 = {};
            var20 = var10.secureFramesIcon;
            var17['style'] = var20;
            var20 = 'xs';
            var17['size'] = var20;
            var20 = 26;
            var21 = var24[var20];
            var21 = var23.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var24[var20];
            var20 = var23.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.mR9cf3;
            var20 = var21.bind(var22)(var20);
            var17['accessibilityLabel'] = var20;
            var16 = var19.bind(var4)(var18, var17);
 498:
            var15[1] = var16;
            var8['children'] = var15;
            var8 = var13.bind(var4)(var9, var8);
            var5[1] = var8;
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
            var5[2] = var8;
            if(!var6) { _fun0004_ip = 780; continue _fun0004 }
 588:
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
            var10 = 27;
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
            var14 = 26;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.3BogKS;
            var14 = var15.bind(var16)(var14);
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 780:
            var5[3] = var6;
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
 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 28;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.stringify;
                var6 = _closure1_slot15;
                var2 = new Array(1);
                var2[0] = var6;
                var2 = var3.bind(var4)(var2);
                var3 = '';
                if(!(var3 !== var2)) { _fun0005_ip = 124; continue _fun0005 }
 56:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 30;
                var3 = var6[var3];
                var7 = var4.bind(var1)(var3);
                var3 = var7.closeVoicePanelSettingsActionSheet;
                var3 = var3.bind(var7)();
                var3 = 31;
                var3 = var6[var3];
                var6 = var4.bind(var1)(var3);
                var4 = var6.showShareActionSheet;
                var3 = {};
                var3['message'] = var2;
                var2 = 'Activity Logs';
                var2 = var4.bind(var6)(var3, var2);
                _fun0005_ip = 222; continue _fun0005;
 124:
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 29;
                var2 = var9[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var6 = 'EMBEDDED_ACTIVITIES_SHARE_EMPTY_LOGS_ERROR_MESSAGE';
                var2['key'] = var6;
                var8 = _closure1_slot0;
                var5 = 26;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.i+9VW1;
                var5 = var6.bind(var7)(var5);
                var2['content'] = var5;
                var2 = var3.bind(var4)(var2);
 222:
                return var1;
            }
        };
        var1 = new Array(0);
        var7 = var3.bind(var4)(var2, var1);
        var4 = _closure1_slot18;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 32;
        var1 = var8[var1];
        var3 = undefined;
        var1 = var6.bind(var3)(var1);
        var2 = var1.TableRow;
        var1 = {};
        var1['onPress'] = var7;
        var10 = _closure1_slot18;
        var7 = 33;
        var7 = var8[var7];
        var7 = var6.bind(var3)(var7);
        var9 = var7.TableRowIcon;
        var7 = {};
        var11 = 34;
        var11 = var8[var11];
        var11 = var6.bind(var3)(var11);
        var11 = var11.WrenchIcon;
        var7['IconComponent'] = var11;
        var12 = _closure1_slot1;
        var11 = 35;
        var11 = var8[var11];
        var11 = var12.bind(var3)(var11);
        var7['source'] = var11;
        var7 = var10.bind(var3)(var9, var7);
        var1['icon'] = var7;
        var7 = 26;
        var9 = var8[var7];
        var9 = var6.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var7 = var8[var7];
        var7 = var6.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.iQzQs7;
        var7 = var9.bind(var10)(var7);
        var1['label'] = var7;
        var7 = _closure1_slot18;
        var5 = 36;
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
        var2 = 17;
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
            var1 = 37;
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
        var1 = 38;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.TableSwitchRow;
        var1 = {};
        var11 = _closure1_slot18;
        var5 = 33;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var10 = var5.TableRowIcon;
        var5 = {};
        var13 = 34;
        var13 = var9[var13];
        var13 = var8.bind(var4)(var13);
        var13 = var13.WrenchIcon;
        var5['IconComponent'] = var13;
        var13 = _closure1_slot1;
        var12 = 35;
        var12 = var9[var12];
        var12 = var13.bind(var4)(var12);
        var5['source'] = var12;
        var5 = var11.bind(var4)(var10, var5);
        var1['icon'] = var5;
        var5 = 26;
        var10 = var9[var5];
        var10 = var8.bind(var4)(var10);
        var12 = var10.intl;
        var11 = var12.string;
        var10 = var9[var5];
        var10 = var8.bind(var4)(var10);
        var10 = var10.t;
        var10 = var10.qv5/SE;
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
        var5 = var5.qv5/SE;
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
    var5 = var6.bind(var1)(var5);
    var5 = var5.Platform;
    var5 = 2;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var12 = 4;
    var5 = var7[var12];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.AnalyticsSections;
    var _closure1_slot13 = var9;
    var9 = var5.Permissions;
    var _closure1_slot14 = var9;
    var5 = var5.RPC_APPLICATION_LOGGING_CATEGORY;
    var _closure1_slot15 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.isStreamParticipant;
    var _closure1_slot16 = var5;
    var5 = 13;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.SECURE_FRAMES_CALL_VERIFICATION_BOTTOM_SHEET_KEY;
    var _closure1_slot17 = var5;
    var5 = 14;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot18 = var9;
    var9 = var5.jsxs;
    var _closure1_slot19 = var9;
    var5 = var5.Fragment;
    var _closure1_slot20 = var5;
    var5 = 15;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = {};
    var15 = 'center';
    var11 = {'paddingTop': 24, 'alignItems': 'center'};
    var5['headerContainer'] = var11;
    var11 = {'width': 80, 'height': 80, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center'};
    var13 = 16;
    var16 = var7[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.round;
    var11['borderRadius'] = var16;
    var5['headerEmojiContainer'] = var11;
    var11 = {'fontSize': 32, 'textAlignVertical': 'center'};
    var5['headerEmoji'] = var11;
    var11 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'marginTop': 16};
    var5['channelTitleWrapper'] = var11;
    var11 = {};
    var11['textAlign'] = var15;
    var5['channelTitle'] = var11;
    var11 = {'marginTop': 4, 'marginHorizontal': 16, 'textAlign': 'center'};
    var5['channelSubtitle'] = var11;
    var11 = {'width': 32, 'height': 32, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center'};
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var11['borderRadius'] = var15;
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_SECONDARY;
    var11['backgroundColor'] = var15;
    var5['settingsIconContainer'] = var11;
    var11 = {'textAlign': 'center', 'fontSize': 16};
    var5['settingsIcon'] = var11;
    var11 = {'width': 20, 'height': 20};
    var5['settingsFastIcon'] = var11;
    var11 = {'width': 40, 'height': 40};
    var5['headerFastImage'] = var11;
    var11 = {'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': null, 'borderRadius': null, 'marginTop': 8, 'padding': 4, 'gap': 4};
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_SURFACE_RAISED;
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
 0:
            var1 = arg1;
            var13 = var1.guildId;
            var _closure2_slot0 = var13;
            var12 = var1.channelId;
            var _closure2_slot1 = var12;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 17;
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
            var32 = var7.bind(var8)(var6, var5);
            var _closure2_slot2 = var32;
            var5 = 39;
            var5 = var3[var5];
            var5 = var2.bind(var4)(var5);
            var6 = var5.DeveloperMode;
            var5 = var6.useSetting;
            var8 = var5.bind(var6)();
            var5 = 40;
            var5 = var3[var5];
            var5 = var2.bind(var4)(var5);
            var7 = var5.HangStatusExperiment;
            var6 = var7.useExperiment;
            var5 = {};
            var5['guildId'] = var13;
            var9 = 'VoicePanelSettingsOverview';
            var5['location'] = var9;
            var5 = var6.bind(var7)(var5);
            var24 = var5.enableHangStatus;
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
            var21 = var7.bind(var9)(var6, var5);
            var _closure2_slot3 = var21;
            var5 = var3[var1];
            var10 = var2.bind(var4)(var5);
            var9 = var10.useStateFromStoresArray;
            var5 = _closure1_slot11;
            var7 = new Array(1);
            var7[0] = var5;
            var6 = new Array(2);
            var6[0] = var32;
            var6[1] = var21;
            var5 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot2;
                    var8 = null;
                    if(!(var8 != var1)) { _fun0007_ip = 194; continue _fun0007 }
 16:
                    var3 = _closure2_slot2;
                    var1 = var3.isPrivate;
                    var1 = var1.bind(var3)();
                    if(!var1) { _fun0007_ip = 194; continue _fun0007 }
 36:
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
                    if(var2) { _fun0007_ip = 192; continue _fun0007 }
 127:
                    var11 = var3.value;
                    var9 = _closure1_slot11;
                    var2 = var9.getUser;
                    var9 = var2.bind(var9)(var11);
                    var2 = var8 == var9;
                    if(var2) { _fun0007_ip = 164; continue _fun0007 }
 154:
                    var10 = var7.has;
                    var2 = var10.bind(var7)(var11);
 164:
                    if(var2) { _fun0007_ip = 177; continue _fun0007 }
 167:
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var9);
 177:
                    var9 = var4.bind(var5)();
                    var2 = var9.done;
                    var3 = var9;
                    if(!var2) { _fun0007_ip = 127; continue _fun0007 }
 192:
                    return var1;
 194:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var19 = var9.bind(var10)(var7, var5, var6);
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
            var40 = var7.bind(var9)(var6, var5);
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var6 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 41;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.toggleSelfDeaf;
                var2 = var2.bind(var3)();
                return var1;
            };
            var5 = new Array(0);
            var39 = var7.bind(var9)(var6, var5);
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
            var36 = var9.bind(var10)(var7, var6);
            var _closure2_slot4 = var36;
            var6 = var3[var1];
            var9 = var2.bind(var4)(var6);
            var7 = var9.useStateFromStores;
            var6 = new Array(2);
            var6[0] = var5;
            var5 = _closure1_slot7;
            var6[1] = var5;
            var5 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = _closure1_slot5;
                    var2 = var4.getSelectedParticipant;
                    var1 = _closure2_slot1;
                    var2 = var2.bind(var4)(var1);
                    var4 = _closure1_slot16;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var1 = null;
                    if(!var4) { _fun0008_ip = 78; continue _fun0008 }
 41:
                    var4 = var2.stream;
                    var4 = var4.ownerId;
                    var6 = _closure1_slot7;
                    var3 = var6.getId;
                    var3 = var3.bind(var6)();
                    var1 = null;
                    if(!(var4 !== var3)) { _fun0008_ip = 78; continue _fun0008 }
 73:
                    var1 = var2.id;
 78:
                    return var1;
                }
            };
            var23 = var7.bind(var9)(var6, var5);
            var _closure2_slot5 = var23;
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var6 = new Array(2);
            var6[0] = var12;
            var6[1] = var36;
            var5 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 42;
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
            var34 = var7.bind(var9)(var5, var6);
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var6 = new Array(1);
            var6[0] = var12;
            var5 = function() {
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 30;
                var3 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.closeVoicePanelSettingsActionSheet;
                var3 = var3.bind(var5)();
                var3 = _closure1_slot1;
                var2 = 43;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = _closure2_slot1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var31 = var7.bind(var9)(var5, var6);
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var6 = new Array(1);
            var6[0] = var13;
            var5 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 30;
                var2 = var4[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var2 = var5.closeVoicePanelSettingsActionSheet;
                var2 = var2.bind(var5)();
                var2 = 44;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.showVoiceSettingsActionSheet;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var17 = var7.bind(var9)(var5, var6);
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var6 = new Array(1);
            var6[0] = var12;
            var5 = function() {
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 45;
                var4 = var3[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var7 = _closure1_slot0;
                var4 = 47;
                var4 = var3[var4];
                var7 = var7.bind(var1)(var4);
                var4 = 46;
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
            var35 = var7.bind(var9)(var5, var6);
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var6 = new Array(2);
            var6[0] = var12;
            var6[1] = var23;
            var5 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0009_ip = 58; continue _fun0009 }
 13:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 48;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.openSecureFramesStreamVerification;
                    var2 = _closure2_slot5;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2, var1);
 58:
                    var1 = undefined;
                    return var1;
                }
            };
            var30 = var7.bind(var9)(var5, var6);
            var5 = 49;
            var6 = var3[var5];
            var7 = var2.bind(var4)(var6);
            var6 = var7.useIsCallRTCConnectionEmpty;
            var28 = var6.bind(var7)();
            var5 = var3[var5];
            var6 = var2.bind(var4)(var5);
            var5 = var6.useIsStreamRTCConnectionEmpty;
            var22 = var5.bind(var6)(var23);
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
            var6 = 50;
            var6 = var3[var6];
            var6 = var5.bind(var4)(var6);
            var29 = var6.bind(var4)(var32);
            var1 = var3[var1];
            var14 = var2.bind(var4)(var1);
            var9 = var14.useStateFromStores;
            var1 = _closure1_slot10;
            var7 = new Array(1);
            var7[0] = var1;
            var6 = new Array(1);
            var6[0] = var12;
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
            var14 = var9.bind(var14)(var7, var1, var6);
            var1 = 51;
            var1 = var3[var1];
            var6 = var2.bind(var4)(var1);
            var1 = var6.useCanInviteMembers;
            var20 = var1.bind(var6)(var12);
            var1 = 52;
            var1 = var3[var1];
            var6 = var2.bind(var4)(var1);
            var1 = var6.useInviteMembersCallback;
            var27 = var1.bind(var6)(var12);
            var1 = 53;
            var1 = var3[var1];
            var1 = var5.bind(var4)(var1);
            var7 = var1.bind(var4)(var32);
            var1 = 20;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useIsSecureFramesUIEnabled;
            var1 = {};
            var1['channelId'] = var12;
            var18 = var2.bind(var3)(var1);
            var _closure2_slot6 = var18;
            var3 = _closure1_slot19;
            var2 = _closure1_slot20;
            var1 = {};
            var9 = _closure1_slot18;
            var6 = _closure1_slot24;
            var5 = {};
            var5['guildId'] = var13;
            var5['channelId'] = var12;
            var6 = var9.bind(var4)(var6, var5);
            var5 = new Array(6);
            var5[0] = var6;
            var12 = null;
            var6 = null;
            if(!var7) { _fun0006_ip = 959; continue _fun0006 }
 870:
            var13 = _closure1_slot18;
            var9 = _closure1_slot0;
            var33 = _closure1_slot2;
            var7 = 54;
            var7 = var33[var7];
            var7 = var9.bind(var4)(var7);
            var9 = var7.VoicePanelFormSection;
            var7 = {};
            var26 = _closure1_slot18;
            var25 = _closure1_slot1;
            var15 = 55;
            var15 = var33[var15];
            var25 = var25.bind(var4)(var15);
            var15 = {};
            var15['channel'] = var32;
            var32 = _closure1_slot13;
            var32 = var32.CHANNEL_ACTION_SHEET;
            var15['analyticsSection'] = var32;
            var15 = var26.bind(var4)(var25, var15);
            var7['children'] = var15;
            var6 = var13.bind(var4)(var9, var7);
 959:
            var5[1] = var6;
            var6 = var14;
            if(var14) { _fun0006_ip = 972; continue _fun0006 }
 969:
            var6 = var29;
 972:
            if(!var6) { _fun0006_ip = 1262; continue _fun0006 }
 978:
            var13 = _closure1_slot18;
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 54;
            var7 = var15[var7];
            var7 = var9.bind(var4)(var7);
            var9 = var7.VoicePanelFormSection;
            var7 = {};
            if(!var14) { _fun0006_ip = 1252; continue _fun0006 }
 1016:
            var26 = _closure1_slot18;
            var32 = _closure1_slot0;
            var37 = _closure1_slot2;
            var15 = 32;
            var15 = var37[var15];
            var15 = var32.bind(var4)(var15);
            var25 = var15.TableRow;
            var15 = {};
            var15['onPress'] = var31;
            var38 = _closure1_slot18;
            var33 = _closure1_slot1;
            var41 = 23;
            var31 = var37[var41];
            var33 = var33.bind(var4)(var31);
            var31 = {};
            var41 = var37[var41];
            var41 = var32.bind(var4)(var41);
            var41 = var41.VoicePanelEmojiVariant;
            var41 = var41.VoicePanelSettingsRowIcon;
            var31['variant'] = var41;
            var31 = var38.bind(var4)(var33, var31);
            var15['icon'] = var31;
            var31 = 26;
            var33 = var37[var31];
            var33 = var32.bind(var4)(var33);
            var41 = var33.intl;
            var38 = var41.string;
            var33 = var37[var31];
            var33 = var32.bind(var4)(var33);
            var33 = var33.t;
            var33 = var33.XPDhcX;
            var33 = var38.bind(var41)(var33);
            var15['label'] = var33;
            var33 = var37[var31];
            var33 = var32.bind(var4)(var33);
            var38 = var33.intl;
            var33 = var38.string;
            var31 = var37[var31];
            var31 = var32.bind(var4)(var31);
            var31 = var31.t;
            var31 = var31.w7ZEoq;
            var31 = var33.bind(var38)(var31);
            var15['subLabel'] = var31;
            var33 = _closure1_slot18;
            var31 = 36;
            var31 = var37[var31];
            var31 = var32.bind(var4)(var31);
            var32 = var31.TableRowArrow;
            var31 = {};
            var31 = var33.bind(var4)(var32, var31);
            var15['trailing'] = var31;
            var14 = var26.bind(var4)(var25, var15);
 1252:
            var7['children'] = var14;
            var6 = var13.bind(var4)(var9, var7);
 1262:
            var5[2] = var6;
            var13 = _closure1_slot19;
            var38 = _closure1_slot0;
            var37 = _closure1_slot2;
            var7 = 54;
            var6 = var37[var7];
            var6 = var38.bind(var4)(var6);
            var9 = var6.VoicePanelFormSection;
            var6 = {};
            var32 = _closure1_slot18;
            var15 = 32;
            var14 = var37[var15];
            var14 = var38.bind(var4)(var14);
            var31 = var14.TableRow;
            var14 = {};
            var14['onPress'] = var17;
            var41 = _closure1_slot18;
            var25 = 33;
            var17 = var37[var25];
            var17 = var38.bind(var4)(var17);
            var26 = var17.TableRowIcon;
            var17 = {};
            var33 = 56;
            var33 = var37[var33];
            var33 = var38.bind(var4)(var33);
            var33 = var33.SettingsIcon;
            var17['IconComponent'] = var33;
            var43 = _closure1_slot1;
            var33 = 57;
            var42 = var37[var33];
            var42 = var43.bind(var4)(var42);
            var17['source'] = var42;
            var17 = var41.bind(var4)(var26, var17);
            var14['icon'] = var17;
            var17 = 26;
            var26 = var37[var17];
            var26 = var38.bind(var4)(var26);
            var42 = var26.intl;
            var41 = var42.string;
            var26 = var37[var17];
            var26 = var38.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26.NiTd0d;
            var26 = var41.bind(var42)(var26);
            var14['label'] = var26;
            var26 = var37[var17];
            var26 = var38.bind(var4)(var26);
            var42 = var26.intl;
            var41 = var42.string;
            var26 = var37[var17];
            var26 = var38.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26.16SG+P;
            var26 = var41.bind(var42)(var26);
            var14['subLabel'] = var26;
            var41 = _closure1_slot18;
            var26 = 36;
            var37 = var37[var26];
            var37 = var38.bind(var4)(var37);
            var38 = var37.TableRowArrow;
            var37 = {};
            var37 = var41.bind(var4)(var38, var37);
            var14['trailing'] = var37;
            var31 = var32.bind(var4)(var31, var14);
            var14 = new Array(6);
            var14[0] = var31;
            if(!var24) { _fun0006_ip = 1557; continue _fun0006 }
 1554:
            var24 = var29;
 1557:
            if(!var24) { _fun0006_ip = 1740; continue _fun0006 }
 1563:
            var32 = _closure1_slot18;
            var38 = _closure1_slot0;
            var37 = _closure1_slot2;
            var29 = var37[var15];
            var29 = var38.bind(var4)(var29);
            var31 = var29.TableRow;
            var29 = {};
            var41 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 58;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.showHangStatusPickerActionSheet;
                var2 = {};
                var5 = _closure2_slot1;
                var2['channelId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var29['onPress'] = var41;
            var43 = _closure1_slot18;
            var41 = var37[var25];
            var41 = var38.bind(var4)(var41);
            var42 = var41.TableRowIcon;
            var41 = {};
            var45 = _closure1_slot1;
            var44 = 59;
            var44 = var37[var44];
            var44 = var45.bind(var4)(var44);
            var41['source'] = var44;
            var41 = var43.bind(var4)(var42, var41);
            var29['icon'] = var41;
            var41 = var37[var17];
            var41 = var38.bind(var4)(var41);
            var43 = var41.intl;
            var42 = var43.string;
            var41 = var37[var17];
            var41 = var38.bind(var4)(var41);
            var41 = var41.t;
            var41 = var41.pwvT9v;
            var41 = var42.bind(var43)(var41);
            var29['label'] = var41;
            var41 = _closure1_slot18;
            var37 = var37[var26];
            var37 = var38.bind(var4)(var37);
            var38 = var37.TableRowArrow;
            var37 = {};
            var37 = var41.bind(var4)(var38, var37);
            var29['trailing'] = var37;
            var24 = var32.bind(var4)(var31, var29);
 1740:
            var14[1] = var24;
            var38 = _closure1_slot18;
            var37 = _closure1_slot0;
            var32 = _closure1_slot2;
            var24 = 38;
            var29 = var32[var24];
            var29 = var37.bind(var4)(var29);
            var31 = var29.TableSwitchRow;
            var29 = {};
            var44 = _closure1_slot18;
            var41 = var32[var25];
            var41 = var37.bind(var4)(var41);
            var43 = var41.TableRowIcon;
            var41 = {};
            var42 = 60;
            var42 = var32[var42];
            var42 = var37.bind(var4)(var42);
            var42 = var42.HeadphonesSlashIcon;
            var41['IconComponent'] = var42;
            var42 = _closure1_slot1;
            var45 = 61;
            var45 = var32[var45];
            var45 = var42.bind(var4)(var45);
            var41['source'] = var45;
            var41 = var44.bind(var4)(var43, var41);
            var29['icon'] = var41;
            var41 = var32[var17];
            var41 = var37.bind(var4)(var41);
            var44 = var41.intl;
            var43 = var44.string;
            var41 = var32[var17];
            var41 = var37.bind(var4)(var41);
            var41 = var41.t;
            var41 = var41.wjcRFR;
            var41 = var43.bind(var44)(var41);
            var29['accessibilityHint'] = var41;
            var29['value'] = var40;
            var29['onValueChange'] = var39;
            var39 = var32[var17];
            var39 = var37.bind(var4)(var39);
            var41 = var39.intl;
            var40 = var41.string;
            var39 = var32[var17];
            var39 = var37.bind(var4)(var39);
            var39 = var39.t;
            var39 = var39.wjcRFR;
            var39 = var40.bind(var41)(var39);
            var29['label'] = var39;
            var39 = var32[var17];
            var39 = var37.bind(var4)(var39);
            var41 = var39.intl;
            var40 = var41.string;
            var39 = var32[var17];
            var39 = var37.bind(var4)(var39);
            var39 = var39.t;
            var39 = var39.M3VN2d;
            var39 = var40.bind(var41)(var39);
            var29['subLabel'] = var39;
            var29 = var38.bind(var4)(var31, var29);
            var14[2] = var29;
            var31 = _closure1_slot18;
            var24 = var32[var24];
            var24 = var37.bind(var4)(var24);
            var29 = var24.TableSwitchRow;
            var24 = {};
            var40 = _closure1_slot18;
            var38 = var32[var25];
            var38 = var37.bind(var4)(var38);
            var39 = var38.TableRowIcon;
            var38 = {};
            var41 = 62;
            var41 = var32[var41];
            var41 = var37.bind(var4)(var41);
            var41 = var41.VideoIcon;
            var38['IconComponent'] = var41;
            var41 = 63;
            var41 = var32[var41];
            var41 = var42.bind(var4)(var41);
            var38['source'] = var41;
            var38 = var40.bind(var4)(var39, var38);
            var24['icon'] = var38;
            var38 = var32[var17];
            var38 = var37.bind(var4)(var38);
            var40 = var38.intl;
            var39 = var40.string;
            var38 = var32[var17];
            var38 = var37.bind(var4)(var38);
            var38 = var38.t;
            var38 = var38.ZMTRyc;
            var38 = var39.bind(var40)(var38);
            var24['accessibilityHint'] = var38;
            var24['value'] = var36;
            var24['onValueChange'] = var34;
            var34 = var32[var17];
            var34 = var37.bind(var4)(var34);
            var38 = var34.intl;
            var36 = var38.string;
            var34 = var32[var17];
            var34 = var37.bind(var4)(var34);
            var34 = var34.t;
            var34 = var34.ZMTRyc;
            var34 = var36.bind(var38)(var34);
            var24['label'] = var34;
            var34 = var32[var17];
            var34 = var37.bind(var4)(var34);
            var36 = var34.intl;
            var34 = var36.string;
            var32 = var32[var17];
            var32 = var37.bind(var4)(var32);
            var32 = var32.t;
            var32 = var32.MlpCFR;
            var32 = var34.bind(var36)(var32);
            var24['subLabel'] = var32;
            var24 = var31.bind(var4)(var29, var24);
            var14[3] = var24;
            var24 = var18;
            if(!var18) { _fun0006_ip = 2279; continue _fun0006 }
 2275:
            var24 = var12 == var23;
 2279:
            if(!var24) { _fun0006_ip = 2285; continue _fun0006 }
 2282:
            var24 = !var28;
 2285:
            if(!var24) { _fun0006_ip = 2531; continue _fun0006 }
 2291:
            var31 = _closure1_slot18;
            var34 = _closure1_slot0;
            var32 = _closure1_slot2;
            var28 = var32[var15];
            var28 = var34.bind(var4)(var28);
            var29 = var28.TableRow;
            var28 = {};
            var28['onPress'] = var35;
            var37 = _closure1_slot18;
            var35 = var32[var25];
            var35 = var34.bind(var4)(var35);
            var36 = var35.TableRowIcon;
            var35 = {};
            var38 = 27;
            var38 = var32[var38];
            var38 = var34.bind(var4)(var38);
            var38 = var38.LockIcon;
            var35['IconComponent'] = var38;
            var39 = _closure1_slot1;
            var38 = var32[var33];
            var38 = var39.bind(var4)(var38);
            var35['source'] = var38;
            var35 = var37.bind(var4)(var36, var35);
            var28['icon'] = var35;
            var35 = var32[var17];
            var35 = var34.bind(var4)(var35);
            var37 = var35.intl;
            var36 = var37.string;
            var35 = var32[var17];
            var35 = var34.bind(var4)(var35);
            var35 = var35.t;
            var35 = var35.cTQI5u;
            var35 = var36.bind(var37)(var35);
            var28['label'] = var35;
            var35 = var32[var17];
            var35 = var34.bind(var4)(var35);
            var37 = var35.intl;
            var36 = var37.string;
            var35 = var32[var17];
            var35 = var34.bind(var4)(var35);
            var35 = var35.t;
            var35 = var35.Etxti4;
            var35 = var36.bind(var37)(var35);
            var28['subLabel'] = var35;
            var35 = _closure1_slot18;
            var32 = var32[var26];
            var32 = var34.bind(var4)(var32);
            var34 = var32.TableRowArrow;
            var32 = {};
            var32 = var35.bind(var4)(var34, var32);
            var28['trailing'] = var32;
            var24 = var31.bind(var4)(var29, var28);
 2531:
            var14[4] = var24;
            if(!var18) { _fun0006_ip = 2542; continue _fun0006 }
 2538:
            var18 = var12 != var23;
 2542:
            if(!var18) { _fun0006_ip = 2548; continue _fun0006 }
 2545:
            var18 = !var22;
 2548:
            if(!var18) { _fun0006_ip = 2794; continue _fun0006 }
 2554:
            var24 = _closure1_slot18;
            var29 = _closure1_slot0;
            var28 = _closure1_slot2;
            var22 = var28[var15];
            var22 = var29.bind(var4)(var22);
            var23 = var22.TableRow;
            var22 = {};
            var22['onPress'] = var30;
            var32 = _closure1_slot18;
            var30 = var28[var25];
            var30 = var29.bind(var4)(var30);
            var31 = var30.TableRowIcon;
            var30 = {};
            var34 = 27;
            var34 = var28[var34];
            var34 = var29.bind(var4)(var34);
            var34 = var34.LockIcon;
            var30['IconComponent'] = var34;
            var34 = _closure1_slot1;
            var33 = var28[var33];
            var33 = var34.bind(var4)(var33);
            var30['source'] = var33;
            var30 = var32.bind(var4)(var31, var30);
            var22['icon'] = var30;
            var30 = var28[var17];
            var30 = var29.bind(var4)(var30);
            var32 = var30.intl;
            var31 = var32.string;
            var30 = var28[var17];
            var30 = var29.bind(var4)(var30);
            var30 = var30.t;
            var30 = var30.QogHlZ;
            var30 = var31.bind(var32)(var30);
            var22['label'] = var30;
            var30 = var28[var17];
            var30 = var29.bind(var4)(var30);
            var32 = var30.intl;
            var31 = var32.string;
            var30 = var28[var17];
            var30 = var29.bind(var4)(var30);
            var30 = var30.t;
            var30 = var30.j5+1eX;
            var30 = var31.bind(var32)(var30);
            var22['subLabel'] = var30;
            var30 = _closure1_slot18;
            var28 = var28[var26];
            var28 = var29.bind(var4)(var28);
            var29 = var28.TableRowArrow;
            var28 = {};
            var28 = var30.bind(var4)(var29, var28);
            var22['trailing'] = var28;
            var18 = var24.bind(var4)(var23, var22);
 2794:
            var14[5] = var18;
            var6['children'] = var14;
            var6 = var13.bind(var4)(var9, var6);
            var5[3] = var6;
            var9 = var21.length;
            var6 = 0;
            var6 = var9 > var6;
            if(var6) { _fun0006_ip = 2829; continue _fun0006 }
 2826:
            var6 = var20;
 2829:
            if(!var6) { _fun0006_ip = 3231; continue _fun0006 }
 2835:
            var14 = _closure1_slot19;
            var22 = _closure1_slot0;
            var18 = _closure1_slot2;
            var9 = var18[var7];
            var9 = var22.bind(var4)(var9);
            var13 = var9.VoicePanelFormSection;
            var9 = {};
            var23 = var18[var17];
            var23 = var22.bind(var4)(var23);
            var29 = var23.intl;
            var28 = var29.formatToPlainString;
            var18 = var18[var17];
            var18 = var22.bind(var4)(var18);
            var18 = var18.t;
            var24 = var18.AWmdd3;
            var22 = {};
            var31 = var21.length;
            var18 = global;
            var23 = var18.HermesInternal;
            var30 = var23.concat;
            var23 = '';
            var30 = var30.bind(var23)(var31);
            var22['count'] = var30;
            var22 = var28.bind(var29)(var24, var22);
            var18 = var18.HermesInternal;
            var18 = var18.concat;
            var18 = var18.bind(var23)(var22);
            var9['title'] = var18;
            var18 = null;
            if(!var20) { _fun0006_ip = 3171; continue _fun0006 }
 2971:
            var22 = _closure1_slot18;
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var15 = var23[var15];
            var15 = var24.bind(var4)(var15);
            var20 = var15.TableRow;
            var15 = {};
            var15['onPress'] = var27;
            var28 = _closure1_slot18;
            var25 = var23[var25];
            var25 = var24.bind(var4)(var25);
            var27 = var25.TableRowIcon;
            var25 = {};
            var29 = 64;
            var29 = var23[var29];
            var29 = var24.bind(var4)(var29);
            var29 = var29.GroupPlusIcon;
            var25['IconComponent'] = var29;
            var30 = _closure1_slot1;
            var29 = 65;
            var29 = var23[var29];
            var29 = var30.bind(var4)(var29);
            var25['source'] = var29;
            var29 = 'blurple';
            var25['variant'] = var29;
            var25 = var28.bind(var4)(var27, var25);
            var15['icon'] = var25;
            var25 = var23[var17];
            var25 = var24.bind(var4)(var25);
            var28 = var25.intl;
            var27 = var28.string;
            var25 = var23[var17];
            var25 = var24.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.f1+QIC;
            var25 = var27.bind(var28)(var25);
            var15['label'] = var25;
            var25 = _closure1_slot18;
            var23 = var23[var26];
            var23 = var24.bind(var4)(var23);
            var24 = var23.TableRowArrow;
            var23 = {};
            var23 = var25.bind(var4)(var24, var23);
            var15['trailing'] = var23;
            var18 = var22.bind(var4)(var20, var15);
 3171:
            var15 = new Array(3);
            var15[0] = var18;
            var20 = var21.map;
            var18 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = arg1;
                    var5 = _closure1_slot18;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 54;
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
                    if(!var8) { _fun0010_ip = 86; continue _fun0010 }
 83:
                    var6 = var7;
 86:
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
            var18 = var20.bind(var21)(var18);
            var15[1] = var18;
            var18 = var19.map;
            var16 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot18;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 54;
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
            var16 = var18.bind(var19)(var16);
            var15[2] = var16;
            var9['children'] = var15;
            var6 = var14.bind(var4)(var13, var9);
 3231:
            var5[4] = var6;
            var6 = null;
            if(!var8) { _fun0006_ip = 3379; continue _fun0006 }
 3243:
            var9 = _closure1_slot19;
            var16 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = var13[var7];
            var7 = var16.bind(var4)(var7);
            var8 = var7.VoicePanelFormSection;
            var7 = {};
            var14 = var13[var17];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var13[var17];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.J6rqBw;
            var13 = var14.bind(var15)(var13);
            var7['title'] = var13;
            var12 = null;
            if(!var10) { _fun0006_ip = 3341; continue _fun0006 }
 3325:
            var14 = _closure1_slot18;
            var13 = _closure1_slot25;
            var10 = {};
            var12 = var14.bind(var4)(var13, var10);
 3341:
            var10 = new Array(2);
            var10[0] = var12;
            var13 = _closure1_slot18;
            var12 = _closure1_slot26;
            var11 = {};
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 3379:
            var5[5] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 66;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_panel/native/header/VoicePanelSettingsOverview.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['VoicePanelSettingsOverviewHeader'] = var2;
    return var1;
})();