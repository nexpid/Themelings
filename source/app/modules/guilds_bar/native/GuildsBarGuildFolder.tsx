// app/modules/guilds_bar/native/GuildsBarGuildFolder.tsx
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
            var9 = _closure1_slot25;
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
            var7 = _closure1_slot25;
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
    var _closure1_slot24 = var1;
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
    var _closure1_slot25 = var1;
    var1 = function MiniGuildIcon(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildId;
            var _closure2_slot0 = var2;
            var4 = var1.position;
            var7 = var1.selected;
            var2 = _closure1_slot18;
            var5 = undefined;
            var12 = var2.bind(var5)();
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 11;
            var6 = var2[var6];
            var9 = var8.bind(var5)(var6);
            var8 = var9.useStateFromStores;
            var10 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var10;
            var3 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var8.bind(var9)(var6, var3);
            var3 = 0;
            if(!(var3 !== var4)) { _fun0004_ip = 141; continue _fun0004 }
 94:
            var3 = 1;
            if(!(var3 !== var4)) { _fun0004_ip = 133; continue _fun0004 }
 101:
            var3 = 2;
            if(!(var3 !== var4)) { _fun0004_ip = 125; continue _fun0004 }
 108:
            var3 = 3;
            var10 = undefined;
            if(!(var3 === var4)) { _fun0004_ip = 147; continue _fun0004 }
 117:
            var10 = var12.guildPreview3;
            _fun0004_ip = 147; continue _fun0004;
 125:
            var10 = var12.guildPreview2;
            _fun0004_ip = 147; continue _fun0004;
 133:
            var10 = var12.guildPreview1;
            _fun0004_ip = 147; continue _fun0004;
 141:
            var10 = var12.guildPreview0;
 147:
            var4 = _closure1_slot16;
            var3 = _closure1_slot1;
            var8 = 12;
            var2 = var2[var8];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var11 = var12.guildPreviewIcon;
            var9 = new Array(3);
            var9[0] = var11;
            var11 = undefined;
            if(var7) { _fun0004_ip = 194; continue _fun0004 }
 188:
            var11 = var12.guildPreviewIconUnselected;
 194:
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
    var _closure1_slot26 = var1;
    var1 = function TransitionWrapper(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var5 = var1.children;
            var13 = var1.fromTop;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0005_ip = 24; continue _fun0005 }
 22:
            var13 = false;
 24:
            var _closure2_slot0 = var13;
            var14 = var1.cleanUp;
            var _closure2_slot1 = var14;
            var12 = var1.state;
            var _closure2_slot2 = var12;
            var _closure2_slot3 = var4;
            var3 = _closure1_slot18;
            var7 = var3.bind(var4)();
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var15 = 17;
            var6 = var3[var15];
            var8 = var9.bind(var4)(var6);
            var6 = var8.useSharedValue;
            var17 = 18;
            var3 = var3[var17];
            var3 = var9.bind(var4)(var3);
            var3 = var3.TransitionStates;
            var9 = var3.MOUNTED;
            var3 = 0;
            if(!(var12 === var9)) { _fun0005_ip = 120; continue _fun0005 }
 117:
            var3 = 1;
 120:
            var11 = var6.bind(var8)(var3);
            _closure2_slot3 = var11;
            var16 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = var6[var15];
            var9 = var16.bind(var4)(var3);
            var8 = var9.useAnimatedStyle;
            var3 = function o() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var10 = 15;
                    var3 = var2[var10];
                    var9 = undefined;
                    var12 = var5.bind(var9)(var3);
                    var11 = var12.withSpring;
                    var6 = _closure2_slot3;
                    var3 = var6.get;
                    var7 = var3.bind(var6)();
                    var17 = _closure1_slot14;
                    var3 = function e(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var1 = arg1;
                            if(!var1) { _fun0007_ip = 54; continue _fun0007 }
 6:
                            var3 = _closure2_slot2;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 18;
                            var4 = var4[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                            var2 = var2.TransitionStates;
                            var2 = var2.YEETED;
                            var1 = var3 === var2;
 54:
                            if(!var1) { _fun0007_ip = 103; continue _fun0007 }
 57:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 17;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot1;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
 103:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var13 = {};
                    var14 = _closure2_slot2;
                    var13['state'] = var14;
                    var14 = 18;
                    var14 = var2[var14];
                    var14 = var5.bind(var9)(var14);
                    var14 = var14.TransitionStates;
                    var13['TransitionStates'] = var14;
                    var14 = 17;
                    var14 = var2[var14];
                    var14 = var5.bind(var9)(var14);
                    var14 = var14.runOnJS;
                    var13['runOnJS'] = var14;
                    var14 = _closure2_slot1;
                    var13['cleanUp'] = var14;
                    var3['__closure'] = var13;
                    var13 = 47605595424.0;
                    var3['__workletHash'] = var13;
                    var13 = _closure1_slot22;
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
                    var5 = _closure2_slot3;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var7 = 1;
                    var5 = 0;
                    if(!(var7 !== var2)) { _fun0006_ip = 235; continue _fun0006 }
 213:
                    var2 = _closure2_slot0;
                    var12 = _closure1_slot11;
                    if(var2) { _fun0006_ip = 229; continue _fun0006 }
 224:
                    var2 = var12;
                    _fun0006_ip = 232; continue _fun0006;
 229:
                    var2 = -var12;
 232:
                    var5 = var2;
 235:
                    var2 = _closure1_slot14;
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
                    var10 = _closure2_slot3;
                    var9 = var10.get;
                    var9 = var9.bind(var10)();
                    if(!(var7 !== var9)) { _fun0006_ip = 329; continue _fun0006 }
 299:
                    var9 = _closure2_slot0;
                    var8 = 1.3;
                    if(!var9) { _fun0006_ip = 326; continue _fun0006 }
 316:
                    var8 = 0.3;
 326:
                    var7 = var8;
 329:
                    var4 = _closure1_slot14;
                    var4 = var5.bind(var6)(var7, var4);
                    var3['scale'] = var4;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var10 = {};
            var18 = 15;
            var18 = var6[var18];
            var18 = var16.bind(var4)(var18);
            var18 = var18.withSpring;
            var10['withSpring'] = var18;
            var10['visible'] = var11;
            var18 = _closure1_slot14;
            var10['FOLDER_SPRING_PHYSICS'] = var18;
            var10['state'] = var12;
            var17 = var6[var17];
            var17 = var16.bind(var4)(var17);
            var17 = var17.TransitionStates;
            var10['TransitionStates'] = var17;
            var15 = var6[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.runOnJS;
            var10['runOnJS'] = var15;
            var10['cleanUp'] = var14;
            var10['fromTop'] = var13;
            var13 = _closure1_slot11;
            var10['GUILD_ITEM_SIZE'] = var13;
            var3['__closure'] = var10;
            var10 = 15243307009078.0;
            var3['__workletHash'] = var10;
            var10 = _closure1_slot21;
            var3['__initData'] = var10;
            var8 = var8.bind(var9)(var3);
            var10 = _closure1_slot3;
            var9 = var10.useEffect;
            var3 = new Array(2);
            var3[0] = var12;
            var3[1] = var11;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = _closure2_slot3;
                    var3 = var4.set;
                    var6 = _closure2_slot2;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.TransitionStates;
                    var5 = var2.YEETED;
                    var2 = 1;
                    if(!(var6 === var5)) { _fun0008_ip = 62; continue _fun0008 }
 60:
                    var2 = 0;
 62:
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var2 = var9.bind(var10)(var2, var3);
            var3 = _closure1_slot16;
            var2 = _closure1_slot1;
            var1 = 16;
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
    var _closure1_slot27 = var1;
    var1 = function getItemKey(arg1) {
        var1 = arg1;
        var1 = var1.type;
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function renderGuildFolderContent(arg1, arg2, arg3, arg4) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var5 = arg1;
            var9 = arg2;
            var6 = arg3;
            var7 = arg4;
            var _closure2_slot0 = var9;
            var3 = var9.type;
            var2 = 'icon';
            if(!(var2 !== var3)) { _fun0009_ip = 103; continue _fun0009 }
 31:
            var2 = 'preview';
            if(!(var2 !== var3)) { _fun0009_ip = 43; continue _fun0009 }
 39:
            var2 = undefined;
            return var2;
 43:
            var4 = _closure1_slot16;
            var3 = _closure1_slot27;
            var2 = {};
            var2['cleanUp'] = var7;
            var2['state'] = var6;
            var10 = var9.guilds;
            var8 = var10.map;
            var1 = function(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var6 = arg1;
                    var3 = arg2;
                    var1 = 0;
                    var2 = var3;
                    if(!(var1 !== var2)) { _fun0010_ip = 47; continue _fun0010 }
 15:
                    var1 = 1;
                    var2 = var3;
                    if(!(var1 !== var3)) { _fun0010_ip = 47; continue _fun0010 }
 25:
                    var1 = 2;
                    var2 = var3;
                    if(!(var1 !== var3)) { _fun0010_ip = 47; continue _fun0010 }
 35:
                    var1 = 3;
                    var2 = var3;
                    if(!(var1 !== var3)) { _fun0010_ip = 47; continue _fun0010 }
 45:
                    var2 = undefined;
 47:
                    var4 = null;
                    var3 = var4 != var6;
                    var1 = null;
                    if(!var3) { _fun0010_ip = 119; continue _fun0010 }
 58:
                    var3 = var4 != var2;
                    var1 = null;
                    if(!var3) { _fun0010_ip = 119; continue _fun0010 }
 67:
                    var5 = _closure1_slot16;
                    var4 = _closure1_slot26;
                    var3 = {};
                    var3['guildId'] = var6;
                    var7 = _closure2_slot0;
                    var7 = var7.selectedGuildId;
                    var7 = var6 === var7;
                    var3['selected'] = var7;
                    var3['position'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3, var6);
 119:
                    return var1;
                }
            };
            var1 = var8.bind(var10)(var1);
            var2['children'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2, var5);
            return var1;
 103:
            var4 = _closure1_slot16;
            var3 = _closure1_slot27;
            var2 = {};
            var8 = true;
            var2['fromTop'] = var8;
            var2['cleanUp'] = var7;
            var2['state'] = var6;
            var8 = _closure1_slot16;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 19;
            var6 = var12[var1];
            var1 = undefined;
            var7 = var11.bind(var1)(var6);
            var6 = {};
            var10 = 20;
            var10 = var12[var10];
            var10 = var11.bind(var1)(var10);
            var6['source'] = var10;
            var9 = var9.tintStyle;
            var6['style'] = var9;
            var6 = var8.bind(var1)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var1)(var3, var2, var5);
            return var1;
        }
    };
    var _closure1_slot29 = var1;
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
    var2 = var14.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var15 = 2;
    var2 = var7[var15];
    var2 = var14.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var14.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var5 = var7[var2];
    var5 = var14.bind(var1)(var5);
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
    var11 = var2.GUILD_ITEM_SIZE;
    var _closure1_slot11 = var11;
    var13 = var2.GUILD_ITEM_MARGIN;
    var5 = var2.GUILD_ITEM_PADDING;
    var _closure1_slot12 = var5;
    var5 = var2.TRANSITION_PHYSICS;
    var _closure1_slot13 = var5;
    var2 = var2.FOLDER_SPRING_PHYSICS;
    var _closure1_slot14 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.DEFAULT_FOLDER_COLOR;
    var _closure1_slot15 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot16 = var5;
    var2 = var2.jsxs;
    var _closure1_slot17 = var2;
    var2 = 9;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var5 = var9.createStyles;
    var2 = {};
    var10 = {'position': 'absolute', 'top': null, 'left': 12};
    var12 = 'absolute';
    var10['top'] = var13;
    var13 = 10;
    var16 = var7[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BG_MOD_FAINT;
    var10['backgroundColor'] = var16;
    var16 = var7[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var10['borderTopLeftRadius'] = var16;
    var16 = var7[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var10['borderTopRightRadius'] = var16;
    var16 = var11 / var15;
    var10['borderBottomLeftRadius'] = var16;
    var15 = var11 / var15;
    var10['borderBottomRightRadius'] = var15;
    var10['width'] = var11;
    var2['folderBackground'] = var10;
    var10 = {'position': 'absolute', 'top': 0, 'left': 0, 'width': null, 'height': null, 'justifyContent': 'center', 'alignItems': 'center'};
    var10['width'] = var11;
    var10['height'] = var11;
    var2['folderScaleContainer'] = var10;
    var10 = {'position': 'absolute', 'margin': 6};
    var2['guildPreviewIcon'] = var10;
    var10 = {};
    var13 = var7[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10['borderRadius'] = var13;
    var2['guildPreviewIconUnselected'] = var10;
    var10 = {'top': 0, 'left': 0};
    var2['guildPreview0'] = var10;
    var10 = {'top': 0, 'right': 0};
    var2['guildPreview1'] = var10;
    var10 = {'bottom': 0, 'left': 0};
    var2['guildPreview2'] = var10;
    var10 = {'bottom': 0, 'right': 0};
    var2['guildPreview3'] = var10;
    var10 = {};
    var10['position'] = var12;
    var10['width'] = var11;
    var10['height'] = var11;
    var11 = 0.4;
    var10['opacity'] = var11;
    var2['guildPreviewWrapper'] = var10;
    var2 = var5.bind(var9)(var2);
    var _closure1_slot18 = var2;
    var2 = {};
    var5 = "function GuildsBarGuildFolderTsx1(values){const{withSpring,TRANSITION_PHYSICS}=this.__closure;return{animations:{height:withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight}};}";
    var2['code'] = var5;
    var _closure1_slot19 = var2;
    var5 = var8.memo;
    var2 = function FolderBGInner(arg1) {
        var1 = arg1;
        var2 = var1.folderId;
        var11 = var1.totalItems;
        var1 = _closure1_slot18;
        var4 = undefined;
        var5 = var1.bind(var4)();
        var13 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 13;
        var1 = var10[var1];
        var6 = var13.bind(var4)(var1);
        var3 = var6.useGuildsBarAnimatedWrapperStyles;
        var1 = true;
        var1 = var3.bind(var6)(var1);
        var3 = 14;
        var3 = var10[var3];
        var6 = var13.bind(var4)(var3);
        var3 = var6.useClientThemesOverride;
        var1 = var1.itemShapeThemed;
        var6 = var3.bind(var6)(var1);
        var1 = _closure1_slot10;
        var9 = var1.bind(var4)(var2);
        var7 = _closure1_slot3;
        var3 = var7.useCallback;
        var2 = function n(arg1) {
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
            var5 = _closure1_slot13;
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
        var1 = {};
        var12 = 15;
        var12 = var10[var12];
        var12 = var13.bind(var4)(var12);
        var12 = var12.withSpring;
        var1['withSpring'] = var12;
        var12 = _closure1_slot13;
        var1['TRANSITION_PHYSICS'] = var12;
        var2['__closure'] = var1;
        var1 = 2519256682742.0;
        var2['__workletHash'] = var1;
        var1 = _closure1_slot19;
        var2['__initData'] = var1;
        var1 = new Array(0);
        var7 = var3.bind(var7)(var2, var1);
        var3 = _closure1_slot16;
        var2 = _closure1_slot1;
        var1 = 16;
        var1 = var10[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {'pointerEvents': 'none', 'collapsable': false};
        var1['layout'] = var7;
        var7 = var5.folderBackground;
        var5 = new Array(3);
        var5[0] = var7;
        var7 = {};
        var10 = _closure1_slot11;
        var8 = _closure1_slot12;
        var8 = var10 + var8;
        var8 = var8 * var11;
        var8 = var10 + var8;
        var8 = var8 + var9;
        var7['height'] = var8;
        var5[1] = var7;
        var5[2] = var6;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var5.bind(var8)(var2);
    var _closure1_slot20 = var2;
    var5 = {};
    var9 = 'function GuildsBarGuildFolderTsx2(){const{withSpring,visible,FOLDER_SPRING_PHYSICS,state,TransitionStates,runOnJS,cleanUp,fromTop,GUILD_ITEM_SIZE}=this.__closure;return{opacity:withSpring(visible.get(),FOLDER_SPRING_PHYSICS,undefined,function(finished){if(finished&&state===TransitionStates.YEETED)runOnJS(cleanUp)();}),transform:[{translateY:withSpring(visible.get()===1?0:fromTop?-GUILD_ITEM_SIZE:GUILD_ITEM_SIZE,FOLDER_SPRING_PHYSICS)},{scale:withSpring(visible.get()===1?1:fromTop?0.3:1.3,FOLDER_SPRING_PHYSICS)}]};}';
    var5['code'] = var9;
    var _closure1_slot21 = var5;
    var5 = {};
    var9 = 'function GuildsBarGuildFolderTsx3(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED)runOnJS(cleanUp)();}';
    var5['code'] = var9;
    var _closure1_slot22 = var5;
    var5 = {};
    var9 = 'function GuildsBarGuildFolderTsx4(values){const{dragDropInProgress,sharedId,id,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _id;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===""+id&&!isDragTarget;sharedId.set(""+((_id=id)!==null&&_id!==void 0?_id:null));return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,\'animate-always\'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,\'animate-always\'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}';
    var5['code'] = var9;
    var _closure1_slot23 = var5;
    var5 = var8.memo;
    var4 = function GuildsBarGuildFolder(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var13 = var1.id;
            var _closure2_slot0 = var13;
            var11 = var1.expanded;
            var _closure2_slot1 = var11;
            var15 = var1.name;
            var _closure2_slot2 = var15;
            var5 = var1.color;
            var _closure2_slot3 = var5;
            var12 = var1.childNodes;
            var _closure2_slot4 = var12;
            var6 = var1.isDragPreview;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0011_ip = 66; continue _fun0011 }
 64:
            var6 = false;
 66:
            var9 = var1.foldersChanged;
            var _closure2_slot5 = var9;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var1 = _closure1_slot18;
            var19 = var1.bind(var4)();
            _closure2_slot6 = var19;
            var36 = _closure1_slot0;
            var31 = _closure1_slot2;
            var1 = 13;
            var2 = var31[var1];
            var7 = var36.bind(var4)(var2);
            var2 = var7.useGuildsBarAnimatedWrapperStyles;
            var14 = true;
            var23 = false;
            var22 = var2.bind(var7)(var14, var23);
            var16 = 11;
            var2 = var31[var16];
            var17 = var36.bind(var4)(var2);
            var8 = var17.useStateFromStoresObject;
            var2 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var3 = _closure2_slot1;
                    if(var3) { _fun0012_ip = 74; continue _fun0012 }
 12:
                    var4 = _closure1_slot4;
                    var3 = var4.getMutableGuildStates;
                    var3 = var3.bind(var4)();
                    var _closure3_slot0 = var3;
                    var4 = _closure2_slot4;
                    var3 = var4.reduce;
                    var2 = function(arg1, arg2) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                            var1 = arg1;
                            var7 = arg2;
                            var3 = var7.id;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0013_ip = 200; continue _fun0013 }
 20:
                            var4 = _closure3_slot0;
                            var3 = var7.id;
                            var3 = var4[var3];
                            var4 = var2 == var3;
                            var5 = undefined;
                            if(var4) { _fun0013_ip = 51; continue _fun0013 }
 45:
                            var5 = var3.highImportanceMentionCount;
 51:
                            var9 = var2 != var5;
                            var4 = 0;
                            var3 = 0;
                            if(!var9) { _fun0013_ip = 65; continue _fun0013 }
 62:
                            var3 = var5;
 65:
                            var9 = _closure3_slot0;
                            var5 = var7.id;
                            var9 = var9[var5];
                            var10 = var2 == var9;
                            var5 = undefined;
                            if(var10) { _fun0013_ip = 93; continue _fun0013 }
 87:
                            var5 = var9.lowImportanceMentionCount;
 93:
                            var10 = var2 != var5;
                            var9 = 0;
                            if(!var10) { _fun0013_ip = 105; continue _fun0013 }
 102:
                            var9 = var5;
 105:
                            var5 = var1.mentionCount;
                            var5 = var5 + var3;
                            var5 = var5 + var9;
                            var1['mentionCount'] = var5;
                            var5 = var1.unread;
                            if(var5) { _fun0013_ip = 165; continue _fun0013 }
 134:
                            var8 = _closure3_slot0;
                            var7 = var7.id;
                            var7 = var8[var7];
                            var8 = var2 == var7;
                            var6 = undefined;
                            if(var8) { _fun0013_ip = 162; continue _fun0013 }
 156:
                            var6 = var7.unread;
 162:
                            var5 = var6;
 165:
                            var2 = var2 != var5;
                            if(!var2) { _fun0013_ip = 175; continue _fun0013 }
 172:
                            var2 = var5;
 175:
                            var1['unread'] = var2;
                            var2 = var1.isMentionLowImportance;
                            if(!var2) { _fun0013_ip = 194; continue _fun0013 }
 190:
                            var2 = var4 === var3;
 194:
                            var1['isMentionLowImportance'] = var2;
 200:
                            return var1;
                        }
                    };
                    var1 = {'unread': false, 'mentionCount': 0, 'isMentionLowImportance': true};
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
 74:
                    var1 = {'unread': false, 'mentionCount': 0, 'isMentionLowImportance': false};
                    return var1;
                }
            };
            var2 = var8.bind(var17)(var7, var2);
            var25 = var2.unread;
            var20 = var2.mentionCount;
            var18 = var2.isMentionLowImportance;
            var2 = var31[var16];
            var21 = var36.bind(var4)(var2);
            var17 = var21.useStateFromStoresObject;
            var2 = _closure1_slot6;
            var8 = new Array(2);
            var8[0] = var2;
            var2 = _closure1_slot7;
            var8[1] = var2;
            var7 = new Array(3);
            var7[0] = var11;
            var7[1] = var13;
            var7[2] = var12;
            var2 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = _closure1_slot6;
                    var1 = var2.getGuildId;
                    var8 = var1.bind(var2)();
                    var3 = _closure1_slot24;
                    var2 = _closure2_slot4;
                    var4 = undefined;
                    var10 = var3.bind(var4)(var2);
                    var3 = var10.bind(var4)();
                    var2 = var3.done;
                    var7 = 4;
                    var6 = var3;
                    var9 = 0;
                    var3 = undefined;
                    if(var2) { _fun0014_ip = 100; continue _fun0014 }
 57:
                    var2 = var6.value;
                    var2 = var2.id;
                    var3 = var8;
                    if(!(var2 !== var3)) { _fun0014_ip = 100; continue _fun0014 }
 74:
                    var9 = var9 + 1;
                    var3 = undefined;
                    if(!(!(var9 >= var7))) { _fun0014_ip = 100; continue _fun0014 }
 83:
                    var11 = var10.bind(var4)();
                    var2 = var11.done;
                    var6 = var11;
                    var3 = undefined;
                    if(!var2) { _fun0014_ip = 57; continue _fun0014 }
 100:
                    var6 = _closure2_slot1;
                    var2 = false;
                    if(var6) { _fun0014_ip = 168; continue _fun0014 }
 109:
                    var6 = null;
                    var7 = var6 != var8;
                    var2 = false;
                    if(!var7) { _fun0014_ip = 168; continue _fun0014 }
 120:
                    var7 = _closure1_slot7;
                    var5 = var7.getGuildsTree;
                    var7 = var5.bind(var7)();
                    var5 = var7.getNode;
                    var5 = var5.bind(var7)(var8);
                    var6 = var6 == var5;
                    var4 = undefined;
                    if(var6) { _fun0014_ip = 160; continue _fun0014 }
 154:
                    var4 = var5.parentId;
 160:
                    var1 = _closure2_slot0;
                    var2 = var4 === var1;
 168:
                    var1 = {};
                    var1['selectedPreviewId'] = var3;
                    var1['hasGuildSelected'] = var2;
                    return var1;
                }
            };
            var2 = var17.bind(var21)(var8, var2, var7);
            var8 = var2.selectedPreviewId;
            _closure2_slot7 = var8;
            var24 = var2.hasGuildSelected;
            var2 = _closure1_slot1;
            var7 = 21;
            var7 = var31[var7];
            var17 = var2.bind(var4)(var7);
            var7 = {};
            var7['mentionCount'] = var20;
            var7['isMentionLowImportance'] = var18;
            var17 = var17.bind(var4)(var7);
            var7 = var17.badge;
            var17 = var17.cutouts;
            var16 = var31[var16];
            var26 = var36.bind(var4)(var16);
            var21 = var26.useStateFromStores;
            var16 = _closure1_slot5;
            var20 = new Array(1);
            var20[0] = var16;
            var18 = new Array(2);
            var18[0] = var15;
            var18[1] = var12;
            var15 = 23;
            var15 = var31[var15];
            var37 = var2.bind(var4)(var15);
            var39 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var1 = _closure2_slot2;
                    var10 = null;
                    if(!(var10 == var1)) { _fun0015_ip = 182; continue _fun0015 }
 16:
                    var6 = new Array(0);
                    var3 = _closure1_slot24;
                    var1 = _closure2_slot4;
                    var7 = undefined;
                    var9 = var3.bind(var7)(var1);
                    var3 = var9.bind(var7)();
                    var1 = var3.done;
                    var5 = 3;
                    var8 = 0;
                    if(var1) { _fun0015_ip = 120; continue _fun0015 }
 55:
                    var1 = var3.value;
                    var12 = _closure1_slot5;
                    var11 = var12.getGuild;
                    var1 = var1.id;
                    var1 = var11.bind(var12)(var1);
                    if(!(var10 != var1)) { _fun0015_ip = 98; continue _fun0015 }
 83:
                    var11 = var6.push;
                    var1 = var1.name;
                    var1 = var11.bind(var6)(var1);
 98:
                    var8 = var8 + 1;
                    if(!(!(var8 >= var5))) { _fun0015_ip = 120; continue _fun0015 }
 105:
                    var11 = var9.bind(var7)();
                    var1 = var11.done;
                    var3 = var11;
                    if(!var1) { _fun0015_ip = 55; continue _fun0015 }
 120:
                    var1 = {};
                    var1['names'] = var6;
                    var3 = _closure2_slot4;
                    var5 = var3.length;
                    var1['count'] = var5;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 22;
                    var4 = var8[var4];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.getListSummaryLabel;
                    var3 = var3.length;
                    var3 = var4.bind(var5)(var6, var3);
                    var1['label'] = var3;
                    return var1;
 182:
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
            var41 = var26;
            var40 = var20;
            var38 = var18;
            var15 = var41[var21](var40, var39, var38, var37, var36);
            var21 = var15.label;
            var18 = _closure1_slot3;
            var16 = var18.useMemo;
            var15 = new Array(1);
            var15[0] = var5;
            var5 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 24;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.int2hex;
                    var6 = _closure2_slot3;
                    var5 = null;
                    if(!(var5 == var6)) { _fun0016_ip = 50; continue _fun0016 }
 44:
                    var1 = _closure1_slot15;
                    _fun0016_ip = 54; continue _fun0016;
 50:
                    var1 = _closure2_slot3;
 54:
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
            var5 = var16.bind(var18)(var5, var15);
            var20 = var5.tintStyle;
            _closure2_slot8 = var20;
            var5 = var5.folderPreviewStyle;
            _closure2_slot9 = var5;
            var18 = _closure1_slot3;
            var16 = var18.useMemo;
            var15 = new Array(2);
            var15[0] = var13;
            var15[1] = var9;
            var9 = function() {
                var1 = {};
                var2 = function onPress() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                        var3 = _closure2_slot5;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0017_ip = 147; continue _fun0017 }
 16:
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
                        if(!var3) { _fun0017_ip = 147; continue _fun0017 }
 68:
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
 147:
                        var8 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 25;
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
                        var3 = 26;
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
            var16 = var16.bind(var18)(var9, var15);
            var18 = _closure1_slot3;
            var15 = var18.useMemo;
            var9 = new Array(4);
            var9[0] = var11;
            var9[1] = var12;
            var9[2] = var20;
            var9[3] = var8;
            var8 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0018_ip = 147; continue _fun0018 }
 13:
                    var2 = new Array(0);
                    var4 = _closure1_slot24;
                    var3 = _closure2_slot4;
                    var7 = undefined;
                    var6 = var4.bind(var7)(var3);
                    var4 = var6.bind(var7)();
                    var3 = var4.done;
                    var5 = 4;
                    if(var3) { _fun0018_ip = 113; continue _fun0018 }
 50:
                    var3 = var4.value;
                    var10 = var3.type;
                    var9 = _closure1_slot8;
                    var9 = var9.GUILD;
                    if(!(var10 === var9)) { _fun0018_ip = 98; continue _fun0018 }
 74:
                    var9 = var2.push;
                    var3 = var3.id;
                    var3 = var9.bind(var2)(var3);
                    var3 = var2.length;
                    if(!(!(var3 >= var5))) { _fun0018_ip = 113; continue _fun0018 }
 98:
                    var9 = var6.bind(var7)();
                    var3 = var9.done;
                    var4 = var9;
                    if(!var3) { _fun0018_ip = 50; continue _fun0018 }
 113:
                    var3 = {};
                    var4 = 'preview';
                    var3['type'] = var4;
                    var3['guilds'] = var2;
                    var2 = _closure2_slot7;
                    var3['selectedGuildId'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    return var2;
 147:
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
            var9 = var15.bind(var18)(var8, var9);
            var18 = _closure1_slot3;
            var15 = var18.useCallback;
            var8 = new Array(3);
            var8[0] = var11;
            var19 = var19.guildPreviewWrapper;
            var8[1] = var19;
            var8[2] = var5;
            var5 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    var5 = _closure1_slot17;
                    var2 = _closure1_slot3;
                    var4 = var2.Fragment;
                    var3 = {};
                    var7 = _closure1_slot16;
                    var6 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 27;
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
                    if(var11) { _fun0019_ip = 81; continue _fun0019 }
 77:
                    var9 = _closure2_slot9;
 81:
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
            var8 = var15.bind(var18)(var5, var8);
            var5 = _closure1_slot9;
            var5 = var5.bind(var4)(var13, var6);
            var20 = var5.isDragTarget;
            _closure2_slot10 = var20;
            var19 = var5.dragState;
            var15 = var5.overState;
            var28 = var5.itemSize;
            var34 = var5.dragDropInProgress;
            _closure2_slot11 = var34;
            var27 = _closure1_slot3;
            var26 = var27.useMemo;
            var18 = new Array(1);
            var18[0] = var13;
            var5 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 28;
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
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
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
                        if(var1) { _fun0020_ip = 51; continue _fun0020 }
 42:
                        var3 = var2.action;
                        var1 = var4 == var3;
 51:
                        if(var1) { _fun0020_ip = 63; continue _fun0020 }
 54:
                        var1 = var2.action;
                        var1 = var1.bind(var2)();
 63:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onAccessibilityAction'] = var2;
                return var1;
            };
            var5 = var26.bind(var27)(var5, var18);
            var27 = var5.accessibilityActions;
            var26 = var5.onAccessibilityAction;
            var5 = 17;
            var5 = var31[var5];
            var32 = var36.bind(var4)(var5);
            var18 = var32.useSharedValue;
            var29 = global;
            var5 = var29.HermesInternal;
            var5 = var5.concat;
            var30 = '';
            var5 = var5.bind(var30)(var13);
            var18 = var18.bind(var32)(var5);
            _closure2_slot12 = var18;
            var33 = _closure1_slot3;
            var32 = var33.useCallback;
            var5 = function _(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure2_slot11;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    if(!var4) { _fun0021_ip = 65; continue _fun0021 }
 22:
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
 65:
                    if(!var4) { _fun0021_ip = 75; continue _fun0021 }
 68:
                    var2 = _closure2_slot10;
                    var4 = !var2;
 75:
                    var5 = _closure2_slot12;
                    var2 = var5.set;
                    var6 = _closure2_slot0;
                    var7 = null;
                    var6 = var7 != var6;
                    if(!var6) { _fun0021_ip = 101; continue _fun0021 }
 97:
                    var7 = _closure2_slot0;
 101:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var1 = '';
                    var1 = var6.bind(var1)(var7);
                    var1 = var2.bind(var5)(var1);
                    var1 = {};
                    var2 = {};
                    if(var4) { _fun0021_ip = 143; continue _fun0021 }
 135:
                    var5 = var3.targetOriginY;
                    _fun0021_ip = 196; continue _fun0021;
 143:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var7 = 15;
                    var8 = var8[var7];
                    var7 = undefined;
                    var10 = var9.bind(var7)(var8);
                    var9 = var10.withSpring;
                    var8 = var3.targetOriginY;
                    var7 = _closure1_slot13;
                    var6 = 'animate-always';
                    var5 = var9.bind(var10)(var8, var7, var6);
 196:
                    var2['originY'] = var5;
                    if(var4) { _fun0021_ip = 212; continue _fun0021 }
 204:
                    var4 = var3.targetHeight;
                    _fun0021_ip = 265; continue _fun0021;
 212:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var6 = 15;
                    var7 = var7[var6];
                    var6 = undefined;
                    var9 = var8.bind(var6)(var7);
                    var8 = var9.withSpring;
                    var7 = var3.targetHeight;
                    var6 = _closure1_slot13;
                    var5 = 'animate-always';
                    var4 = var8.bind(var9)(var7, var6, var5);
 265:
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
            var3['sharedId'] = var18;
            var3['id'] = var13;
            var3['isDragTarget'] = var20;
            var35 = 15;
            var35 = var31[var35];
            var35 = var36.bind(var4)(var35);
            var35 = var35.withSpring;
            var3['withSpring'] = var35;
            var35 = _closure1_slot13;
            var3['TRANSITION_PHYSICS'] = var35;
            var5['__closure'] = var3;
            var3 = 11967845900199.0;
            var5['__workletHash'] = var3;
            var3 = _closure1_slot23;
            var5['__initData'] = var3;
            var3 = new Array(4);
            var3[0] = var13;
            var3[1] = var18;
            var3[2] = var20;
            var3[3] = var34;
            var5 = var32.bind(var33)(var5, var3);
            var3 = _closure1_slot16;
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
            var24 = !var11;
            if(!var24) { _fun0011_ip = 916; continue _fun0011 }
 913:
            var24 = var25;
 916:
            var1['unread'] = var24;
            var1['circle'] = var23;
            var1['styles'] = var22;
            var1['label'] = var21;
            var1['isDragTarget'] = var20;
            var1['dragState'] = var19;
            var1['sharedId'] = var18;
            var1['cutouts'] = var17;
            var1['config'] = var16;
            var1['isDragPreview'] = var6;
            var1['overState'] = var15;
            var1['preventClipping'] = var14;
            var1['layout'] = var5;
            var5 = var7;
            if(!var11) { _fun0011_ip = 1022; continue _fun0011 }
 985:
            var5 = var7;
            if(var6) { _fun0011_ip = 1022; continue _fun0011 }
 991:
            var11 = _closure1_slot16;
            var7 = _closure1_slot20;
            var6 = {};
            var6['folderId'] = var13;
            var12 = var12.length;
            var6['totalItems'] = var12;
            var5 = var11.bind(var4)(var7, var6);
 1022:
            var1['externalChildren'] = var5;
            var7 = _closure1_slot16;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 18;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.TransitionGroup;
            var5 = {};
            var11 = _closure1_slot29;
            var5['renderItem'] = var11;
            var10 = _closure1_slot28;
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
    var5 = 29;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guilds_bar/native/GuildsBarGuildFolder.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['GuildsBarGuildFolderBG'] = var2;
    return var1;
})();