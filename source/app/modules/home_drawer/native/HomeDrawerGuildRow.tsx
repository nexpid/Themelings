// app/modules/home_drawer/native/HomeDrawerGuildRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
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
            var9 = _closure1_slot24;
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
            var7 = _closure1_slot24;
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
    var _closure1_slot23 = var1;
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
    var _closure1_slot24 = var1;
    var1 = function VoiceUsersSubtitle(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = var2.voiceUsers;
            var2 = var2.guildId;
            var _closure2_slot0 = var2;
            var2 = _closure1_slot20;
            var5 = undefined;
            var12 = var2.bind(var5)();
            var2 = var1.slice;
            var8 = 0;
            var6 = 6;
            var13 = var2.bind(var1)(var8, var6);
            var2 = global;
            var4 = var2.Math;
            var3 = var4.max;
            var2 = var1.length;
            var2 = var2 - var6;
            var15 = var3.bind(var4)(var8, var2);
            var2 = var1.length;
            var1 = null;
            if(!(var8 !== var2)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var4 = _closure1_slot17;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
            var2['style'] = var6;
            var14 = _closure1_slot16;
            var10 = _closure1_slot0;
            var16 = _closure1_slot2;
            var6 = 18;
            var6 = var16[var6];
            var6 = var10.bind(var5)(var6);
            var10 = var6.VoiceNormalIcon;
            var6 = {};
            var16 = 'xs';
            var6['size'] = var16;
            var10 = var14.bind(var5)(var10, var6);
            var6 = new Array(3);
            var6[0] = var10;
            var10 = var13.map;
            var9 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot16;
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 19;
                var2 = var8[var6];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var7 = _closure1_slot0;
                var6 = var8[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.AvatarSizes;
                var6 = var6.XXSMALL;
                var2['size'] = var6;
                var2['user'] = var1;
                var6 = _closure2_slot0;
                var2['guildId'] = var6;
                var6 = false;
                var2['animate'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var9 = var10.bind(var13)(var9);
            var6[1] = var9;
            var8 = var15 > var8;
            var7 = null;
            if(!var8) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var10 = _closure1_slot16;
            var9 = _closure1_slot4;
            var8 = {};
            var12 = var12.overflowCircle;
            var8['style'] = var12;
            var13 = _closure1_slot17;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 20;
            var11 = var14[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-xs/medium', 'color': 'text-primary'};
            var14 = ['+'];
            var14[1] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 38:
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 36:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function StreamingUsersSubtitle(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = var2.voiceUsers;
            var2 = var2.guildId;
            var _closure2_slot0 = var2;
            var2 = _closure1_slot20;
            var5 = undefined;
            var12 = var2.bind(var5)();
            var2 = var1.slice;
            var8 = 0;
            var6 = 6;
            var13 = var2.bind(var1)(var8, var6);
            var2 = global;
            var4 = var2.Math;
            var3 = var4.max;
            var2 = var1.length;
            var2 = var2 - var6;
            var15 = var3.bind(var4)(var8, var2);
            var2 = var1.length;
            var1 = null;
            if(!(var8 !== var2)) { _fun0005_ip = 38; continue _fun0005 }
case 37:
            var4 = _closure1_slot17;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
            var2['style'] = var6;
            var14 = _closure1_slot16;
            var10 = _closure1_slot1;
            var16 = _closure1_slot2;
            var6 = 21;
            var6 = var16[var6];
            var10 = var10.bind(var5)(var6);
            var6 = {};
            var10 = var14.bind(var5)(var10, var6);
            var6 = new Array(3);
            var6[0] = var10;
            var10 = var13.map;
            var9 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot16;
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 19;
                var2 = var8[var6];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var7 = _closure1_slot0;
                var6 = var8[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.AvatarSizes;
                var6 = var6.XXSMALL;
                var2['size'] = var6;
                var2['user'] = var1;
                var6 = _closure2_slot0;
                var2['guildId'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var9 = var10.bind(var13)(var9);
            var6[1] = var9;
            var8 = var15 > var8;
            var7 = null;
            if(!var8) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var10 = _closure1_slot16;
            var9 = _closure1_slot4;
            var8 = {};
            var12 = var12.overflowCircle;
            var8['style'] = var12;
            var13 = _closure1_slot17;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 20;
            var11 = var14[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-xs/medium', 'color': 'text-primary'};
            var14 = ['+'];
            var14[1] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 40:
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 38:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function ActivityUsersSubtitle(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var4 = var2.activityId;
            var1 = var2.voiceUsers;
            var2 = var2.guildId;
            var _closure2_slot0 = var2;
            var2 = _closure1_slot20;
            var5 = undefined;
            var12 = var2.bind(var5)();
            var2 = var1.slice;
            var8 = 0;
            var7 = 6;
            var13 = var2.bind(var1)(var8, var7);
            var2 = global;
            var6 = var2.Math;
            var3 = var6.max;
            var2 = var1.length;
            var2 = var2 - var7;
            var15 = var3.bind(var6)(var8, var2);
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 22;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useGetOrFetchApplication;
            var4 = var2.bind(var3)(var4);
            var7 = null;
            var2 = var7 == var4;
            var18 = undefined;
            if(var2) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var3 = var4.getIconSource;
            var2 = 16;
            var18 = var3.bind(var4)(var2);
case 42:
            var2 = var1.length;
            var1 = null;
            if(!(var8 !== var2)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var4 = _closure1_slot17;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
            var2['style'] = var6;
            var14 = _closure1_slot16;
            var10 = _closure1_slot0;
            var16 = _closure1_slot2;
            var6 = 23;
            var6 = var16[var6];
            var6 = var10.bind(var5)(var6);
            var10 = var6.GameControllerIcon;
            var6 = {};
            var16 = 'xs';
            var6['size'] = var16;
            var10 = var14.bind(var5)(var10, var6);
            var6 = new Array(4);
            var6[0] = var10;
            var14 = var7 != var18;
            var10 = null;
            if(!var14) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var17 = _closure1_slot16;
            var16 = _closure1_slot1;
            var19 = _closure1_slot2;
            var14 = 24;
            var14 = var19[var14];
            var16 = var16.bind(var5)(var14);
            var14 = {};
            var14['source'] = var18;
            var18 = {'width': 20, 'height': 20, 'borderRadius': 4};
            var14['style'] = var18;
            var10 = var17.bind(var5)(var16, var14);
case 46:
            var6[1] = var10;
            var10 = var13.map;
            var9 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot16;
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 19;
                var2 = var8[var6];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var7 = _closure1_slot0;
                var6 = var8[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.AvatarSizes;
                var6 = var6.XXSMALL;
                var2['size'] = var6;
                var2['user'] = var1;
                var6 = _closure2_slot0;
                var2['guildId'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var9 = var10.bind(var13)(var9);
            var6[2] = var9;
            var8 = var15 > var8;
            var7 = null;
            if(!var8) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var10 = _closure1_slot16;
            var9 = _closure1_slot4;
            var8 = {};
            var12 = var12.overflowCircle;
            var8['style'] = var12;
            var13 = _closure1_slot17;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 20;
            var11 = var14[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-xs/medium', 'color': 'text-primary'};
            var14 = ['+'];
            var14[1] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 48:
            var6[3] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 44:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function AnimatedSubtitle(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var9 = var1.data;
            var12 = var1.transitionState;
            var _closure2_slot0 = var12;
            var3 = var1.onCleanup;
            var _closure2_slot1 = var3;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var11 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 25;
            var5 = var1[var7];
            var8 = var11.bind(var4)(var5);
            var5 = var8.useSharedValue;
            var10 = 26;
            var1 = var1[var10];
            var1 = var11.bind(var4)(var1);
            var1 = var1.TransitionStates;
            var11 = var1.ENTERED;
            var1 = 0;
            if(!(var12 === var11)) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var1 = -30;
case 50:
            var14 = var5.bind(var8)(var1);
            _closure2_slot2 = var14;
            var11 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = var1[var7];
            var13 = var11.bind(var4)(var5);
            var8 = var13.useSharedValue;
            var5 = 1;
            var13 = var8.bind(var13)(var5);
            _closure2_slot3 = var13;
            var15 = _closure1_slot3;
            var8 = var15.useEffect;
            var5 = new Array(4);
            var5[0] = var12;
            var5[1] = var14;
            var5[2] = var13;
            var5[3] = var3;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 26;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.TransitionStates;
                    var4 = var4.YEETED;
                    if(!(var5 !== var4)) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var9 = _closure2_slot2;
                    var6 = var9.set;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 27;
                    var5 = var8[var4];
                    var12 = var7.bind(var1)(var5);
                    var11 = var12.withSpring;
                    var10 = _closure1_slot19;
                    var5 = 0;
                    var5 = var11.bind(var12)(var5, var10);
                    var5 = var6.bind(var9)(var5);
                    var6 = _closure2_slot3;
                    var5 = var6.set;
                    var4 = var8[var4];
                    var9 = var7.bind(var1)(var4);
                    var8 = var9.withSpring;
                    var7 = _closure1_slot19;
                    var4 = 1;
                    var4 = var8.bind(var9)(var4, var7);
                    var4 = var5.bind(var6)(var4);
                    _fun0008_ip = 54; continue _fun0008;
case 52:
                    var9 = _closure2_slot2;
                    var8 = var9.set;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 27;
                    var4 = var7[var5];
                    var14 = var6.bind(var1)(var4);
                    var13 = var14.withSpring;
                    var17 = _closure1_slot18;
                    var11 = function e() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 25;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.runOnJS;
                        var2 = _closure2_slot1;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var4 = {};
                    var10 = 25;
                    var10 = var7[var10];
                    var10 = var6.bind(var1)(var10);
                    var10 = var10.runOnJS;
                    var4['runOnJS'] = var10;
                    var10 = _closure2_slot1;
                    var4['onCleanup'] = var10;
                    var11['__closure'] = var4;
                    var4 = 3794826797478.0;
                    var11['__workletHash'] = var4;
                    var4 = _closure1_slot21;
                    var11['__initData'] = var4;
                    var18 = 30;
                    var16 = 'respect-motion-settings';
                    var19 = var14;
                    var15 = var11;
                    var4 = var19[var13](var18, var17, var16, var15, var14);
                    var4 = var8.bind(var9)(var4);
                    var4 = _closure2_slot3;
                    var3 = var4.set;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.withSpring;
                    var5 = _closure1_slot18;
                    var2 = 0;
                    var2 = var6.bind(var7)(var2, var5);
                    var2 = var3.bind(var4)(var2);
case 54:
                    return var1;
                }
            };
            var3 = var8.bind(var15)(var3, var5);
            var3 = var1[var7];
            var5 = var11.bind(var4)(var3);
            var3 = var5.useAnimatedStyle;
            var2 = function s() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = {};
                    var4 = {};
                    var5 = _closure2_slot2;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var4['translateY'] = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var1['transform'] = var3;
                    var4 = _closure2_slot3;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var1['opacity'] = var3;
                    var4 = _closure2_slot0;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 26;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var2 = var2.TransitionStates;
                    var3 = var2.YEETED;
                    var2 = 'relative';
                    if(!(var4 === var3)) { _fun0009_ip = 55; continue _fun0009 }
case 56:
                    var2 = 'absolute';
case 55:
                    var1['position'] = var2;
                    return var1;
                }
            };
            var8 = {};
            var8['translateY'] = var14;
            var8['opacity'] = var13;
            var8['transitionState'] = var12;
            var10 = var1[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.TransitionStates;
            var8['TransitionStates'] = var10;
            var2['__closure'] = var8;
            var8 = 3615235715331.0;
            var2['__workletHash'] = var8;
            var8 = _closure1_slot22;
            var2['__initData'] = var8;
            var5 = var3.bind(var5)(var2);
            var3 = _closure1_slot16;
            var2 = _closure1_slot1;
            var1 = var1[var7];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var1['style'] = var5;
            var7 = var9.type;
            var5 = 'voice';
            if(!(var5 !== var7)) { _fun0007_ip = 57; continue _fun0007 }
case 58:
            var7 = var9.type;
            var5 = 'streaming';
            if(!(var5 !== var7)) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var8 = var9.type;
            var7 = 'activity';
            var5 = null;
            if(!(var7 === var8)) { _fun0007_ip = 61; continue _fun0007 }
case 62:
            var10 = _closure1_slot16;
            var8 = _closure1_slot27;
            var7 = {};
            var11 = var9.activityId;
            var7['activityId'] = var11;
            var11 = var9.users;
            var7['voiceUsers'] = var11;
            var11 = var9.guildId;
            var7['guildId'] = var11;
            var5 = var10.bind(var4)(var8, var7);
case 61:
            _fun0007_ip = 63; continue _fun0007;
case 59:
            var10 = _closure1_slot16;
            var8 = _closure1_slot26;
            var7 = {};
            var11 = var9.users;
            var7['voiceUsers'] = var11;
            var11 = var9.guildId;
            var7['guildId'] = var11;
            var5 = var10.bind(var4)(var8, var7);
case 63:
            _fun0007_ip = 64; continue _fun0007;
case 57:
            var8 = _closure1_slot16;
            var7 = _closure1_slot25;
            var6 = {};
            var10 = var9.users;
            var6['voiceUsers'] = var10;
            var9 = var9.guildId;
            var6['guildId'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 64:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function GuildVoiceSubtitle(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arg1;
            var12 = var3.voiceUsers;
            var _closure2_slot0 = var12;
            var11 = var3.streamingUsers;
            var _closure2_slot1 = var11;
            var9 = var3.activityUsers;
            var _closure2_slot2 = var9;
            var2 = var3.activityId;
            var _closure2_slot3 = var2;
            var10 = var3.guildId;
            var _closure2_slot4 = var10;
            var3 = _closure1_slot20;
            var5 = undefined;
            var7 = var3.bind(var5)();
            var3 = _closure1_slot13;
            var3 = var3.bind(var5)();
            var13 = var3.currentType;
            var _closure2_slot5 = var13;
            var8 = _closure1_slot3;
            var4 = var8.useMemo;
            var3 = new Array(6);
            var3[0] = var13;
            var3[1] = var12;
            var3[2] = var11;
            var3[3] = var10;
            var3[4] = var9;
            var3[5] = var2;
            var2 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    var4 = 0;
                    var2 = var1 > var4;
                    var1 = _closure2_slot1;
                    var1 = var1.length;
                    var3 = var1 > var4;
                    var1 = _closure2_slot2;
                    var1 = var1.length;
                    var4 = var1 > var4;
                    var1 = null;
                    if(!var2) { _fun0011_ip = 65; continue _fun0011 }
case 66:
                    if(!var2) { _fun0011_ip = 67; continue _fun0011 }
case 4:
                    if(var3) { _fun0011_ip = 67; continue _fun0011 }
case 68:
                    if(var4) { _fun0011_ip = 67; continue _fun0011 }
case 7:
                    var2 = {};
                    var6 = 'voice';
                    var2['type'] = var6;
                    var6 = _closure2_slot0;
                    var2['users'] = var6;
                    var6 = _closure2_slot4;
                    var2['guildId'] = var6;
                    _fun0011_ip = 69; continue _fun0011;
case 67:
                    var7 = _closure2_slot5;
                    var6 = 'activity';
                    if(!(var6 === var7)) { _fun0011_ip = 70; continue _fun0011 }
case 50:
                    if(var4) { _fun0011_ip = 71; continue _fun0011 }
case 70:
                    var4 = _closure2_slot5;
                    if(!(var6 === var4)) { _fun0011_ip = 72; continue _fun0011 }
case 73:
                    if(var3) { _fun0011_ip = 74; continue _fun0011 }
case 72:
                    var3 = {};
                    var4 = 'voice';
                    var3['type'] = var4;
                    var4 = _closure2_slot0;
                    var3['users'] = var4;
                    var4 = _closure2_slot4;
                    var3['guildId'] = var4;
                    _fun0011_ip = 75; continue _fun0011;
case 74:
                    var4 = {};
                    var7 = 'streaming';
                    var4['type'] = var7;
                    var7 = _closure2_slot1;
                    var4['users'] = var7;
                    var7 = _closure2_slot4;
                    var4['guildId'] = var7;
                    var3 = var4;
case 75:
                    _fun0011_ip = 76; continue _fun0011;
case 71:
                    var4 = {};
                    var4['type'] = var6;
                    var6 = _closure2_slot2;
                    var4['users'] = var6;
                    var6 = _closure2_slot3;
                    var4['activityId'] = var6;
                    var5 = _closure2_slot4;
                    var4['guildId'] = var5;
                    var3 = var4;
case 76:
                    var2 = var3;
case 69:
                    var1 = var2;
case 65:
                    return var1;
                }
            };
            var2 = var4.bind(var8)(var2, var3);
            var _closure2_slot6 = var2;
            var9 = _closure1_slot3;
            var8 = var9.useCallback;
            var4 = function(arg1, arg2, arg3, arg4) {
                var5 = _closure1_slot16;
                var4 = _closure1_slot28;
                var3 = {};
                var1 = arg2;
                var3['data'] = var1;
                var1 = arg3;
                var3['transitionState'] = var1;
                var1 = arg4;
                var3['onCleanup'] = var1;
                var2 = undefined;
                var1 = arg1;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var3 = new Array(0);
            var9 = var8.bind(var9)(var4, var3);
            var11 = _closure1_slot3;
            var8 = var11.useMemo;
            var4 = new Array(1);
            var4[0] = var2;
            var3 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0012_ip = 77; continue _fun0012 }
case 78:
                    var1 = new Array(0);
                    _fun0012_ip = 79; continue _fun0012;
case 77:
                    var3 = _closure2_slot6;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 79:
                    return var1;
                }
            };
            var11 = var8.bind(var11)(var3, var4);
            var8 = _closure1_slot3;
            var4 = var8.useCallback;
            var3 = new Array(1);
            var3[0] = var10;
            var1 = function(arg1) {
                var1 = arg1;
                var5 = var1.type;
                var4 = _closure2_slot4;
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = '-';
                var1 = var3.bind(var2)(var5, var1, var4);
                return var1;
            };
            var10 = var4.bind(var8)(var1, var3);
            var1 = null;
            var2 = var1 == var2;
            if(var2) { _fun0010_ip = 80; continue _fun0010 }
case 21:
            var4 = _closure1_slot16;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var7.subtitleContainer;
            var2['style'] = var7;
            var8 = _closure1_slot16;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 26;
            var6 = var12[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.TransitionGroup;
            var6 = {};
            var6['items'] = var11;
            var6['getItemKey'] = var10;
            var6['renderItem'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 80:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function GuildVoiceSubtitleWrapper(arg1) {
        var1 = arg1;
        var13 = var1.guild;
        var _closure2_slot0 = var13;
        var5 = var13.id;
        var _closure2_slot1 = var5;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 15;
        var6 = var8[var3];
        var4 = undefined;
        var12 = var7.bind(var4)(var6);
        var11 = var12.useStateFromStoresArray;
        var6 = _closure1_slot6;
        var10 = new Array(1);
        var10[0] = var6;
        var9 = new Array(1);
        var9[0] = var5;
        var6 = function() {
            var5 = _closure1_slot6;
            var4 = var5.getChannels;
            var3 = _closure2_slot1;
            var3 = var4.bind(var5)(var3);
            var2 = _closure1_slot7;
            var4 = var3[var2];
            var3 = var4.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.channel;
                var2 = var1.type;
                var1 = _closure1_slot14;
                var1 = var1.GUILD_VOICE;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.channel;
                var1 = var1.id;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var11 = var11.bind(var12)(var10, var6, var9);
        var _closure2_slot2 = var11;
        var6 = var8[var3];
        var14 = var7.bind(var4)(var6);
        var12 = var14.useStateFromStores;
        var6 = _closure1_slot12;
        var10 = new Array(1);
        var10[0] = var6;
        var9 = new Array(1);
        var9[0] = var5;
        var6 = function() {
            var3 = _closure1_slot12;
            var2 = var3.getVoiceStates;
            var1 = _closure2_slot1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var12 = var12.bind(var14)(var10, var6, var9);
        var _closure2_slot3 = var12;
        var6 = var8[var3];
        var15 = var7.bind(var4)(var6);
        var14 = var15.useStateFromStores;
        var6 = _closure1_slot5;
        var10 = new Array(1);
        var10[0] = var6;
        var9 = new Array(1);
        var9[0] = var5;
        var6 = function() {
            var3 = _closure1_slot5;
            var2 = var3.getEmbeddedActivitiesForGuild;
            var1 = _closure2_slot1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var14.bind(var15)(var10, var6, var9);
        var _closure2_slot4 = var6;
        var14 = _closure1_slot3;
        var10 = var14.useMemo;
        var9 = new Array(1);
        var9[0] = var6;
        var6 = function() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var1 = global;
                var2 = var1.Map;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var25 = var3;
                var2 = new var25[var2](var24);
                var7 = var2 instanceof Object ? var2 : var3;
                var3 = _closure1_slot23;
                var2 = _closure2_slot4;
                var11 = undefined;
                var10 = var3.bind(var11)(var2);
                var6 = var10.bind(var11)();
                var3 = var6.done;
                var5 = 0;
                var4 = 1;
                var2 = null;
                var9 = var6;
                var8 = undefined;
                var6 = undefined;
                if(var3) { _fun0013_ip = 65; continue _fun0013 }
case 81:
                var15 = var9.value;
                var13 = _closure1_slot23;
                var3 = var15.userIds;
                var14 = var13.bind(var11)(var3);
                var13 = var14.bind(var11)();
                var3 = var13.done;
                if(var3) { _fun0013_ip = 39; continue _fun0013 }
case 13:
                var16 = var13.value;
                var19 = var7.set;
                var18 = var15.applicationId;
                var17 = var7.get;
                var3 = var15.applicationId;
                var17 = var17.bind(var7)(var3);
                var20 = var17;
                if(!(var2 == var17)) { _fun0013_ip = 82; continue _fun0013 }
case 83:
                var20 = new Array(0);
case 82:
                var3 = new Array(1);
                var24 = var3;
                var23 = var20;
                var22 = 0;
                var20 = arraySpread(var24, var23, var22);
                var3[var20] = var16;
                var20 = var20 + var4;
                var3 = var19.bind(var7)(var18, var3);
                var18 = var14.bind(var11)();
                var3 = var18.done;
                var13 = var18;
                var8 = var17;
                var6 = var16;
                if(!var3) { _fun0013_ip = 13; continue _fun0013 }
case 39:
                var13 = var10.bind(var11)();
                var3 = var13.done;
                var9 = var13;
                if(!var3) { _fun0013_ip = 81; continue _fun0013 }
case 65:
                var3 = var7.size;
                if(!(var5 !== var3)) { _fun0013_ip = 84; continue _fun0013 }
case 85:
                var6 = var1.Array;
                var3 = var6.from;
                var1 = var7.entries;
                var1 = var1.bind(var7)();
                var6 = var3.bind(var6)(var1);
                var3 = var6.sort;
                var1 = function(arg1, arg2) {
                    var1 = arg2;
                    var3 = 1;
                    var1 = var1[var3];
                    var2 = var1.length;
                    var1 = arg1;
                    var1 = var1[var3];
                    var1 = var1.length;
                    var1 = var2 - var1;
                    return var1;
                };
                var1 = var3.bind(var6)(var1);
                var3 = var1[var5];
                var1 = {};
                var5 = var3[var5];
                var1['activityId'] = var5;
                var3 = var3[var4];
                var1['activityUsers'] = var3;
                return var1;
case 84:
                var1 = {};
                var1['activityId'] = var2;
                var2 = new Array(0);
                var1['activityUsers'] = var2;
                return var1;
            }
        };
        var9 = var10.bind(var14)(var6, var9);
        var6 = var9.activityId;
        var14 = var9.activityUsers;
        var _closure2_slot5 = var14;
        var3 = var8[var3];
        var9 = var7.bind(var4)(var3);
        var8 = var9.useStateFromStoresArray;
        var3 = _closure1_slot10;
        var7 = new Array(1);
        var7[0] = var3;
        var3 = function() {
            var2 = _closure1_slot10;
            var1 = var2.getBlockedOrIgnoredIDs;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3 = var8.bind(var9)(var7, var3);
        var _closure2_slot6 = var3;
        var9 = _closure1_slot3;
        var8 = var9.useMemo;
        var7 = new Array(4);
        var7[0] = var11;
        var7[1] = var12;
        var10 = var13.afkChannelId;
        var7[2] = var10;
        var7[3] = var3;
        var3 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 28;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.flatMap;
            var2 = _closure2_slot2;
            var1 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot0;
                    var2 = var2.afkChannelId;
                    if(!(var3 !== var2)) { _fun0014_ip = 86; continue _fun0014 }
case 29:
                    var2 = _closure2_slot3;
                    var4 = var2[var3];
                    var2 = null;
                    if(!(var2 == var4)) { _fun0014_ip = 87; continue _fun0014 }
case 79:
                    var4 = new Array(0);
case 87:
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.user;
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 29;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.filterOutBlockedOrIgnoredUsers;
                    var1 = _closure2_slot6;
                    var1 = var2.bind(var3)(var4, var1);
                    return var1;
case 86:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var9 = var8.bind(var9)(var3, var7);
        var10 = _closure1_slot3;
        var8 = var10.useMemo;
        var7 = new Array(3);
        var7[0] = var11;
        var7[1] = var12;
        var3 = var13.afkChannelId;
        var7[2] = var3;
        var3 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 28;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.flatMap;
            var2 = _closure2_slot2;
            var1 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure2_slot0;
                    var4 = var4.afkChannelId;
                    if(!(var3 !== var4)) { _fun0015_ip = 88; continue _fun0015 }
case 89:
                    var2 = _closure2_slot3;
                    var4 = var2[var3];
                    var2 = null;
                    if(!(var2 == var4)) { _fun0015_ip = 90; continue _fun0015 }
case 91:
                    var4 = new Array(0);
case 90:
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.voiceState;
                        var1 = var1.selfStream;
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.user;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    _fun0015_ip = 92; continue _fun0015;
case 88:
                    var1 = new Array(0);
case 92:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var8 = var8.bind(var10)(var3, var7);
        var10 = _closure1_slot3;
        var7 = var10.useMemo;
        var3 = new Array(4);
        var3[0] = var14;
        var13 = var13.afkChannelId;
        var3[1] = var13;
        var3[2] = var12;
        var3[3] = var11;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 28;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.flatMap;
            var2 = _closure2_slot2;
            var1 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure2_slot0;
                    var4 = var4.afkChannelId;
                    if(!(var3 !== var4)) { _fun0016_ip = 88; continue _fun0016 }
case 89:
                    var2 = _closure2_slot3;
                    var4 = var2[var3];
                    var2 = null;
                    if(!(var2 == var4)) { _fun0016_ip = 90; continue _fun0016 }
case 91:
                    var4 = new Array(0);
case 90:
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.user;
                        var3 = _closure2_slot5;
                        var2 = var3.includes;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.user;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    _fun0016_ip = 92; continue _fun0016;
case 88:
                    var1 = new Array(0);
case 92:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var7 = var7.bind(var10)(var2, var3);
        var3 = _closure1_slot16;
        var2 = _closure1_slot29;
        var1 = {};
        var1['voiceUsers'] = var9;
        var1['streamingUsers'] = var8;
        var1['activityUsers'] = var7;
        var1['activityId'] = var6;
        var1['guildId'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot30 = var1;
    var1 = function GuildRowWrapper(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var2 = arg1;
            var9 = var2.guild;
            var _closure2_slot0 = var9;
            var7 = var2.disableSubtitle;
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 15;
            var5 = var10[var3];
            var4 = undefined;
            var12 = var2.bind(var4)(var5);
            var11 = var12.useStateFromStores;
            var5 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                var3 = _closure1_slot8;
                var2 = var3.hasUnread;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var11.bind(var12)(var8, var5);
            var _closure2_slot1 = var12;
            var3 = var10[var3];
            var11 = var2.bind(var4)(var3);
            var8 = var11.useStateFromStores;
            var3 = _closure1_slot11;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getMuteConfig;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var8.bind(var11)(var5, var3);
            var _closure2_slot2 = var3;
            var11 = _closure1_slot3;
            var8 = var11.useMemo;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0018_ip = 93; continue _fun0018 }
case 78:
                    var1 = {};
                    var4 = _closure2_slot2;
                    var4 = var4.end_time;
                    var4 = var3 == var4;
                    if(var4) { _fun0018_ip = 86; continue _fun0018 }
case 94:
                    var5 = global;
                    var8 = var5.Date;
                    var6 = _closure2_slot2;
                    var9 = var6.end_time;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {constructor: {value: var8}});
                    var10 = var7;
                    var6 = new var10[var8](var9, var8);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var5 = var5.Date;
                    var7 = var5.prototype;
                    var7 = Object.create(var7, {constructor: {value: var5}});
                    var10 = var7;
                    var5 = new var10[var5](var9);
                    var5 = var5 instanceof Object ? var5 : var7;
                    var4 = var6 > var5;
case 86:
                    var1['isMuted'] = var4;
                    var2 = _closure2_slot2;
                    var2 = var2.end_time;
                    var2 = var3 != var2;
                    var1['isTemporary'] = var2;
                    _fun0018_ip = 95; continue _fun0018;
case 93:
                    var1 = {'isMuted': false, 'isTemporary': false};
case 95:
                    return var1;
                }
            };
            var5 = var8.bind(var11)(var3, var5);
            var _closure2_slot3 = var5;
            var11 = _closure1_slot3;
            var8 = var11.useMemo;
            var13 = var9.name;
            var3 = new Array(3);
            var3[0] = var13;
            var3[1] = var12;
            var3[2] = var5;
            var1 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var1 = var1.isMuted;
                    if(var1) { _fun0019_ip = 96; continue _fun0019 }
case 77:
                    var8 = _closure1_slot15;
                    _fun0019_ip = 37; continue _fun0019;
case 96:
                    var1 = _closure2_slot3;
                    var1 = var1.isTemporary;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    if(var1) { _fun0019_ip = 97; continue _fun0019 }
case 2:
                    var1 = 31;
                    var2 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
                    var1 = var1.BellSlashIcon;
                    _fun0019_ip = 98; continue _fun0019;
case 97:
                    var2 = 30;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1 = var2.BellZIcon;
case 98:
                    var8 = var1;
case 37:
                    var4 = _closure1_slot17;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var1 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
                    var2['style'] = var1;
                    var9 = _closure1_slot16;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 20;
                    var5 = var5[var1];
                    var1 = undefined;
                    var5 = var7.bind(var1)(var5);
                    var7 = var5.Text;
                    var5 = {'variant': 'text-md/semibold', 'style': null, 'lineClamp': 1};
                    var11 = {};
                    var12 = 1;
                    var11['flexShrink'] = var12;
                    var5['style'] = var11;
                    var12 = _closure2_slot1;
                    var11 = 'header-muted';
                    if(!var12) { _fun0019_ip = 99; continue _fun0019 }
case 100:
                    var11 = 'header-primary';
case 99:
                    var5['color'] = var11;
                    var10 = _closure2_slot0;
                    var10 = var10.name;
                    var5['children'] = var10;
                    var7 = var9.bind(var1)(var7, var5);
                    var5 = new Array(2);
                    var5[0] = var7;
                    var7 = _closure1_slot16;
                    var6 = {};
                    var9 = 'xs';
                    var6['size'] = var9;
                    var6 = var7.bind(var1)(var8, var6);
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var8 = var8.bind(var11)(var1, var3);
            var3 = _closure1_slot16;
            var1 = 32;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.HomeDrawerSharedItem;
            var1 = {};
            var1['title'] = var8;
            var10 = var5.isMuted;
            var5 = null;
            if(var10) { _fun0017_ip = 101; continue _fun0017 }
case 102:
            var5 = null;
            if(var7) { _fun0017_ip = 101; continue _fun0017 }
case 103:
            var8 = _closure1_slot16;
            var7 = _closure1_slot30;
            var6 = {};
            var6['guild'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 101:
            var1['subtitle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot31 = var1;
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
    var7 = var6[var4];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOOP;
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot16 = var7;
    var4 = var4.jsxs;
    var _closure1_slot17 = var4;
    var4 = {'damping': 25, 'stiffness': 200, 'mass': 1, 'overshootClamping': true, 'restSpeedThreshold': 0.001, 'restDisplacementThreshold': 0.001};
    var _closure1_slot18 = var4;
    var4 = {'damping': 18, 'stiffness': 120, 'mass': 1, 'overshootClamping': true, 'restSpeedThreshold': 0.001, 'restDisplacementThreshold': 0.001};
    var _closure1_slot19 = var4;
    var4 = 13;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'paddingVertical': 2, 'paddingHorizontal': 4, 'minWidth': 20, 'backgroundColor': null, 'borderRadius': null, 'alignItems': 'center', 'justifyContent': 'center'};
    var10 = 14;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_SURFACE_OVERLAY;
    var9['backgroundColor'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9['borderRadius'] = var10;
    var4['overflowCircle'] = var9;
    var9 = {'overflow': 'hidden', 'height': 20};
    var4['subtitleContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot20 = var4;
    var4 = {};
    var7 = 'function HomeDrawerGuildRowTsx1(){const{runOnJS,onCleanup}=this.__closure;runOnJS(onCleanup)();}';
    var4['code'] = var7;
    var _closure1_slot21 = var4;
    var4 = {};
    var7 = "function HomeDrawerGuildRowTsx2(){const{translateY,opacity,transitionState,TransitionStates}=this.__closure;return{transform:[{translateY:translateY.get()}],opacity:opacity.get(),position:transitionState===TransitionStates.YEETED?'absolute':'relative'};}";
    var4['code'] = var7;
    var _closure1_slot22 = var4;
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/home_drawer/native/HomeDrawerGuildRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function HomeDrawerGuildRow(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var2 = arg1;
            var3 = var2.guildId;
            var _closure2_slot0 = var3;
            var6 = var2.disableSubtitle;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var5 = 15;
            var7 = var4[var5];
            var5 = undefined;
            var9 = var3.bind(var5)(var7);
            var8 = var9.useStateFromStores;
            var10 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var10;
            var1 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var8.bind(var9)(var7, var1);
            var1 = 16;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var8 = var1.MobileHomeDrawerExperiment;
            var3 = var8.useConfig;
            var1 = {};
            var9 = 'guild-row';
            var1['location'] = var9;
            var1 = var3.bind(var8)(var1);
            var8 = var1.enableHome;
            var3 = _closure1_slot1;
            var1 = 17;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var3 = var1.isChatBesideChannelList;
            var4 = null;
            var9 = var4 == var7;
            var1 = null;
            if(var9) { _fun0020_ip = 104; continue _fun0020 }
case 105:
            var1 = null;
            if(!var8) { _fun0020_ip = 104; continue _fun0020 }
case 106:
            var1 = null;
            if(var3) { _fun0020_ip = 104; continue _fun0020 }
case 17:
            var4 = _closure1_slot16;
            var3 = _closure1_slot31;
            var2 = {};
            var2['guild'] = var7;
            var2['disableSubtitle'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 104:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();