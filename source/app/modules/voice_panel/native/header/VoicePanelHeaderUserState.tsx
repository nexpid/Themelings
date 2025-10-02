// app/modules/voice_panel/native/header/VoicePanelHeaderUserState.tsx
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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot11;
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
            var7 = _closure1_slot11;
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
    var _closure1_slot10 = var1;
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
    var _closure1_slot11 = var1;
    var2 = function useVoicePanelHeaderUserStateIcons(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot8;
            var4 = undefined;
            var6 = var3.bind(var4)();
            var5 = new Array(0);
            var3 = _closure1_slot10;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var13 = 7;
            var7 = var7[var13];
            var9 = var8.bind(var4)(var7);
            var7 = null;
            var7 = var7 == var2;
            var8 = undefined;
            if(var7) { _fun0004_ip = 36; continue _fun0004 }
case 4:
            var8 = var2.type;
case 36:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 8;
            var7 = var11[var7];
            var10 = var10.bind(var4)(var7);
            var7 = var10.isStableParticipantWithUser;
            var10 = var7.bind(var10)(var2);
            var7 = undefined;
            if(!var10) { _fun0004_ip = 37; continue _fun0004 }
case 11:
            var2 = var2.user;
            var7 = var2.id;
case 37:
            var2 = arg2;
            var2 = var9.bind(var4)(var8, var7, var2);
            var12 = var3.bind(var4)(var2);
            var3 = var12.bind(var4)();
            var2 = var3.done;
            var11 = 9;
            var10 = 'mute-deafen';
            var9 = 4;
            var8 = 'dark';
            var7 = 'video';
            if(var2) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var20 = var3.value;
            var14 = var20.type;
            var15 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var13];
            var2 = var15.bind(var4)(var2);
            var2 = var2.VoicePanelCardUserStateIconType;
            var2 = var2.USER_VIDEO_ICON;
            if(!(var14 === var2)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var14 = var5.push;
            var16 = _closure1_slot5;
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = var17[var9];
            var2 = var18.bind(var4)(var2);
            var15 = var2.BackgroundBlurView;
            var2 = {};
            var2['blurTheme'] = var8;
            var19 = var6.floatingIconWrapper;
            var2['style'] = var19;
            var19 = _closure1_slot5;
            var17 = var17[var11];
            var17 = var18.bind(var4)(var17);
            var18 = var17.VideoIcon;
            var17 = {};
            var21 = var6.floatingIcon;
            var17['style'] = var21;
            var21 = var20.videoIconState;
            var17['state'] = var21;
            var17 = var19.bind(var4)(var18, var17);
            var2['children'] = var17;
            var2 = var16.bind(var4)(var15, var2, var7);
            var2 = var14.bind(var5)(var2);
case 40:
            var14 = var20.type;
            var15 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var13];
            var2 = var15.bind(var4)(var2);
            var2 = var2.VoicePanelCardUserStateIconType;
            var2 = var2.MUTE_DEAFEN_ICON;
            if(!(var14 === var2)) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var14 = var5.push;
            var16 = _closure1_slot5;
            var15 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var2 = var15.bind(var4)(var2);
            var15 = var2.BackgroundBlurView;
            var2 = {};
            var2['blurTheme'] = var8;
            var18 = var6.floatingIconWrapper;
            var17 = new Array(2);
            var17[0] = var18;
            var19 = var20.withLeftMargin;
            var18 = undefined;
            if(!var19) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var18 = var6.leftMargin;
