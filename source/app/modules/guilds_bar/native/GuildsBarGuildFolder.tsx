// app/modules/guilds_bar/native/GuildsBarGuildFolder.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
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
    var1 = function MiniGuildIcon(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guildId;
            var _closure2_slot0 = var2;
            var8 = var1.position;
            var7 = var1.selected;
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 11;
            var3 = var2[var3];
            var5 = undefined;
            var11 = var9.bind(var5)(var3);
            var10 = var11.useToken;
            var3 = _closure1_slot1;
            var6 = 10;
            var6 = var2[var6];
            var6 = var3.bind(var5)(var6);
            var6 = var6.modules;
            var6 = var6.mobile;
            var6 = var6.GUILD_BAR_ITEM_SIZE;
            var11 = var10.bind(var11)(var6);
            var10 = _closure1_slot16;
            var6 = false;
            var12 = var10.bind(var5)(var6, var11);
            var6 = 12;
            var6 = var2[var6];
            var10 = var9.bind(var5)(var6);
            var9 = var10.useStateFromStores;
            var11 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var11;
            var4 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var9.bind(var10)(var6, var4);
            var4 = 0;
            if(!(var4 !== var8)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var4 = 1;
            if(!(var4 !== var8)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var4 = 2;
            if(!(var4 !== var8)) { _fun0004_ip = 40; continue _fun0004 }
case 17:
            var4 = 3;
            var10 = undefined;
            if(!(var4 === var8)) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var10 = var12.guildPreview3;
            _fun0004_ip = 41; continue _fun0004;
case 40:
            var10 = var12.guildPreview2;
            _fun0004_ip = 41; continue _fun0004;
case 38:
            var10 = var12.guildPreview1;
            _fun0004_ip = 41; continue _fun0004;
case 36:
            var10 = var12.guildPreview0;
case 41:
            var4 = _closure1_slot14;
            var8 = 13;
            var2 = var2[var8];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var11 = var12.guildPreviewIcon;
            var9 = new Array(3);
            var9[0] = var11;
            var11 = undefined;
            if(var7) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var11 = var12.guildPreviewIconUnselected;
case 43:
            var9[1] = var11;
            var9[2] = var10;
            var2['style'] = var9;
            var2['guild'] = var6;
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var6.bind(var5)(var1);
            var1 = var1.GuildIconSizes;
            var1 = var1.XXSMALL;
            var2['size'] = var1;
            var2['selected'] = var7;
            var1 = global;
            var1 = var1.HermesInternal;
            var6 = var1.concat;
            var1 = '';
            var1 = var6.bind(var1)(var7);
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function TransitionWrapper(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var5 = var1.children;
            var14 = var1.fromTop;
            var4 = undefined;
            if(!(var14 === var4)) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var14 = false;
case 45:
            var _closure2_slot0 = var14;
            var15 = var1.cleanUp;
            var _closure2_slot1 = var15;
            var12 = var1.state;
            var _closure2_slot2 = var12;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var11 = _closure1_slot1;
            var3 = _closure1_slot2;
            var6 = 14;
            var6 = var3[var6];
            var7 = var11.bind(var4)(var6);
            var6 = 'GuildsBarGuildFolder';
            var7 = var7.bind(var4)(var6);
            var9 = _closure1_slot0;
            var6 = 11;
            var6 = var3[var6];
            var10 = var9.bind(var4)(var6);
            var8 = var10.useToken;
            var6 = 10;
            var6 = var3[var6];
            var6 = var11.bind(var4)(var6);
            var6 = var6.modules;
            var6 = var6.mobile;
            var6 = var6.GUILD_BAR_ITEM_SIZE;
            var13 = var8.bind(var10)(var6);
            _closure2_slot3 = var13;
            var6 = _closure1_slot16;
            var7 = var6.bind(var4)(var7, var13);
            var16 = 19;
            var6 = var3[var16];
            var8 = var9.bind(var4)(var6);
            var6 = var8.useSharedValue;
            var18 = 20;
            var3 = var3[var18];
            var3 = var9.bind(var4)(var3);
            var3 = var3.TransitionStates;
            var9 = var3.MOUNTED;
            var3 = 0;
            if(!(var12 === var9)) { _fun0005_ip = 47; continue _fun0005 }
case 41:
            var3 = 1;
case 47:
            var11 = var6.bind(var8)(var3);
            _closure2_slot4 = var11;
            var17 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = var6[var16];
            var9 = var17.bind(var4)(var3);
            var8 = var9.useAnimatedStyle;
            var3 = function a() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var10 = 15;
                    var3 = var2[var10];
                    var9 = undefined;
                    var12 = var5.bind(var9)(var3);
                    var11 = var12.withSpring;
                    var6 = _closure2_slot4;
                    var3 = var6.get;
                    var7 = var3.bind(var6)();
                    var17 = _closure1_slot13;
                    var3 = function e(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var1 = arg1;
                            if(!var1) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                            var3 = _closure2_slot2;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 20;
                            var4 = var4[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                            var2 = var2.TransitionStates;
                            var2 = var2.YEETED;
                            var1 = var3 === var2;
case 48:
                            if(!var1) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 19;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot1;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
case 50:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var13 = {};
                    var14 = _closure2_slot2;
                    var13['state'] = var14;
                    var14 = 20;
                    var14 = var2[var14];
                    var14 = var5.bind(var9)(var14);
                    var14 = var14.TransitionStates;
                    var13['TransitionStates'] = var14;
                    var14 = 19;
                    var14 = var2[var14];
                    var14 = var5.bind(var9)(var14);
                    var14 = var14.runOnJS;
                    var13['runOnJS'] = var14;
                    var14 = _closure2_slot1;
                    var13['cleanUp'] = var14;
                    var3['__closure'] = var13;
                    var13 = 47605595424.0;
                    var3['__workletHash'] = var13;
                    var13 = _closure1_slot20;
                    var3['__initData'] = var13;
                    var19 = var12;
                    var18 = var7;
                    var16 = undefined;
                    var15 = var3;
                    var3 = var19[var11](var18, var17, var16, var15, var14);
                    var1['opacity'] = var3;
                    var3 = {};
                    var2 = var2[var10];
                    var11 = var5.bind(var9)(var2);
                    var6 = var11.withSpring;
                    var5 = _closure2_slot4;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var7 = 1;
                    var5 = 0;
                    if(!(var7 !== var2)) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                    var2 = _closure2_slot0;
                    var12 = _closure2_slot3;
                    if(var2) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                    var2 = var12;
                    _fun0006_ip = 56; continue _fun0006;
case 54:
                    var2 = -var12;
case 56:
                    var5 = var2;
case 52:
                    var2 = _closure1_slot13;
                    var2 = var6.bind(var11)(var5, var2);
                    var3['translateY'] = var2;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var10];
                    var6 = var6.bind(var9)(var5);
                    var5 = var6.withSpring;
                    var10 = _closure2_slot4;
                    var9 = var10.get;
                    var9 = var9.bind(var10)();
                    if(!(var7 !== var9)) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                    var9 = _closure2_slot0;
                    var8 = 1.3;
                    if(!var9) { _fun0006_ip = 27; continue _fun0006 }
case 59:
                    var8 = 0.3;
case 27:
                    var7 = var8;
case 57:
                    var4 = _closure1_slot13;
                    var4 = var5.bind(var6)(var7, var4);
                    var3['scale'] = var4;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var10 = {};
            var19 = 15;
            var19 = var6[var19];
            var19 = var17.bind(var4)(var19);
            var19 = var19.withSpring;
            var10['withSpring'] = var19;
            var10['visible'] = var11;
            var19 = _closure1_slot13;
            var10['FOLDER_SPRING_PHYSICS'] = var19;
            var10['state'] = var12;
            var18 = var6[var18];
            var18 = var17.bind(var4)(var18);
            var18 = var18.TransitionStates;
            var10['TransitionStates'] = var18;
            var16 = var6[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.runOnJS;
            var10['runOnJS'] = var16;
            var10['cleanUp'] = var15;
            var10['fromTop'] = var14;
            var10['guildItemSize'] = var13;
            var3['__closure'] = var10;
            var10 = 14426547532118.0;
            var3['__workletHash'] = var10;
            var10 = _closure1_slot19;
            var3['__initData'] = var10;
            var8 = var8.bind(var9)(var3);
            var10 = _closure1_slot3;
            var9 = var10.useEffect;
            var3 = new Array(2);
            var3[0] = var12;
            var3[1] = var11;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure2_slot4;
                    var3 = var4.set;
                    var6 = _closure2_slot2;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 20;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.TransitionStates;
                    var5 = var2.YEETED;
                    var2 = 1;
                    if(!(var6 === var5)) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                    var2 = 0;
case 60:
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var2 = var9.bind(var10)(var2, var3);
            var3 = _closure1_slot14;
            var2 = _closure1_slot1;
            var1 = 18;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = new Array(2);
            var6[0] = var8;
            var7 = var7.folderScaleContainer;
            var6[1] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function getItemKey(arg1) {
        var1 = arg1;
        var1 = var1.type;
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function GuildFolderIcon(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var6 = var1.item;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 14;
            var1 = var4[var1];
            var5 = undefined;
            var4 = var3.bind(var5)(var1);
            var1 = 'GuildFolderIcon';
            var1 = var4.bind(var5)(var1);
            var7 = _closure1_slot2;
            if(var1) { _fun0009_ip = 61; continue _fun0009 }
case 62:
            var1 = 22;
            var1 = var7[var1];
            _fun0009_ip = 30; continue _fun0009;
case 61:
            var4 = 21;
            var1 = var7[var4];
case 30:
            var7 = var3.bind(var5)(var1);
            var4 = var6.type;
            var3 = 'icon';
            var1 = null;
            if(!(var3 === var4)) { _fun0009_ip = 63; continue _fun0009 }
case 64:
            var4 = _closure1_slot14;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 23;
            var2 = var8[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['source'] = var7;
            var6 = var6.tintStyle;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 63:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function renderGuildFolderContent(arg1, arg2, arg3, arg4) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = arg1;
            var1 = arg2;
            var7 = arg3;
            var8 = arg4;
            var _closure2_slot0 = var1;
            var4 = var1.type;
            var3 = 'icon';
            if(!(var3 !== var4)) { _fun0010_ip = 50; continue _fun0010 }
case 65:
            var3 = 'preview';
            if(!(var3 !== var4)) { _fun0010_ip = 66; continue _fun0010 }
case 67:
            var3 = undefined;
            return var3;
case 66:
            var6 = _closure1_slot14;
            var4 = _closure1_slot25;
            var3 = {};
            var3['cleanUp'] = var8;
            var3['state'] = var7;
            var10 = var1.guilds;
            var9 = var10.map;
            var2 = function(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var6 = arg1;
                    var3 = arg2;
                    var1 = 0;
                    var2 = var3;
                    if(!(var1 !== var2)) { _fun0011_ip = 68; continue _fun0011 }
case 69:
                    var1 = 1;
                    var2 = var3;
                    if(!(var1 !== var3)) { _fun0011_ip = 68; continue _fun0011 }
case 70:
                    var1 = 2;
                    var2 = var3;
                    if(!(var1 !== var3)) { _fun0011_ip = 68; continue _fun0011 }
case 71:
                    var1 = 3;
                    var2 = var3;
                    if(!(var1 !== var3)) { _fun0011_ip = 68; continue _fun0011 }
case 72:
                    var2 = undefined;
case 68:
                    var4 = null;
                    var3 = var4 != var6;
                    var1 = null;
                    if(!var3) { _fun0011_ip = 73; continue _fun0011 }
case 74:
                    var3 = var4 != var2;
                    var1 = null;
                    if(!var3) { _fun0011_ip = 73; continue _fun0011 }
case 30:
                    var5 = _closure1_slot14;
                    var4 = _closure1_slot24;
                    var3 = {};
                    var3['guildId'] = var6;
                    var7 = _closure2_slot0;
                    var7 = var7.selectedGuildId;
                    var7 = var6 === var7;
                    var3['selected'] = var7;
                    var3['position'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3, var6);
case 73:
                    return var1;
                }
            };
            var2 = var9.bind(var10)(var2);
            var3['children'] = var2;
            var2 = undefined;
            var2 = var6.bind(var2)(var4, var3, var5);
            return var2;
case 50:
            var4 = _closure1_slot14;
            var3 = _closure1_slot25;
            var2 = {};
            var9 = true;
            var2['fromTop'] = var9;
            var2['cleanUp'] = var8;
            var2['state'] = var7;
            var8 = _closure1_slot14;
            var7 = _closure1_slot27;
            var6 = {};
            var6['item'] = var1;
            var1 = undefined;
            var6 = var8.bind(var1)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var1)(var3, var2, var5);
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var8 = var2.bind(var1)(var5);
    var _closure1_slot3 = var8;
    var2 = 1;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var5 = var7[var2];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.GuildsNodeType;
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.useItemDragState;
    var _closure1_slot9 = var5;
    var2 = var2.useFolderBGHeightOffset;
    var _closure1_slot10 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.DEFAULT_FOLDER_COLOR;
    var _closure1_slot11 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.TRANSITION_PHYSICS;
    var _closure1_slot12 = var5;
    var2 = var2.FOLDER_SPRING_PHYSICS;
    var _closure1_slot13 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot14 = var5;
    var2 = var2.jsxs;
    var _closure1_slot15 = var2;
    var2 = 9;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var5 = var9.createStyles;
    var2 = function() {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var7 = arguments[1];
            var9 = arguments[2];
            var5 = undefined;
            if(!(var7 === var5)) { _fun0012_ip = 69; continue _fun0012 }
case 75:
            var7 = 48;
case 69:
            if(!(var9 === var5)) { _fun0012_ip = 76; continue _fun0012 }
case 77:
            var9 = 0;
case 76:
            var1 = {};
            var2 = {};
            var8 = 'absolute';
            var2['position'] = var8;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 10;
            var10 = var6[var3];
            var10 = var4.bind(var5)(var10);
            var10 = var10.modules;
            var10 = var10.mobile;
            var10 = var10.GUILD_BAR_ITEM_MARGIN;
            var2['top'] = var10;
            var10 = var6[var3];
            var10 = var4.bind(var5)(var10);
            var10 = var10.modules;
            var10 = var10.mobile;
            var10 = var10.GUILD_FOLDER_BACKGROUND_LEFT;
            var2['left'] = var10;
            var10 = var6[var3];
            var10 = var4.bind(var5)(var10);
            var10 = var10.colors;
            var10 = var10.GUILD_FOLDER_BACKGROUND;
            var2['backgroundColor'] = var10;
            var10 = var6[var3];
            var10 = var4.bind(var5)(var10);
            var10 = var10.modules;
            var10 = var10.mobile;
            var10 = var10.GUILD_FOLDER_BACKGROUND_RADIUS;
            var2['borderTopLeftRadius'] = var10;
            var10 = var6[var3];
            var10 = var4.bind(var5)(var10);
            var10 = var10.modules;
            var10 = var10.mobile;
            var10 = var10.GUILD_FOLDER_BACKGROUND_RADIUS;
            var2['borderTopRightRadius'] = var10;
            var10 = var6[var3];
            var10 = var4.bind(var5)(var10);
            var10 = var10.modules;
            var10 = var10.mobile;
            var10 = var10.GUILD_FOLDER_BACKGROUND_RADIUS;
            var2['borderBottomLeftRadius'] = var10;
            var10 = var6[var3];
            var10 = var4.bind(var5)(var10);
            var10 = var10.modules;
            var10 = var10.mobile;
            var10 = var10.GUILD_FOLDER_BACKGROUND_RADIUS;
            var2['borderBottomRightRadius'] = var10;
            var9 = var7 + var9;
            var2['width'] = var9;
            var1['folderBackground'] = var2;
            var2 = {'position': 'absolute', 'top': 0, 'left': 0, 'width': null, 'height': null, 'justifyContent': 'center', 'alignItems': 'center'};
            var2['width'] = var7;
            var2['height'] = var7;
            var1['folderScaleContainer'] = var2;
            var2 = {};
            var2['position'] = var8;
            var9 = var6[var3];
            var9 = var4.bind(var5)(var9);
            var9 = var9.modules;
            var9 = var9.mobile;
            var9 = var9.GUILD_FOLDER_PREVIEW_ICON_MARGIN;
            var2['margin'] = var9;
            var1['guildPreviewIcon'] = var2;
            var2 = {};
            var9 = var6[var3];
            var9 = var4.bind(var5)(var9);
            var9 = var9.radii;
            var9 = var9.sm;
            var2['borderRadius'] = var9;
            var1['guildPreviewIconUnselected'] = var2;
            var2 = {'top': 0, 'left': 0};
            var1['guildPreview0'] = var2;
            var2 = {'top': 0, 'right': 0};
            var1['guildPreview1'] = var2;
            var2 = {'bottom': 0, 'left': 0};
            var1['guildPreview2'] = var2;
            var2 = {'bottom': 0, 'right': 0};
            var1['guildPreview3'] = var2;
            var2 = {};
            var2['position'] = var8;
            var2['width'] = var7;
            var2['height'] = var7;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.modules;
            var3 = var3.mobile;
            var3 = var3.GUILD_FOLDER_PREVIEW_OPACITY;
            var2['opacity'] = var3;
            var1['guildPreviewWrapper'] = var2;
            return var1;
        }
    };
    var2 = var5.bind(var9)(var2);
    var _closure1_slot16 = var2;
    var2 = {};
    var5 = "function GuildsBarGuildFolderTsx1(values){const{withSpring,TRANSITION_PHYSICS}=this.__closure;return{animations:{height:withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight}};}";
    var2['code'] = var5;
    var _closure1_slot17 = var2;
    var5 = var8.memo;
    var2 = function FolderBGInner(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var8 = var1.folderId;
            var10 = var1.totalItems;
            var13 = var1.color;
            var _closure2_slot0 = var13;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var15 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 14;
            var2 = var5[var2];
            var6 = var15.bind(var4)(var2);
            var2 = 'GuildsBarGuildFolder';
            var14 = var6.bind(var4)(var2);
            var _closure2_slot1 = var14;
            var9 = _closure1_slot0;
            var2 = 11;
            var6 = var5[var2];
            var12 = var9.bind(var4)(var6);
            var11 = var12.useToken;
            var6 = 10;
            var7 = var5[var6];
            var7 = var15.bind(var4)(var7);
            var7 = var7.modules;
            var7 = var7.mobile;
            var7 = var7.GUILD_BAR_ITEM_SIZE;
            var11 = var11.bind(var12)(var7);
            var7 = var5[var2];
            var16 = var9.bind(var4)(var7);
            var12 = var16.useToken;
            var7 = var5[var6];
            var7 = var15.bind(var4)(var7);
            var7 = var7.modules;
            var7 = var7.mobile;
            var7 = var7.GUILD_BAR_ITEM_MARGIN;
            var12 = var12.bind(var16)(var7);
            var7 = var5[var2];
            var9 = var9.bind(var4)(var7);
            var7 = var9.useToken;
            var5 = var5[var6];
            var5 = var15.bind(var4)(var5);
            var5 = var5.modules;
            var5 = var5.mobile;
            var5 = var5.GUILD_FOLDER_BACKGROUND_WIDTH_OFFSET;
            var7 = var7.bind(var9)(var5);
            var5 = _closure1_slot16;
            var5 = var5.bind(var4)(var14, var11, var7);
            var7 = _closure1_slot10;
            var8 = var7.bind(var4)(var8);
            var7 = 0;
            if(!var14) { _fun0013_ip = 18; continue _fun0013 }
case 78:
            var7 = var12;
case 18:
            var9 = var11 + var7;
            var7 = 2;
            var7 = var7 * var12;
            var7 = var11 + var7;
            var7 = var7 * var10;
            var7 = var9 + var7;
            var7 = var7 + var8;
            var15 = _closure1_slot3;
            var12 = var15.useCallback;
            var11 = function o(arg1) {
                var3 = arg1;
                var1 = {};
                var2 = {};
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 15;
                var6 = var6[var5];
                var5 = undefined;
                var8 = var7.bind(var5)(var6);
                var7 = var8.withSpring;
                var6 = var3.targetHeight;
                var5 = _closure1_slot12;
                var4 = 'animate-always';
                var4 = var7.bind(var8)(var6, var5, var4);
                var2['height'] = var4;
                var1['animations'] = var2;
                var2 = {};
                var3 = var3.currentHeight;
                var2['height'] = var3;
                var1['initialValues'] = var2;
                return var1;
            };
            var8 = {};
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var16 = 15;
            var16 = var9[var16];
            var16 = var10.bind(var4)(var16);
            var16 = var16.withSpring;
            var8['withSpring'] = var16;
            var16 = _closure1_slot12;
            var8['TRANSITION_PHYSICS'] = var16;
            var11['__closure'] = var8;
            var8 = 2519256682742.0;
            var11['__workletHash'] = var8;
            var8 = _closure1_slot17;
            var11['__initData'] = var8;
            var8 = new Array(0);
            var8 = var12.bind(var15)(var11, var8);
            var2 = var9[var2];
            var11 = var10.bind(var4)(var2);
            var10 = var11.useToken;
            var2 = _closure1_slot1;
            var6 = var9[var6];
            var6 = var2.bind(var4)(var6);
            var6 = var6.modules;
            var6 = var6.mobile;
            var6 = var6.GUILD_FOLDER_COLOR_OPACITY;
            var12 = var10.bind(var11)(var6);
            _closure2_slot2 = var12;
            var11 = _closure1_slot3;
            var10 = var11.useMemo;
            var6 = new Array(3);
            var6[0] = var14;
            var6[1] = var13;
            var6[2] = var12;
            var3 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(!var1) { _fun0014_ip = 71; continue _fun0014 }
case 79:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0014_ip = 71; continue _fun0014 }
case 29:
                    var4 = _closure2_slot0;
                    var1 = _closure1_slot11;
                    if(!(var4 === var1)) { _fun0014_ip = 67; continue _fun0014 }
case 71:
                    var1 = undefined;
                    return var1;
case 67:
                    var1 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 16;
                    var3 = var8[var3];
                    var6 = undefined;
                    var5 = var7.bind(var6)(var3);
                    var4 = var5.hexWithOpacity;
                    var3 = 17;
                    var3 = var8[var3];
                    var7 = var7.bind(var6)(var3);
                    var6 = var7.int2hex;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var7)(var3);
                    var2 = _closure2_slot2;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['backgroundColor'] = var2;
                    return var1;
                }
            };
            var6 = var10.bind(var11)(var3, var6);
            var3 = _closure1_slot14;
            var1 = 18;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {'pointerEvents': 'none', 'collapsable': false};
            var1['layout'] = var8;
            var8 = var5.folderBackground;
            var5 = new Array(3);
            var5[0] = var8;
            var5[1] = var6;
            var6 = {};
            var6['height'] = var7;
            var5[2] = var6;
            var1['style'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var5.bind(var8)(var2);
    var _closure1_slot18 = var2;
    var5 = {};
    var9 = 'function GuildsBarGuildFolderTsx2(){const{withSpring,visible,FOLDER_SPRING_PHYSICS,state,TransitionStates,runOnJS,cleanUp,fromTop,guildItemSize}=this.__closure;return{opacity:withSpring(visible.get(),FOLDER_SPRING_PHYSICS,undefined,function(finished){if(finished&&state===TransitionStates.YEETED)runOnJS(cleanUp)();}),transform:[{translateY:withSpring(visible.get()===1?0:fromTop?-guildItemSize:guildItemSize,FOLDER_SPRING_PHYSICS)},{scale:withSpring(visible.get()===1?1:fromTop?0.3:1.3,FOLDER_SPRING_PHYSICS)}]};}';
    var5['code'] = var9;
    var _closure1_slot19 = var5;
    var5 = {};
    var9 = 'function GuildsBarGuildFolderTsx3(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED)runOnJS(cleanUp)();}';
    var5['code'] = var9;
    var _closure1_slot20 = var5;
    var5 = {};
    var9 = 'function GuildsBarGuildFolderTsx4(values){const{dragDropInProgress,sharedId,id,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _id;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===""+id&&!isDragTarget;sharedId.set(""+((_id=id)!==null&&_id!==void 0?_id:null));return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,\'animate-always\'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,\'animate-always\'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}';
    var5['code'] = var9;
    var _closure1_slot21 = var5;
    var5 = var8.memo;
    var4 = function GuildsBarGuildFolder(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var13 = var1.id;
            var _closure2_slot0 = var13;
            var12 = var1.expanded;
            var _closure2_slot1 = var12;
            var5 = var1.name;
            var _closure2_slot2 = var5;
            var15 = var1.color;
            var _closure2_slot3 = var15;
            var14 = var1.childNodes;
            var _closure2_slot4 = var14;
            var6 = var1.isDragPreview;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0015_ip = 80; continue _fun0015 }
case 81:
            var6 = false;
case 80:
            var9 = var1.foldersChanged;
            var _closure2_slot5 = var9;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var2 = _closure1_slot1;
            var31 = _closure1_slot2;
            var1 = 14;
            var1 = var31[var1];
            var7 = var2.bind(var4)(var1);
            var1 = 'GuildsBarGuildFolder';
            var17 = var7.bind(var4)(var1);
            var36 = _closure1_slot0;
            var1 = 11;
            var1 = var31[var1];
            var8 = var36.bind(var4)(var1);
            var7 = var8.useToken;
            var1 = 10;
            var1 = var31[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.GUILD_BAR_ITEM_SIZE;
            var7 = var7.bind(var8)(var1);
            var1 = _closure1_slot16;
            var20 = var1.bind(var4)(var17, var7);
            _closure2_slot6 = var20;
            var1 = 24;
            var7 = var31[var1];
            var16 = var36.bind(var4)(var7);
            var8 = var16.useGuildsBarAnimatedWrapperStyles;
            var7 = {};
            var11 = true;
            var7['disableSelectedColor'] = var11;
            var7['disableBGColor'] = var17;
            var23 = var8.bind(var16)(var7);
            var16 = 12;
            var7 = var31[var16];
            var18 = var36.bind(var4)(var7);
            var17 = var18.useStateFromStoresObject;
            var7 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = _closure2_slot1;
                    if(var3) { _fun0016_ip = 82; continue _fun0016 }
case 75:
                    var4 = _closure1_slot4;
                    var3 = var4.getMutableGuildStates;
                    var3 = var3.bind(var4)();
                    var _closure3_slot0 = var3;
                    var4 = _closure2_slot4;
                    var3 = var4.reduce;
                    var2 = function(arg1, arg2) {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                            var1 = arg1;
                            var7 = arg2;
                            var3 = var7.id;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0017_ip = 83; continue _fun0017 }
case 29:
                            var4 = _closure3_slot0;
                            var3 = var7.id;
                            var3 = var4[var3];
                            var4 = var2 == var3;
                            var5 = undefined;
                            if(var4) { _fun0017_ip = 62; continue _fun0017 }
case 72:
                            var5 = var3.highImportanceMentionCount;
case 62:
                            var9 = var2 != var5;
                            var4 = 0;
                            var3 = 0;
                            if(!var9) { _fun0017_ip = 84; continue _fun0017 }
case 60:
                            var3 = var5;
case 84:
                            var9 = _closure3_slot0;
                            var5 = var7.id;
                            var9 = var9[var5];
                            var10 = var2 == var9;
                            var5 = undefined;
                            if(var10) { _fun0017_ip = 85; continue _fun0017 }
case 64:
                            var5 = var9.lowImportanceMentionCount;
case 85:
                            var10 = var2 != var5;
                            var9 = 0;
                            if(!var10) { _fun0017_ip = 86; continue _fun0017 }
case 87:
                            var9 = var5;
case 86:
                            var5 = var1.mentionCount;
                            var5 = var5 + var3;
                            var5 = var5 + var9;
                            var1['mentionCount'] = var5;
                            var5 = var1.unread;
                            if(var5) { _fun0017_ip = 88; continue _fun0017 }
case 89:
                            var8 = _closure3_slot0;
                            var7 = var7.id;
                            var7 = var8[var7];
                            var8 = var2 == var7;
                            var6 = undefined;
                            if(var8) { _fun0017_ip = 39; continue _fun0017 }
case 90:
                            var6 = var7.unread;
case 39:
                            var5 = var6;
case 88:
                            var2 = var2 != var5;
                            if(!var2) { _fun0017_ip = 91; continue _fun0017 }
case 92:
                            var2 = var5;
case 91:
                            var1['unread'] = var2;
                            var2 = var1.isMentionLowImportance;
                            if(!var2) { _fun0017_ip = 38; continue _fun0017 }
case 93:
                            var2 = var4 === var3;
case 38:
                            var1['isMentionLowImportance'] = var2;
case 83:
                            return var1;
                        }
                    };
                    var1 = {'unread': false, 'mentionCount': 0, 'isMentionLowImportance': true};
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
case 82:
                    var1 = {'unread': false, 'mentionCount': 0, 'isMentionLowImportance': false};
                    return var1;
                }
            };
            var7 = var17.bind(var18)(var8, var7);
            var25 = var7.unread;
            var19 = var7.mentionCount;
            var18 = var7.isMentionLowImportance;
            var7 = var31[var16];
            var22 = var36.bind(var4)(var7);
            var21 = var22.useStateFromStoresObject;
            var7 = _closure1_slot6;
            var17 = new Array(2);
            var17[0] = var7;
            var7 = _closure1_slot7;
            var17[1] = var7;
            var8 = new Array(3);
            var8[0] = var12;
            var8[1] = var13;
            var8[2] = var14;
            var7 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var2 = _closure1_slot6;
                    var1 = var2.getGuildId;
                    var8 = var1.bind(var2)();
                    var3 = _closure1_slot22;
                    var2 = _closure2_slot4;
                    var4 = undefined;
                    var10 = var3.bind(var4)(var2);
                    var3 = var10.bind(var4)();
                    var2 = var3.done;
                    var7 = 4;
                    var6 = var3;
                    var9 = 0;
                    var3 = undefined;
                    if(var2) { _fun0018_ip = 94; continue _fun0018 }
case 51:
                    var2 = var6.value;
                    var2 = var2.id;
                    var3 = var8;
                    if(!(var2 !== var3)) { _fun0018_ip = 94; continue _fun0018 }
case 95:
                    var9 = var9 + 1;
                    var3 = undefined;
                    if(!(!(var9 >= var7))) { _fun0018_ip = 94; continue _fun0018 }
case 96:
                    var11 = var10.bind(var4)();
                    var2 = var11.done;
                    var6 = var11;
                    var3 = undefined;
                    if(!var2) { _fun0018_ip = 51; continue _fun0018 }
case 94:
                    var6 = _closure2_slot1;
                    var2 = false;
                    if(var6) { _fun0018_ip = 97; continue _fun0018 }
case 98:
                    var6 = null;
                    var7 = var6 != var8;
                    var2 = false;
                    if(!var7) { _fun0018_ip = 97; continue _fun0018 }
case 99:
                    var7 = _closure1_slot7;
                    var5 = var7.getGuildsTree;
                    var7 = var5.bind(var7)();
                    var5 = var7.getNode;
                    var5 = var5.bind(var7)(var8);
                    var6 = var6 == var5;
                    var4 = undefined;
                    if(var6) { _fun0018_ip = 100; continue _fun0018 }
case 101:
                    var4 = var5.parentId;
case 100:
                    var1 = _closure2_slot0;
                    var2 = var4 === var1;
case 97:
                    var1 = {};
                    var1['selectedPreviewId'] = var3;
                    var1['hasGuildSelected'] = var2;
                    return var1;
                }
            };
            var7 = var21.bind(var22)(var17, var7, var8);
            var8 = var7.selectedPreviewId;
            _closure2_slot7 = var8;
            var24 = var7.hasGuildSelected;
            var7 = 25;
            var7 = var31[var7];
            var17 = var2.bind(var4)(var7);
            var7 = {};
            var7['mentionCount'] = var19;
            var7['isMentionLowImportance'] = var18;
            var17 = var17.bind(var4)(var7);
            var7 = var17.badge;
            var18 = var17.cutouts;
            var16 = var31[var16];
            var22 = var36.bind(var4)(var16);
            var21 = var22.useStateFromStores;
            var16 = _closure1_slot5;
            var19 = new Array(1);
            var19[0] = var16;
            var17 = new Array(2);
            var17[0] = var5;
            var17[1] = var14;
            var5 = 27;
            var5 = var31[var5];
            var37 = var2.bind(var4)(var5);
            var39 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var10 = null;
                    if(!(var10 == var1)) { _fun0019_ip = 102; continue _fun0019 }
