// app/modules/icymi/native/custom_scores/ICYMICustomScoresGuildScreen.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
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
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot16;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot16;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
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
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var _closure1_slot16 = var1;
    var1 = function ICYMICustomScoreChannelRow(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var3 = var2.channelId;
            var _closure2_slot0 = var3;
            var12 = var2.start;
            var9 = var2.end;
            var13 = var2.disabled;
            var2 = _closure1_slot14;
            var5 = undefined;
            var17 = var2.bind(var5)();
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 11;
            var3 = var6[var2];
            var11 = var4.bind(var5)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18 = var10.bind(var11)(var8, var3);
            var _closure2_slot1 = var18;
            var2 = var6[var2];
            var10 = var4.bind(var5)(var2);
            var8 = var10.useStateFromStores;
            var2 = _closure1_slot10;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = _closure1_slot9;
            var3[1] = var2;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0005_ip = 162; continue _fun0005 }
 16:
                    var6 = _closure1_slot10;
                    var5 = var6.getCustomChannelScore;
                    var1 = _closure2_slot1;
                    var4 = var1.guild_id;
                    var1 = var1.id;
                    var1 = var5.bind(var6)(var4, var1);
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var6 = 12;
                    var4 = var4[var6];
                    var5 = undefined;
                    var4 = var7.bind(var5)(var4);
                    var4 = var4.ICYMICustomScore;
                    var4 = var4.UNKNOWN;
                    if(!(var1 === var4)) { _fun0005_ip = 160; continue _fun0005 }
 87:
                    var8 = _closure1_slot9;
                    var7 = var8.isChannelMuted;
                    var2 = _closure2_slot1;
                    var4 = var2.guild_id;
                    var2 = var2.id;
                    var2 = var7.bind(var8)(var4, var2);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.ICYMICustomScore;
                    if(var2) { _fun0005_ip = 151; continue _fun0005 }
 143:
                    var2 = var3.DEFAULT;
                    _fun0005_ip = 157; continue _fun0005;
 151:
                    var2 = var3.MUTED;
 157:
                    var1 = var2;
 160:
                    return var1;
 162:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.ICYMICustomScore;
                    var1 = var1.DEFAULT;
                    return var1;
                }
            };
            var2 = var8.bind(var10)(var3, var2);
            var _closure2_slot2 = var2;
            var3 = 12;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.ICYMICustomScore;
            var3 = var3.MUTED;
            var8 = var2 === var3;
            var _closure2_slot3 = var8;
            var6 = _closure1_slot4;
            var4 = var6.useMemo;
            var3 = new Array(2);
            var3[0] = var8;
            var3[1] = var2;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot3;
                    if(var3) { _fun0006_ip = 269; continue _fun0006 }
 16:
                    var4 = _closure2_slot2;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var5 = 12;
                    var3 = var3[var5];
                    var7 = undefined;
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.ICYMICustomScore;
                    var3 = var3.MORE;
                    if(!(var4 !== var3)) { _fun0006_ip = 212; continue _fun0006 }
 61:
                    var3 = _closure2_slot2;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var5];
                    var1 = var4.bind(var7)(var1);
                    var1 = var1.ICYMICustomScore;
                    var1 = var1.LESS;
                    if(!(var3 !== var1)) { _fun0006_ip = 155; continue _fun0006 }
 98:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 13;
                    var3 = var6[var1];
                    var3 = var5.bind(var7)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var7)(var1);
                    var1 = var1.t;
                    var1 = var1.SnrG09;
                    var1 = var3.bind(var4)(var1);
                    _fun0006_ip = 210; continue _fun0006;
 155:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 13;
                    var4 = var8[var3];
                    var4 = var6.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.t;
                    var3 = var3.rdt65O;
                    var1 = var4.bind(var5)(var3);
 210:
                    _fun0006_ip = 267; continue _fun0006;
 212:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 13;
                    var4 = var8[var3];
                    var4 = var6.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.t;
                    var3 = var3.Rxe3jI;
                    var1 = var4.bind(var5)(var3);
 267:
                    _fun0006_ip = 326; continue _fun0006;
 269:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 13;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.lhPHm5;
                    var1 = var3.bind(var4)(var2);
 326:
                    return var1;
                }
            };
            var10 = var4.bind(var6)(var2, var3);
            var4 = _closure1_slot4;
            var3 = var4.useCallback;
            var2 = new Array(1);
            var2[0] = var18;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 115; continue _fun0007 }
 13:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 14;
                    var4 = var2[var4];
                    var7 = undefined;
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.openLazy;
                    var6 = _closure1_slot0;
                    var3 = 16;
                    var3 = var2[var3];
                    var6 = var6.bind(var7)(var3);
                    var3 = 15;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var6.bind(var7)(var3, var2);
                    var2 = {};
                    var1 = _closure2_slot1;
                    var6 = var1.guild_id;
                    var2['guildId'] = var6;
                    var1 = var1.id;
                    var2['channelId'] = var1;
                    var1 = 'ItemDetailsActionSheet';
                    var1 = var4.bind(var5)(var3, var1, var2);
 115:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var3.bind(var4)(var1, var2);
            var1 = null;
            if(!(var1 != var18)) { _fun0004_ip = 650; continue _fun0004 }
 252:
            var21 = _closure1_slot0;
            var19 = _closure1_slot2;
            var2 = 17;
            var2 = var19[var2];
            var3 = var21.bind(var5)(var2);
            var2 = var3.getChannelIcon;
            var16 = var2.bind(var3)(var18);
            var4 = _closure1_slot11;
            var11 = 18;
            var2 = var19[var11];
            var2 = var21.bind(var5)(var2);
            var3 = var2.TableRow;
            var2 = {};
            var14 = true;
            var2['arrow'] = var14;
            var2['disabled'] = var13;
            var15 = _closure1_slot11;
            var14 = _closure1_slot1;
            var20 = 19;
            var13 = var19[var20];
            var14 = var14.bind(var5)(var13);
            var13 = {};
            var19 = var19[var20];
            var19 = var21.bind(var5)(var19);
            var19 = var19.IconSizes;
            var19 = var19.SMALL;
            var13['size'] = var19;
            var13['source'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var2['icon'] = var13;
            var2['start'] = var12;
            var2['end'] = var9;
            var9 = 1;
            var2['labelLineClamp'] = var9;
            if(var8) { _fun0004_ip = 408; continue _fun0004 }
 398:
            var8 = var18.name;
            _fun0004_ip = 584; continue _fun0004;
 408:
            var13 = _closure1_slot12;
            var12 = _closure1_slot5;
            var9 = {};
            var14 = var17.channelNameContainer;
            var9['style'] = var14;
            var16 = _closure1_slot11;
            var21 = _closure1_slot1;
            var19 = _closure1_slot2;
            var14 = var19[var20];
            var15 = var21.bind(var5)(var14);
            var14 = {};
            var22 = 20;
            var22 = var19[var22];
            var22 = var21.bind(var5)(var22);
            var14['source'] = var22;
            var20 = var19[var20];
            var20 = var21.bind(var5)(var20);
            var20 = var20.Sizes;
            var20 = var20.SMALL;
            var14['size'] = var20;
            var17 = var17.channelMutedIcon;
            var14['style'] = var17;
            var15 = var16.bind(var5)(var15, var14);
            var14 = new Array(2);
            var14[0] = var15;
            var17 = _closure1_slot11;
            var16 = _closure1_slot0;
            var15 = 21;
            var15 = var19[var15];
            var15 = var16.bind(var5)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-md/semibold', 'color': 'header-primary', 'lineClamp': 1};
            var18 = var18.name;
            var15['children'] = var18;
            var15 = var17.bind(var5)(var16, var15);
            var14[1] = var15;
            var9['children'] = var14;
            var8 = var13.bind(var5)(var12, var9);
 584:
            var2['label'] = var8;
            var9 = _closure1_slot11;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var11];
            var7 = var8.bind(var5)(var7);
            var7 = var7.TableRow;
            var8 = var7.TrailingText;
            var7 = {};
            var7['text'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var2['trailing'] = var7;
            var2['onPress'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 650:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function keyExtractor(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var3 = arg1;
            var2 = var3.kind;
            var1 = 'header';
            if(!(var1 !== var2)) { _fun0008_ip = 132; continue _fun0008 }
 16:
            var4 = var3.kind;
            var2 = 'categoryHeader';
            if(!(var2 !== var4)) { _fun0008_ip = 100; continue _fun0008 }
 29:
            var4 = var3.kind;
            var2 = 'channel';
            if(!(var2 !== var4)) { _fun0008_ip = 69; continue _fun0008 }
 42:
            var2 = global;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var4 = '';
            var2 = arg2;
            var2 = var5.bind(var4)(var2);
            _fun0008_ip = 98; continue _fun0008;
 69:
            var6 = var3.channelId;
            var4 = global;
            var4 = var4.HermesInternal;
            var5 = var4.concat;
            var4 = 'channel-';
            var2 = var5.bind(var4)(var6);
 98:
            _fun0008_ip = 129; continue _fun0008;
 100:
            var5 = var3.index;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = 'categoryHeader-';
            var2 = var4.bind(var3)(var5);
 129:
            var1 = var2;
 132:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var7 = var6[var10];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var7 = var4.jsxs;
    var _closure1_slot12 = var7;
    var4 = var4.Fragment;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var10 = 10;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_BASE_PRIMARY;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9['paddingHorizontal'] = var12;
    var4['container'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_32;
    var9['marginBottom'] = var12;
    var4['guildHeader'] = var9;
    var9 = {'paddingTop': null, 'paddingBottom': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['paddingTop'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['paddingBottom'] = var12;
    var13 = 'row';
    var12 = 'center';
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var9['gap'] = var14;
    var4['categoryHeader'] = var9;
    var9 = {};
    var9['flexDirection'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var9['gap'] = var13;
    var4['channelNameContainer'] = var9;
    var9 = {};
    var9['alignSelf'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_MUTED;
    var9['tintColor'] = var10;
    var4['channelMutedIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/custom_scores/ICYMICustomScoresGuildScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ICYMICustomScoresGuildScreen(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var2 = arg1;
            var3 = var2.navigation;
            var _closure2_slot0 = var3;
            var2 = var2.route;
            var2 = var2.params;
            var2 = var2.guildId;
            var _closure2_slot1 = var2;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var2 = _closure1_slot14;
            var5 = var2.bind(var4)();
            var _closure2_slot2 = var5;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 11;
            var6 = var6[var2];
            var10 = var7.bind(var4)(var6);
            var9 = var10.useStateFromStores;
            var6 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getGuild;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var9.bind(var10)(var7, var6);
            var _closure2_slot3 = var10;
            var9 = _closure1_slot4;
            var7 = var9.useEffect;
            var6 = new Array(2);
            var6[0] = var3;
            var3 = null;
            var11 = var3 == var10;
            var3 = undefined;
            if(var11) { _fun0009_ip = 152; continue _fun0009 }
 147:
            var3 = var10.name;
 152:
            var6[1] = var3;
            var3 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var4 = _closure2_slot0;
                    var3 = var4.setOptions;
                    var2 = {};
                    var1 = _closure2_slot3;
                    var5 = null;
                    var8 = var5 == var1;
                    var1 = undefined;
                    var6 = undefined;
                    if(var8) { _fun0010_ip = 41; continue _fun0010 }
 32:
                    var7 = _closure2_slot3;
                    var6 = var7.name;
 41:
                    var7 = var5 != var6;
                    var5 = '';
                    if(!var7) { _fun0010_ip = 55; continue _fun0010 }
 52:
                    var5 = var6;
 55:
                    var2['title'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3 = var7.bind(var9)(var3, var6);
            var6 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = var15[var2];
            var11 = var6.bind(var4)(var3);
            var9 = var11.useStateFromStores;
            var3 = _closure1_slot10;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getCustomGuildScore;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var9.bind(var11)(var7, var3);
            var3 = 12;
            var3 = var15[var3];
            var7 = var6.bind(var4)(var3);
            var3 = var7.numberToCustomScore;
            var12 = var3.bind(var7)(var9);
            _closure2_slot4 = var12;
            var2 = var15[var2];
            var9 = var6.bind(var4)(var2);
            var7 = var9.useStateFromStoresObject;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var7.bind(var9)(var3, var2);
            var11 = var2.guildChannels;
            _closure2_slot5 = var11;
            var2 = 22;
            var2 = var15[var2];
            var7 = var6.bind(var4)(var2);
            var3 = var7.useICYMIForumThreadsEnabled;
            var2 = 'customScoresGuildScreen';
            var2 = var3.bind(var7)(var2);
            _closure2_slot6 = var2;
            var9 = _closure1_slot4;
            var7 = var9.useMemo;
            var3 = new Array(3);
            var3[0] = var12;
            var3[1] = var11;
            var3[2] = var2;
            var2 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = new Array(0);
                    var3 = var1.push;
                    var2 = {};
                    var4 = 'header';
                    var2['kind'] = var4;
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure1_slot15;
                    var5 = _closure2_slot5;
                    var4 = var5.getSections;
                    var2 = false;
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.entries;
                    var2 = var2.bind(var4)();
                    var22 = undefined;
                    var21 = var3.bind(var22)(var2);
                    var5 = var21.bind(var22)();
                    var2 = var5.done;
                    var20 = 'categoryHeader';
                    var19 = 2;
                    var18 = 0;
                    var3 = 1;
                    var4 = 'channel';
                    var17 = 12;
                    var16 = 13;
                    var15 = null;
                    var14 = '';
                    var13 = 23;
                    var12 = var5;
                    var11 = undefined;
                    var10 = undefined;
                    var9 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    if(var2) { _fun0011_ip = 978; continue _fun0011 }
 133:
                    var26 = var12.value;
                    var2 = _closure1_slot3;
                    var2 = var2.bind(var22)(var26, var19);
                    var34 = var2[var18];
                    var2 = var2[var3];
                    var32 = var11;
                    var31 = var10;
                    var30 = var9;
                    var29 = var8;
                    var28 = var7;
                    var27 = var6;
                    var26 = var5;
                    if(!(var18 !== var2)) { _fun0011_ip = 939; continue _fun0011 }
 184:
                    var33 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var13];
                    var2 = var33.bind(var22)(var2);
                    var2 = var2.SECTION_INDEX_GUILD_ACTIONS;
                    var32 = var11;
                    var31 = var10;
                    var30 = var9;
                    var29 = var8;
                    var28 = var7;
                    var27 = var6;
                    var26 = var5;
                    if(!(var34 !== var2)) { _fun0011_ip = 939; continue _fun0011 }
 235:
                    var2 = _closure2_slot5;
                    var2 = var2.voiceChannelsSectionNumber;
                    var32 = var11;
                    var31 = var10;
                    var30 = var9;
                    var29 = var8;
                    var28 = var7;
                    var27 = var6;
                    var26 = var5;
                    if(!(var34 !== var2)) { _fun0011_ip = 939; continue _fun0011 }
 273:
                    var33 = _closure2_slot5;
                    var2 = var33.getCategoryFromSection;
                    var39 = var2.bind(var33)(var34);
                    var2 = var15 == var39;
                    var38 = undefined;
                    if(var2) { _fun0011_ip = 324; continue _fun0011 }
 297:
                    var2 = var39.getChannelRecords;
                    var35 = var2.bind(var39)();
                    var33 = var35.filter;
                    var2 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.isChannelCustomScoreEligible;
                        var2 = _closure2_slot6;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var38 = var33.bind(var35)(var2);
 324:
                    var32 = var39;
                    var31 = var38;
                    var30 = var9;
                    var29 = var8;
                    var28 = var7;
                    var27 = var6;
                    var26 = var5;
                    if(!(var15 != var38)) { _fun0011_ip = 939; continue _fun0011 }
 352:
                    var2 = var38.length;
                    var32 = var39;
                    var31 = var38;
                    var30 = var9;
                    var29 = var8;
                    var28 = var7;
                    var27 = var6;
                    var26 = var5;
                    if(!(var18 !== var2)) { _fun0011_ip = 939; continue _fun0011 }
 385:
                    var35 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var33 = var2[var16];
                    var33 = var35.bind(var22)(var33);
                    var37 = var33.intl;
                    var36 = var37.string;
                    var33 = var2[var16];
                    var33 = var35.bind(var22)(var33);
                    var33 = var33.t;
                    var33 = var33.GSfOoq;
                    var33 = var36.bind(var37)(var33);
                    var2 = var2[var13];
                    var2 = var35.bind(var22)(var2);
                    var2 = var2.SECTION_INDEX_FAVORITES;
                    if(!(var34 !== var2)) { _fun0011_ip = 646; continue _fun0011 }
 459:
                    var35 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var13];
                    var2 = var35.bind(var22)(var2);
                    var2 = var2.SECTION_INDEX_RECENTS;
                    if(!(var34 !== var2)) { _fun0011_ip = 584; continue _fun0011 }
 486:
                    var35 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var13];
                    var2 = var35.bind(var22)(var2);
                    var2 = var2.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                    var37 = var33;
                    var36 = var8;
                    var35 = var7;
                    if(!(var34 >= var2)) { _fun0011_ip = 704; continue _fun0011 }
 525:
                    var33 = _closure2_slot5;
                    var2 = var33.getNamedCategoryFromSection;
                    var2 = var2.bind(var33)(var34);
                    var40 = var15 == var2;
                    var33 = undefined;
                    if(var40) { _fun0011_ip = 560; continue _fun0011 }
 549:
                    var40 = var2.record;
                    var33 = var40.name;
 560:
                    var41 = var15 != var33;
                    var40 = var14;
                    if(!var41) { _fun0011_ip = 573; continue _fun0011 }
 570:
                    var40 = var33;
 573:
                    var37 = var40;
                    var36 = var33;
                    var35 = var2;
                    _fun0011_ip = 704; continue _fun0011;
 584:
                    var41 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var33 = var2[var16];
                    var33 = var41.bind(var22)(var33);
                    var40 = var33.intl;
                    var33 = var40.string;
                    var2 = var2[var16];
                    var2 = var41.bind(var22)(var2);
                    var2 = var2.t;
                    var2 = var2.gKcrqK;
                    var37 = var33.bind(var40)(var2);
                    var36 = var8;
                    var35 = var7;
                    _fun0011_ip = 704; continue _fun0011;
 646:
                    var41 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var33 = var2[var16];
                    var33 = var41.bind(var22)(var33);
                    var40 = var33.intl;
                    var33 = var40.string;
                    var2 = var2[var16];
                    var2 = var41.bind(var22)(var2);
                    var2 = var2.t;
                    var2 = var2.k8fFjo;
                    var37 = var33.bind(var40)(var2);
                    var36 = var8;
                    var35 = var7;
 704:
                    var33 = var1.push;
                    var2 = {};
                    var2['kind'] = var20;
                    var2['index'] = var34;
                    var2['title'] = var37;
                    var2 = var33.bind(var1)(var2);
                    var33 = _closure1_slot15;
                    var2 = var38.entries;
                    var2 = var2.bind(var38)();
                    var34 = var33.bind(var22)(var2);
                    var40 = var34.bind(var22)();
                    var2 = var40.done;
                    var33 = var40;
                    var32 = var39;
                    var31 = var38;
                    var30 = var37;
                    var29 = var36;
                    var28 = var35;
                    var27 = var33;
                    var26 = var34;
                    if(var2) { _fun0011_ip = 939; continue _fun0011 }
 786:
                    var40 = var33.value;
                    var2 = _closure1_slot3;
                    var2 = var2.bind(var22)(var40, var19);
                    var42 = var2[var18];
                    var41 = var2[var3];
                    var40 = var1.push;
                    var2 = {};
                    var2['kind'] = var4;
                    var41 = var41.id;
                    var2['channelId'] = var41;
                    var41 = var18 === var42;
                    var2['start'] = var41;
                    var41 = var38.length;
                    var41 = var41 - var3;
                    var41 = var42 === var41;
                    var2['end'] = var41;
                    var42 = _closure2_slot4;
                    var43 = _closure1_slot0;
                    var41 = _closure1_slot2;
                    var41 = var41[var17];
                    var41 = var43.bind(var22)(var41);
                    var41 = var41.ICYMICustomScore;
                    var41 = var41.MUTED;
                    var41 = var42 === var41;
                    var2['disabled'] = var41;
                    var2 = var40.bind(var1)(var2);
                    var40 = var34.bind(var22)();
                    var2 = var40.done;
                    var33 = var40;
                    var32 = var39;
                    var31 = var38;
                    var30 = var37;
                    var29 = var36;
                    var28 = var35;
                    var27 = var33;
                    var26 = var34;
                    if(!var2) { _fun0011_ip = 786; continue _fun0011 }
 939:
                    var33 = var21.bind(var22)();
                    var2 = var33.done;
                    var11 = var32;
                    var10 = var31;
                    var9 = var30;
                    var8 = var29;
                    var7 = var28;
                    var6 = var27;
                    var5 = var26;
                    var12 = var33;
                    if(!var2) { _fun0011_ip = 133; continue _fun0011 }
 978:
                    var2 = var1.length;
                    var2 = var2 - var3;
                    var3 = var1[var2];
                    var2 = var3.kind;
                    if(!(var4 === var2)) { _fun0011_ip = 1008; continue _fun0011 }
 1000:
                    var2 = true;
                    var3['end'] = var2;
 1008:
                    return var1;
                }
            };
            var9 = var7.bind(var9)(var2, var3);
            var14 = _closure1_slot1;
            var2 = 24;
            var2 = var15[var2];
            var2 = var14.bind(var4)(var2);
            var11 = var2.bind(var4)();
            var2 = 25;
            var2 = var15[var2];
            var2 = var14.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var13 = var2.bottom;
            var7 = _closure1_slot4;
            var3 = var7.useCallback;
            var2 = new Array(3);
            var2[0] = var10;
            var10 = var5.categoryHeader;
            var2[1] = var10;
            var10 = var5.guildHeader;
            var2[2] = var10;
            var1 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = arg1;
                    var10 = var1.item;
                    var2 = var10.kind;
                    var1 = 'header';
                    if(!(var1 !== var2)) { _fun0012_ip = 300; continue _fun0012 }
 24:
                    var2 = var10.kind;
                    var1 = 'categoryHeader';
                    if(!(var1 !== var2)) { _fun0012_ip = 114; continue _fun0012 }
 37:
                    var3 = var10.kind;
                    var2 = 'channel';
                    var1 = null;
                    if(!(var2 === var3)) { _fun0012_ip = 109; continue _fun0012 }
 52:
                    var5 = _closure1_slot11;
                    var4 = _closure1_slot17;
                    var3 = {};
                    var2 = var10.disabled;
                    var3['disabled'] = var2;
                    var2 = var10.channelId;
                    var3['channelId'] = var2;
                    var2 = var10.start;
                    var3['start'] = var2;
                    var2 = var10.end;
                    var3['end'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
 109:
                    _fun0012_ip = 295; continue _fun0012;
 114:
                    var5 = _closure1_slot12;
                    var4 = _closure1_slot5;
                    var3 = {};
                    var2 = _closure2_slot2;
                    var2 = var2.categoryHeader;
                    var3['style'] = var2;
                    var12 = _closure1_slot11;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = 27;
                    var6 = var11[var2];
                    var2 = undefined;
                    var6 = var8.bind(var2)(var6);
                    var9 = var6.ChevronSmallDownIcon;
                    var6 = {};
                    var13 = 'xs';
                    var6['size'] = var13;
                    var14 = _closure1_slot1;
                    var13 = 10;
                    var13 = var11[var13];
                    var13 = var14.bind(var2)(var13);
                    var13 = var13.colors;
                    var13 = var13.HEADER_SECONDARY;
                    var6['color'] = var13;
                    var9 = var12.bind(var2)(var9, var6);
                    var6 = new Array(2);
                    var6[0] = var9;
                    var9 = _closure1_slot11;
                    var7 = 21;
                    var7 = var11[var7];
                    var7 = var8.bind(var2)(var7);
                    var8 = var7.Text;
                    var7 = {'variant': 'text-sm/semibold', 'color': 'header-secondary'};
                    var10 = var10.title;
                    var7['children'] = var10;
                    var7 = var9.bind(var2)(var8, var7);
                    var6[1] = var7;
                    var3['children'] = var6;
                    var1 = var5.bind(var2)(var4, var3);
 295:
                    _fun0012_ip = 659; continue _fun0012;
 300:
                    var3 = _closure2_slot3;
                    var2 = null;
                    var3 = var2 != var3;
                    if(!var3) { _fun0012_ip = 656; continue _fun0012 }
 319:
                    var6 = _closure1_slot12;
                    var5 = _closure1_slot13;
                    var4 = {};
                    var9 = _closure1_slot11;
                    var8 = _closure1_slot5;
                    var7 = {};
                    var3 = _closure2_slot2;
                    var3 = var3.guildHeader;
                    var7['style'] = var3;
                    var12 = _closure1_slot11;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var3 = 26;
                    var10 = var15[var3];
                    var3 = undefined;
                    var10 = var14.bind(var3)(var10);
                    var11 = var10.GuildScoreSettings;
                    var10 = {};
                    var16 = _closure2_slot3;
                    var10['guild'] = var16;
                    var10 = var12.bind(var3)(var11, var10);
                    var7['children'] = var10;
                    var8 = var9.bind(var3)(var8, var7);
                    var7 = new Array(3);
                    var7[0] = var8;
                    var12 = _closure1_slot11;
                    var8 = 21;
                    var9 = var15[var8];
                    var9 = var14.bind(var3)(var9);
                    var10 = var9.Text;
                    var9 = {'variant': 'text-sm/semibold', 'color': 'header-secondary'};
                    var11 = 13;
                    var16 = var15[var11];
                    var16 = var14.bind(var3)(var16);
                    var18 = var16.intl;
                    var17 = var18.string;
                    var16 = var15[var11];
                    var16 = var14.bind(var3)(var16);
                    var16 = var16.t;
                    var16 = var16.0jRosr;
                    var16 = var17.bind(var18)(var16);
                    var9['children'] = var16;
                    var9 = var12.bind(var3)(var10, var9);
                    var7[1] = var9;
                    var10 = _closure1_slot11;
                    var8 = var15[var8];
                    var8 = var14.bind(var3)(var8);
                    var9 = var8.Text;
                    var8 = {'variant': 'text-xs/normal', 'color': 'header-secondary'};
                    var12 = {};
                    var16 = _closure1_slot1;
                    var13 = 10;
                    var13 = var15[var13];
                    var13 = var16.bind(var3)(var13);
                    var13 = var13.spacing;
                    var13 = var13.PX_16;
                    var12['marginBottom'] = var13;
                    var8['style'] = var12;
                    var12 = var15[var11];
                    var12 = var14.bind(var3)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var11 = var15[var11];
                    var11 = var14.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11.l52PX1;
                    var11 = var12.bind(var13)(var11);
                    var8['children'] = var11;
                    var8 = var10.bind(var3)(var9, var8);
                    var7[2] = var8;
                    var4['children'] = var7;
                    var2 = var6.bind(var3)(var5, var4);
 656:
                    var1 = var2;
 659:
                    return var1;
                }
            };
            var10 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var5.container;
            var1['style'] = var5;
            var7 = _closure1_slot11;
            var5 = 28;
            var5 = var15[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.AnimatedFlashList;
            var5 = {};
            var12 = {};
            var12['bottom'] = var13;
            var13 = 10;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.spacing;
            var13 = var13.PX_12;
            var12['top'] = var13;
            var5['contentInset'] = var12;
            var5['estimatedItemSize'] = var11;
            var11 = false;
            var5['showsVerticalScrollIndicator'] = var11;
            var5['renderItem'] = var10;
            var5['data'] = var9;
            var8 = _closure1_slot18;
            var5['keyExtractor'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();