case 44:
            var17[1] = var18;
            var2['style'] = var17;
            var19 = _closure1_slot5;
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var11];
            var17 = var18.bind(var4)(var17);
            var18 = var17.MuteDeafenIcon;
            var17 = {};
            var21 = var6.floatingIcon;
            var17['style'] = var21;
            var20 = var20.muteDeafenIconState;
            var17['state'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var2['children'] = var17;
            var2 = var16.bind(var4)(var15, var2, var10);
            var2 = var14.bind(var5)(var2);
case 42:
            var14 = var12.bind(var4)();
            var2 = var14.done;
            var3 = var14;
            if(!var2) { _fun0004_ip = 39; continue _fun0004 }
case 38:
            var3 = var5.length;
            var2 = 0;
            if(!(var2 === var3)) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            return var4;
case 46:
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 10;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var7 = var6.iconContainer;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = arg3;
            var6[1] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var2;
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
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var10 = var14.bind(var1)(var5);
    var9 = var10.createAnimatedComponent;
    var12 = 4;
    var5 = var7[var12];
    var5 = var6.bind(var1)(var5);
    var5 = var5.BackgroundBlurView;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot6 = var5;
    var5 = {};
    var9 = 100;
    var5['duration'] = var9;
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = {};
    var11 = {'position': 'absolute', 'top': 0, 'left': 0, 'borderRadius': null, 'padding': 6};
    var13 = 6;
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var11['borderRadius'] = var15;
    var5['container'] = var11;
    var11 = {};
    var15 = 'row';
    var11['flexDirection'] = var15;
    var5['iconContainer'] = var11;
    var11 = {'width': 20, 'height': 20, 'borderRadius': null, 'alignItems': 'center', 'justifyContent': 'center'};
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var11['borderRadius'] = var15;
    var5['floatingIconWrapper'] = var11;
    var11 = {'width': 12, 'height': 12};
    var13 = var7[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var11['tintColor'] = var13;
    var5['floatingIcon'] = var11;
    var11 = {};
    var11['marginLeft'] = var12;
    var5['leftMargin'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot8 = var5;
    var5 = {};
    var9 = 'function VoicePanelHeaderUserStateTsx1(){const{withTiming,isHeaderHidden,OPACITY_TIMING}=this.__closure;return{opacity:withTiming(isHeaderHidden.get()?1:0,OPACITY_TIMING)};}';
    var5['code'] = var9;
    var _closure1_slot9 = var5;
    var5 = var8.memo;
    var4 = function VoicePanelHeaderUserState(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var9 = var2.isHeaderHidden;
            var _closure2_slot0 = var9;
            var6 = _closure1_slot3;
            var4 = var6.useContext;
            var13 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 11;
            var3 = var12[var3];
            var5 = undefined;
            var3 = var13.bind(var5)(var3);
            var3 = var4.bind(var6)(var3);
            var10 = var3.channelId;
            var _closure2_slot1 = var10;
            var6 = var3.guildId;
            var3 = _closure1_slot8;
            var7 = var3.bind(var5)();
            var11 = _closure1_slot0;
            var3 = 12;
            var3 = var12[var3];
            var14 = var11.bind(var5)(var3);
            var8 = var14.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getSelectedParticipant;
                    var1 = _closure2_slot1;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                    var1 = var2.id;
case 48:
                    return var1;
                }
            };
            var8 = var8.bind(var14)(var4, var3);
            var4 = _closure1_slot12;
            var3 = 8;
            var3 = var12[var3];
            var3 = var13.bind(var5)(var3);
            var3 = var3.bind(var5)(var8, var10, var6);
            var6 = var4.bind(var5)(var3, var6);
            var3 = 3;
            var3 = var12[var3];
            var4 = var11.bind(var5)(var3);
            var3 = var4.useAnimatedStyle;
            var1 = function s() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 13;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withTiming;
                    var6 = _closure2_slot0;
                    var3 = var6.get;
                    var6 = var3.bind(var6)();
                    var3 = 0;
                    if(!var6) { _fun0007_ip = 28; continue _fun0007 }
case 50:
                    var3 = 1;
case 28:
                    var2 = _closure1_slot7;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var8 = {};
            var10 = 13;
            var10 = var12[var10];
            var10 = var11.bind(var5)(var10);
            var10 = var10.withTiming;
            var8['withTiming'] = var10;
            var8['isHeaderHidden'] = var9;
            var9 = _closure1_slot7;
            var8['OPACITY_TIMING'] = var9;
            var1['__closure'] = var8;
            var8 = 7032221979181.0;
            var1['__workletHash'] = var8;
            var8 = _closure1_slot9;
            var1['__initData'] = var8;
            var8 = var3.bind(var4)(var1);
            var1 = null;
            var3 = var1 == var6;
            if(var3) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var4 = _closure1_slot5;
            var3 = _closure1_slot6;
            var2 = {'blurTheme': 'dark', 'style': null, 'pointerEvents': 'none'};
            var9 = var7.container;
            var7 = new Array(2);
            var7[0] = var9;
            var7[1] = var8;
            var2['style'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 51:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_panel/native/header/VoicePanelHeaderUserState.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['useVoicePanelHeaderUserStateIcons'] = var2;
    return var1;
})();