case 103:
                    var6 = new Array(0);
                    var3 = _closure1_slot22;
                    var1 = _closure2_slot4;
                    var7 = undefined;
                    var9 = var3.bind(var7)(var1);
                    var3 = var9.bind(var7)();
                    var1 = var3.done;
                    var5 = 3;
                    var8 = 0;
                    if(var1) { _fun0019_ip = 104; continue _fun0019 }
case 4:
                    var1 = var3.value;
                    var12 = _closure1_slot5;
                    var11 = var12.getGuild;
                    var1 = var1.id;
                    var1 = var11.bind(var12)(var1);
                    if(!(var10 != var1)) { _fun0019_ip = 105; continue _fun0019 }
case 106:
                    var11 = var6.push;
                    var1 = var1.name;
                    var1 = var11.bind(var6)(var1);
case 105:
                    var8 = var8 + 1;
                    if(!(!(var8 >= var5))) { _fun0019_ip = 104; continue _fun0019 }
case 107:
                    var11 = var9.bind(var7)();
                    var1 = var11.done;
                    var3 = var11;
                    if(!var1) { _fun0019_ip = 4; continue _fun0019 }
case 104:
                    var1 = {};
                    var1['names'] = var6;
                    var3 = _closure2_slot4;
                    var5 = var3.length;
                    var1['count'] = var5;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 26;
                    var4 = var8[var4];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.getListSummaryLabel;
                    var3 = var3.length;
                    var3 = var4.bind(var5)(var6, var3);
                    var1['label'] = var3;
                    return var1;
case 102:
                    var1 = {};
                    var3 = 1;
                    var1['count'] = var3;
                    var2 = _closure2_slot2;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var1['names'] = var3;
                    var1['label'] = var2;
                    return var1;
                }
            };
            var41 = var22;
            var40 = var19;
            var38 = var17;
            var5 = var41[var21](var40, var39, var38, var37, var36);
            var22 = var5.label;
            var19 = _closure1_slot3;
            var17 = var19.useMemo;
            var16 = new Array(1);
            var16[0] = var15;
            var5 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 17;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.int2hex;
                    var6 = _closure2_slot3;
                    var5 = null;
                    if(!(var5 == var6)) { _fun0020_ip = 108; continue _fun0020 }
case 109:
                    var1 = _closure1_slot11;
                    _fun0020_ip = 48; continue _fun0020;
case 108:
                    var1 = _closure2_slot3;
case 48:
                    var3 = var2.bind(var3)(var1);
                    var1 = {};
                    var2 = {};
                    var2['tintColor'] = var3;
                    var1['tintStyle'] = var2;
                    var2 = {};
                    var2['backgroundColor'] = var3;
                    var1['folderPreviewStyle'] = var2;
                    return var1;
                }
            };
            var5 = var17.bind(var19)(var5, var16);
            var21 = var5.tintStyle;
            _closure2_slot8 = var21;
            var5 = var5.folderPreviewStyle;
            _closure2_slot9 = var5;
            var19 = _closure1_slot3;
            var17 = var19.useMemo;
            var16 = new Array(2);
            var16[0] = var13;
            var16[1] = var9;
            var9 = function() {
                var1 = {};
                var2 = function onPress() {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                        var3 = _closure2_slot5;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0021_ip = 110; continue _fun0021 }
case 103:
                        var3 = _closure2_slot5;
                        var1 = var3.get;
                        var5 = var1.bind(var3)();
                        var4 = var5.has;
                        var6 = _closure2_slot0;
                        var1 = global;
                        var3 = var1.HermesInternal;
                        var3 = var3.concat;
                        var7 = '';
                        var3 = var3.bind(var7)(var6);
                        var3 = var4.bind(var5)(var3);
                        if(!var3) { _fun0021_ip = 110; continue _fun0021 }
case 111:
                        var6 = var1.Set;
                        var4 = _closure2_slot5;
                        var3 = var4.get;
                        var9 = var3.bind(var4)();
                        var5 = var6.prototype;
                        var5 = Object.create(var5, {constructor: {value: var6}});
                        var10 = var5;
                        var3 = new var10[var6](var9, var8);
                        var3 = var3 instanceof Object ? var3 : var5;
                        var5 = var3.add;
                        var6 = _closure2_slot0;
                        var1 = var1.HermesInternal;
                        var1 = var1.concat;
                        var1 = var1.bind(var7)(var6);
                        var1 = var5.bind(var3)(var1);
                        var1 = var4.set;
                        var1 = var1.bind(var4)(var3);
case 110:
                        var8 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 28;
                        var6 = var5[var4];
                        var1 = undefined;
                        var7 = var8.bind(var1)(var6);
                        var6 = var7.triggerHapticFeedback;
                        var4 = var5[var4];
                        var4 = var8.bind(var1)(var4);
                        var4 = var4.HapticFeedbackTypes;
                        var4 = var4.IMPACT_LIGHT;
                        var4 = var6.bind(var7)(var4);
                        var4 = _closure1_slot1;
                        var3 = 29;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.toggleGuildFolderExpand;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var1['onPress'] = var2;
                return var1;
            };
            var17 = var17.bind(var19)(var9, var16);
            var19 = _closure1_slot3;
            var16 = var19.useMemo;
            var9 = new Array(4);
            var9[0] = var12;
            var9[1] = var14;
            var9[2] = var21;
            var9[3] = var8;
            var8 = function() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0022_ip = 110; continue _fun0022 }
case 112:
                    var2 = new Array(0);
                    var4 = _closure1_slot22;
                    var3 = _closure2_slot4;
                    var7 = undefined;
                    var6 = var4.bind(var7)(var3);
                    var4 = var6.bind(var7)();
                    var3 = var4.done;
                    var5 = 4;
                    if(var3) { _fun0022_ip = 113; continue _fun0022 }
case 108:
                    var3 = var4.value;
                    var10 = var3.type;
                    var9 = _closure1_slot8;
                    var9 = var9.GUILD;
                    if(!(var10 === var9)) { _fun0022_ip = 114; continue _fun0022 }
case 95:
                    var9 = var2.push;
                    var3 = var3.id;
                    var3 = var9.bind(var2)(var3);
                    var3 = var2.length;
                    if(!(!(var3 >= var5))) { _fun0022_ip = 113; continue _fun0022 }
case 114:
                    var9 = var6.bind(var7)();
                    var3 = var9.done;
                    var4 = var9;
                    if(!var3) { _fun0022_ip = 108; continue _fun0022 }
case 113:
                    var3 = {};
                    var4 = 'preview';
                    var3['type'] = var4;
                    var3['guilds'] = var2;
                    var2 = _closure2_slot7;
                    var3['selectedGuildId'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    return var2;
case 110:
                    var2 = {};
                    var3 = 'icon';
                    var2['type'] = var3;
                    var1 = _closure2_slot8;
                    var2['tintStyle'] = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    return var1;
                }
            };
            var9 = var16.bind(var19)(var8, var9);
            var19 = _closure1_slot3;
            var16 = var19.useCallback;
            var8 = new Array(3);
            var8[0] = var12;
            var20 = var20.guildPreviewWrapper;
            var8[1] = var20;
            var8[2] = var5;
            var5 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var5 = _closure1_slot15;
                    var2 = _closure1_slot3;
                    var4 = var2.Fragment;
                    var3 = {};
                    var7 = _closure1_slot14;
                    var6 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 30;
                    var1 = var2[var1];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var1);
                    var1 = {};
                    var8 = _closure2_slot6;
                    var9 = var8.guildPreviewWrapper;
                    var8 = new Array(2);
                    var8[0] = var9;
                    var11 = _closure2_slot1;
                    var9 = undefined;
                    if(var11) { _fun0023_ip = 115; continue _fun0023 }
case 116:
                    var9 = _closure2_slot9;
case 115:
                    var8[1] = var9;
                    var1['style'] = var8;
                    var6 = var7.bind(var2)(var6, var1);
                    var1 = new Array(2);
                    var1[0] = var6;
                    var6 = arg1;
                    var1[1] = var6;
                    var3['children'] = var1;
                    var1 = 'wrapper';
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var8 = var16.bind(var19)(var5, var8);
            var5 = _closure1_slot9;
            var5 = var5.bind(var4)(var13, var6);
            var21 = var5.isDragTarget;
            _closure2_slot10 = var21;
            var20 = var5.dragState;
            var16 = var5.overState;
            var28 = var5.itemSize;
            var34 = var5.dragDropInProgress;
            _closure2_slot11 = var34;
            var27 = _closure1_slot3;
            var26 = var27.useMemo;
            var19 = new Array(1);
            var19[0] = var13;
            var5 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 31;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.getGuildFolderMenuItems;
                var1 = _closure2_slot0;
                var5 = var3.bind(var4)(var1);
                var _closure3_slot0 = var5;
                var1 = {};
                var4 = var5.map;
                var3 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var3 = var2.label;
                    var1['name'] = var3;
                    var2 = var2.label;
                    var1['label'] = var2;
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var1['accessibilityActions'] = var3;
                var2 = function onAccessibilityAction(arg1) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var3 = _closure3_slot0;
                        var2 = var3.find;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.label;
                            var1 = _closure4_slot0;
                            var1 = var1.nativeEvent;
                            var1 = var1.actionName;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var2 = var2.bind(var3)(var1);
                        var4 = null;
                        var1 = var4 == var2;
                        if(var1) { _fun0024_ip = 117; continue _fun0024 }
case 66:
                        var3 = var2.action;
                        var1 = var4 == var3;
case 117:
                        if(var1) { _fun0024_ip = 80; continue _fun0024 }
case 28:
                        var1 = var2.action;
                        var1 = var1.bind(var2)();
case 80:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onAccessibilityAction'] = var2;
                return var1;
            };
            var5 = var26.bind(var27)(var5, var19);
            var27 = var5.accessibilityActions;
            var26 = var5.onAccessibilityAction;
            var5 = 19;
            var5 = var31[var5];
            var32 = var36.bind(var4)(var5);
            var19 = var32.useSharedValue;
            var29 = global;
            var5 = var29.HermesInternal;
            var5 = var5.concat;
            var30 = '';
            var5 = var5.bind(var30)(var13);
            var19 = var19.bind(var32)(var5);
            _closure2_slot12 = var19;
            var33 = _closure1_slot3;
            var32 = var33.useCallback;
            var5 = function w(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure2_slot11;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    if(!var4) { _fun0025_ip = 84; continue _fun0025 }
case 46:
                    var5 = _closure2_slot12;
                    var2 = var5.get;
                    var5 = var2.bind(var5)();
                    var7 = _closure2_slot0;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var6 = var2.concat;
                    var2 = '';
                    var2 = var6.bind(var2)(var7);
                    var4 = var5 === var2;
case 84:
                    if(!var4) { _fun0025_ip = 118; continue _fun0025 }
case 111:
                    var2 = _closure2_slot10;
                    var4 = !var2;
case 118:
                    var5 = _closure2_slot12;
                    var2 = var5.set;
                    var6 = _closure2_slot0;
                    var7 = null;
                    var6 = var7 != var6;
                    if(!var6) { _fun0025_ip = 119; continue _fun0025 }
case 120:
                    var7 = _closure2_slot0;
case 119:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var1 = '';
                    var1 = var6.bind(var1)(var7);
                    var1 = var2.bind(var5)(var1);
                    var1 = {};
                    var2 = {};
                    if(var4) { _fun0025_ip = 121; continue _fun0025 }
case 122:
                    var5 = var3.targetOriginY;
                    _fun0025_ip = 123; continue _fun0025;
case 121:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var7 = 15;
                    var8 = var8[var7];
                    var7 = undefined;
                    var10 = var9.bind(var7)(var8);
                    var9 = var10.withSpring;
                    var8 = var3.targetOriginY;
                    var7 = _closure1_slot12;
                    var6 = 'animate-always';
                    var5 = var9.bind(var10)(var8, var7, var6);
case 123:
                    var2['originY'] = var5;
                    if(var4) { _fun0025_ip = 124; continue _fun0025 }
case 125:
                    var4 = var3.targetHeight;
                    _fun0025_ip = 24; continue _fun0025;
case 124:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var6 = 15;
                    var7 = var7[var6];
                    var6 = undefined;
                    var9 = var8.bind(var6)(var7);
                    var8 = var9.withSpring;
                    var7 = var3.targetHeight;
                    var6 = _closure1_slot12;
                    var5 = 'animate-always';
                    var4 = var8.bind(var9)(var7, var6, var5);
case 24:
                    var2['height'] = var4;
                    var1['animations'] = var2;
                    var2 = {};
                    var4 = var3.currentOriginY;
                    var2['originY'] = var4;
                    var3 = var3.currentHeight;
                    var2['height'] = var3;
                    var1['initialValues'] = var2;
                    return var1;
                }
            };
            var3 = {};
            var3['dragDropInProgress'] = var34;
            var3['sharedId'] = var19;
            var3['id'] = var13;
            var3['isDragTarget'] = var21;
            var35 = 15;
            var35 = var31[var35];
            var35 = var36.bind(var4)(var35);
            var35 = var35.withSpring;
            var3['withSpring'] = var35;
            var35 = _closure1_slot12;
            var3['TRANSITION_PHYSICS'] = var35;
            var5['__closure'] = var3;
            var3 = 11967845900199.0;
            var5['__workletHash'] = var3;
            var3 = _closure1_slot21;
            var5['__initData'] = var3;
            var3 = new Array(4);
            var3[0] = var13;
            var3[1] = var19;
            var3[2] = var21;
            var3[3] = var34;
            var5 = var32.bind(var33)(var5, var3);
            var3 = _closure1_slot14;
            var1 = var31[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var29 = var29.HermesInternal;
            var29 = var29.concat;
            var29 = var29.bind(var30)(var13);
            var1['id'] = var29;
            var1['draggedItemSize'] = var28;
            var1['accessibilityActions'] = var27;
            var1['onAccessibilityAction'] = var26;
            var1['selected'] = var24;
            var24 = !var12;
            if(!var24) { _fun0015_ip = 126; continue _fun0015 }
case 127:
            var24 = var25;
case 126:
            var1['unread'] = var24;
            var24 = false;
            var1['circle'] = var24;
            var1['styles'] = var23;
            var1['label'] = var22;
            var1['isDragTarget'] = var21;
            var1['dragState'] = var20;
            var1['sharedId'] = var19;
            var1['cutouts'] = var18;
            var1['config'] = var17;
            var1['isDragPreview'] = var6;
            var1['overState'] = var16;
            var1['preventClipping'] = var11;
            var1['expanded'] = var12;
            var1['layout'] = var5;
            var5 = var7;
            if(!var12) { _fun0015_ip = 128; continue _fun0015 }
case 129:
            var5 = var7;
            if(var6) { _fun0015_ip = 128; continue _fun0015 }
case 130:
            var11 = _closure1_slot14;
            var7 = _closure1_slot18;
            var6 = {};
            var6['color'] = var15;
            var6['folderId'] = var13;
            var14 = var14.length;
            var6['totalItems'] = var14;
            var5 = var11.bind(var4)(var7, var6);
case 128:
            var1['externalChildren'] = var5;
            var7 = _closure1_slot14;
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 32;
            var5 = var11[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['folderId'] = var13;
            var5['expanded'] = var12;
            var5 = var7.bind(var4)(var6, var5);
            var1['expandedChildren'] = var5;
            var7 = _closure1_slot14;
            var6 = _closure1_slot0;
            var5 = 20;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.TransitionGroup;
            var5 = {};
            var11 = _closure1_slot28;
            var5['renderItem'] = var11;
            var10 = _closure1_slot26;
            var5['getItemKey'] = var10;
            var5['items'] = var9;
            var5['wrapChildren'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 33;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guilds_bar/native/GuildsBarGuildFolder.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['GuildsBarGuildFolderBG'] = var2;
    return var1;
})();