// app/modules/icymi/native/ICYMIGeneratedCandidateRow.tsx
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
            var9 = _closure1_slot14;
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
            var7 = _closure1_slot14;
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
    var _closure1_slot13 = var1;
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
    var _closure1_slot14 = var1;
    var1 = function FacePile(arg1) {
        var2 = arg1;
        var14 = var2.authors;
        var6 = var2.guildId;
        var _closure2_slot0 = var6;
        var2 = _closure1_slot12;
        var4 = undefined;
        var11 = var2.bind(var4)();
        var5 = _closure1_slot3;
        var3 = var5.useCallback;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var9 = arg1;
                var1 = null;
                var2 = var1 == var9;
                if(var2) { _fun0004_ip = 93; continue _fun0004 }
 12:
                var5 = _closure1_slot10;
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 10;
                var2 = var8[var6];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2['user'] = var9;
                var9 = _closure2_slot0;
                var2['guildId'] = var9;
                var7 = _closure1_slot0;
                var6 = var8[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.AvatarSizes;
                var6 = var6.SMALL;
                var2['size'] = var6;
                var1 = var5.bind(var4)(var3, var2);
 93:
                return var1;
            }
        };
        var12 = var3.bind(var5)(var1, var2);
        var3 = _closure1_slot10;
        var2 = _closure1_slot5;
        var1 = {};
        var5 = var11.facepileContainer;
        var1['style'] = var5;
        var7 = _closure1_slot10;
        var13 = _closure1_slot1;
        var10 = _closure1_slot2;
        var8 = 11;
        var5 = var10[var8];
        var6 = var13.bind(var4)(var5);
        var5 = {};
        var5['items'] = var14;
        var14 = 5;
        var5['max'] = var14;
        var5['renderItem'] = var12;
        var12 = 9;
        var12 = var10[var12];
        var12 = var13.bind(var4)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_4;
        var12 = -var12;
        var5['offsetAmount'] = var12;
        var11 = var11.iconWrapper;
        var5['iconWrapperStyle'] = var11;
        var9 = _closure1_slot0;
        var8 = var10[var8];
        var8 = var9.bind(var4)(var8);
        var8 = var8.OverflowCircle;
        var5['overflowComponent'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var4 = 0;
    var8 = var6[var4];
    var7 = native4;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot3 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useMemo;
    var _closure1_slot4 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var14 = 2;
    var4 = var6[var14];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
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
    var4 = var5.bind(var1)(var4);
    var15 = var4.ICYMI_MARGIN;
    var13 = var4.MESSAGE_CONTENT_INSET;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var12;
    var9['paddingLeft'] = var13;
    var4['outerContainer'] = var9;
    var9 = {};
    var9['marginHorizontal'] = var15;
    var9['marginBottom'] = var15;
    var4['container'] = var9;
    var9 = {};
    var10 = 9;
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BG_SURFACE_OVERLAY_TMP;
    var9['backgroundColor'] = var16;
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var9['borderRadius'] = var16;
    var9['padding'] = var15;
    var9['gap'] = var15;
    var4['card'] = var9;
    var9 = {};
    var15 = 'flex-end';
    var9['justifyContent'] = var15;
    var9['paddingLeft'] = var13;
    var4['footer'] = var9;
    var13 = 'row';
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    var4['header'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var9['gap'] = var15;
    var4['title'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 6};
    var4['timestamp'] = var9;
    var9 = {};
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var9['marginTop'] = var15;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var9['marginBottom'] = var15;
    var4['secondaryText'] = var9;
    var9 = {};
    var9['borderWidth'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_BASE_PRIMARY;
    var9['borderColor'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_BASE_PRIMARY;
    var9['backgroundColor'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var9['borderRadius'] = var14;
    var4['iconWrapper'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var9['gap'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var9['marginTop'] = var14;
    var4['facepileContainer'] = var9;
    var9 = {};
    var9['flexDirection'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['gap'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['marginBottom'] = var13;
    var4['messageContainer'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var4['messageContent'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var9['gap'] = var13;
    var9['borderWidth'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_STRONG;
    var9['borderColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['marginVertical'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var9['borderRadius'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var9['padding'] = var10;
    var4['messages'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/ICYMIGeneratedCandidateRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ICYMIGeneratedCandidateRow(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var15 = var1.item;
            var _closure2_slot0 = var15;
            var8 = var1.disableInteractions;
            var1 = _closure1_slot12;
            var5 = undefined;
            var12 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 12;
            var1 = var4[var2];
            var9 = var3.bind(var5)(var1);
            var7 = var9.useStateFromStores;
            var1 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.guild_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var22 = var7.bind(var9)(var6, var1);
            var _closure2_slot1 = var22;
            var1 = var4[var2];
            var9 = var3.bind(var5)(var1);
            var7 = var9.useStateFromStores;
            var1 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.channel_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var7.bind(var9)(var6, var1);
            var _closure2_slot2 = var14;
            var1 = var4[var2];
            var10 = var3.bind(var5)(var1);
            var9 = var10.useStateFromStoresArray;
            var1 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = var15.channel_id;
            var6 = new Array(3);
            var6[0] = var1;
            var1 = var15.message_ids;
            var6[1] = var1;
            var1 = var15.messages;
            var6[2] = var1;
            var1 = function() {
                var2 = _closure2_slot0;
                var4 = var2.message_ids;
                var3 = var4.map;
                var2 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var6 = arg1;
                        var _closure4_slot0 = var6;
                        var5 = _closure1_slot8;
                        var4 = var5.getMessage;
                        var1 = _closure2_slot0;
                        var1 = var1.channel_id;
                        var6 = var4.bind(var5)(var1, var6);
                        var5 = null;
                        var1 = var6;
                        if(!(var5 == var6)) { _fun0006_ip = 93; continue _fun0006 }
 49:
                        var4 = _closure2_slot0;
                        var4 = var4.messages;
                        var1 = var6;
                        if(!(var5 != var4)) { _fun0006_ip = 93; continue _fun0006 }
 66:
                        var3 = _closure2_slot0;
                        var4 = var3.messages;
                        var3 = var4.find;
                        var2 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.id;
                            var1 = _closure4_slot0;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var1 = var3.bind(var4)(var2);
 93:
                        return var1;
                    }
                };
                var4 = var3.bind(var4)(var2);
                var3 = var4.filter;
                var2 = function(arg1) {
                    var2 = null;
                    var1 = arg1;
                    var1 = var2 != var1;
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.sort;
                var1 = function(arg1, arg2) {
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 13;
                    var2 = var5[var1];
                    var3 = undefined;
                    var7 = var4.bind(var3)(var2);
                    var6 = var7.extractTimestamp;
                    var2 = arg1;
                    var2 = var2.id;
                    var2 = var6.bind(var7)(var2);
                    var1 = var5[var1];
                    var4 = var4.bind(var3)(var1);
                    var3 = var4.extractTimestamp;
                    var1 = arg2;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var1);
                    var1 = var2 - var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var9.bind(var10)(var7, var1, var6);
            var _closure2_slot3 = var1;
            var2 = var4[var2];
            var7 = var3.bind(var5)(var2);
            var6 = var7.useStateFromStoresArray;
            var2 = _closure1_slot9;
            var4 = new Array(1);
            var4[0] = var2;
            var3 = new Array(1);
            var3[0] = var1;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = global;
                    var1 = var1.Set;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {constructor: {value: var1}});
                    var14 = var2;
                    var1 = new var14[var1](var13);
                    var9 = var1 instanceof Object ? var1 : var2;
                    var1 = new Array(0);
                    var3 = _closure1_slot13;
                    var2 = _closure2_slot3;
                    var7 = undefined;
                    var6 = var3.bind(var7)(var2);
                    var3 = var6.bind(var7)();
                    var2 = var3.done;
                    var5 = null;
                    var4 = var3;
                    var3 = undefined;
                    if(var2) { _fun0007_ip = 180; continue _fun0007 }
 72:
                    var10 = var4.value;
                    var11 = var9.has;
                    var2 = var10.author;
                    var2 = var2.id;
                    var2 = var11.bind(var9)(var2);
                    if(var2) { _fun0007_ip = 165; continue _fun0007 }
 101:
                    var12 = _closure1_slot9;
                    var11 = var12.getUser;
                    var2 = var10.author;
                    var2 = var2.id;
                    var2 = var11.bind(var12)(var2);
                    if(!(var5 == var2)) { _fun0007_ip = 137; continue _fun0007 }
 131:
                    var2 = var10.author;
 137:
                    var11 = var9.add;
                    var10 = var2.id;
                    var10 = var11.bind(var9)(var10);
                    var10 = var1.push;
                    var10 = var10.bind(var1)(var2);
                    var3 = var2;
 165:
                    var10 = var6.bind(var7)();
                    var2 = var10.done;
                    var4 = var10;
                    if(!var2) { _fun0007_ip = 72; continue _fun0007 }
 180:
                    return var1;
                }
            };
            var23 = var6.bind(var7)(var4, var2, var3);
            var3 = _closure1_slot4;
            var2 = new Array(2);
            var2[0] = var1;
            var1 = var15.message_ids;
            var2[1] = var1;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = -1;
                    var _closure3_slot0 = var4;
                    var2 = 0;
                    var _closure3_slot1 = var2;
                    var7 = function _loop() {
                        var2 = _closure2_slot0;
                        var5 = var2.message_ids;
                        var4 = _closure3_slot1;
                        var4 = var5[var4];
                        var _closure4_slot0 = var4;
                        var4 = _closure2_slot3;
                        var3 = var4.findIndex;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.id;
                            var1 = _closure4_slot0;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var1 = var3.bind(var4)(var1);
                        _closure3_slot0 = var1;
                        var1 = _closure3_slot1;
                        var1 = var1 + 1;
                        _closure3_slot1 = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var6 = undefined;
 30:
                    var3 = var7.bind(var6)();
                    var3 = _closure3_slot0;
                    if(!(var4 === var3)) { _fun0008_ip = 65; continue _fun0008 }
 42:
                    var5 = _closure3_slot1;
                    var3 = _closure2_slot0;
                    var3 = var3.message_ids;
                    var3 = var3.length;
                    if(var5 < var3) { _fun0008_ip = 30; continue _fun0008 }
 65:
                    var3 = _closure3_slot0;
                    if(!(var4 !== var3)) { _fun0008_ip = 95; continue _fun0008 }
 73:
                    var2 = _closure2_slot3;
                    var1 = _closure3_slot0;
                    var2 = var2[var1];
                    var1 = new Array(1);
                    var1[0] = var2;
                    _fun0008_ip = 99; continue _fun0008;
 95:
                    var1 = new Array(0);
 99:
                    return var1;
                }
            };
            var26 = var3.bind(var5)(var1, var2);
            var _closure2_slot4 = var26;
            var4 = _closure1_slot3;
            var3 = var4.useCallback;
            var2 = new Array(3);
            var2[0] = var14;
            var2[1] = var22;
            var1 = var15.content_id;
            var2[2] = var1;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var5 = 14;
                    var2 = var1[var5];
                    var1 = undefined;
                    var9 = var4.bind(var1)(var2);
                    var8 = var9.trackItemInteraction;
                    var4 = _closure2_slot0;
                    var7 = var4.content_id;
                    var6 = 'generated_candidate';
                    var4 = 'press_header';
                    var4 = var8.bind(var9)(var7, var6, var4);
                    var4 = _closure2_slot2;
                    var7 = null;
                    var4 = var7 != var4;
                    if(!var4) { _fun0009_ip = 84; continue _fun0009 }
 76:
                    var6 = _closure2_slot1;
                    var4 = var7 != var6;
 84:
                    if(!var4) { _fun0009_ip = 139; continue _fun0009 }
 87:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.navigateToPost;
                    var3 = _closure2_slot2;
                    var13 = var3.id;
                    var2 = _closure2_slot1;
                    var12 = var2.id;
                    var10 = false;
                    var14 = var6;
                    var11 = undefined;
                    var2 = var14[var5](var13, var12, var11, var10, var9);
 139:
                    return var1;
                }
            };
            var9 = var3.bind(var4)(var1, var2);
            var4 = _closure1_slot3;
            var3 = var4.useCallback;
            var2 = new Array(2);
            var2[0] = var14;
            var1 = var15.content_id;
            var2[1] = var1;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var2);
                    var7 = var8.trackItemInteraction;
                    var4 = _closure2_slot0;
                    var6 = var4.content_id;
                    var5 = 'generated_candidate';
                    var4 = 'long_press';
                    var4 = var7.bind(var8)(var6, var5, var4);
                    var5 = _closure2_slot2;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0010_ip = 113; continue _fun0010 }
 73:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 15;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.openChannelLongPressActionSheet;
                    var2 = _closure2_slot2;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
 113:
                    return var1;
                }
            };
            var6 = var3.bind(var4)(var1, var2);
            var4 = _closure1_slot3;
            var3 = var4.useCallback;
            var2 = new Array(3);
            var2[0] = var14;
            var1 = var15.content_id;
            var2[1] = var1;
            var2[2] = var26;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0011_ip = 31; continue _fun0011 }
 16:
                    var3 = _closure2_slot4;
                    var4 = var3.length;
                    var3 = 0;
                    var2 = var4 > var3;
 31:
                    if(!var2) { _fun0011_ip = 145; continue _fun0011 }
 34:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 14;
                    var6 = var5[var2];
                    var3 = undefined;
                    var10 = var4.bind(var3)(var6);
                    var9 = var10.trackItemInteraction;
                    var6 = _closure2_slot0;
                    var8 = var6.content_id;
                    var7 = 'generated_candidate';
                    var6 = 'press_content';
                    var6 = var9.bind(var10)(var8, var7, var6);
                    var2 = var5[var2];
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.navigateToPost;
                    var2 = _closure2_slot2;
                    var3 = var2.id;
                    var2 = var2.guild_id;
                    var6 = _closure2_slot4;
                    var1 = 0;
                    var1 = var6[var1];
                    var1 = var1.id;
                    var1 = var4.bind(var5)(var3, var2, var1);
 145:
                    var1 = undefined;
                    return var1;
                }
            };
            var25 = var3.bind(var4)(var1, var2);
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var1 = var15.message_ids;
            var2 = new Array(2);
            var2[0] = var1;
            var1 = var15.content_id;
            var2[1] = var1;
            var1 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var4 = _closure1_slot13;
                    var1 = _closure2_slot0;
                    var1 = var1.message_ids;
                    var5 = undefined;
                    var10 = var4.bind(var5)(var1);
                    var1 = var10.bind(var5)();
                    var7 = var1.done;
                    var4 = 0;
                    var6 = 13;
                    var9 = var1;
                    var8 = 0;
                    var1 = 0;
                    if(var7) { _fun0012_ip = 109; continue _fun0012 }
 51:
                    var12 = var9.value;
                    var11 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var6];
                    var11 = var11.bind(var5)(var7);
                    var7 = var11.extractTimestamp;
                    var7 = var7.bind(var11)(var12);
                    if(!(var7 > var8)) { _fun0012_ip = 91; continue _fun0012 }
 88:
                    var8 = var7;
 91:
                    var12 = var10.bind(var5)();
                    var7 = var12.done;
                    var9 = var12;
                    var1 = var8;
                    if(!var7) { _fun0012_ip = 51; continue _fun0012 }
 109:
                    if(!(var4 === var1)) { _fun0012_ip = 151; continue _fun0012 }
 113:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.extractTimestamp;
                    var2 = _closure2_slot0;
                    var2 = var2.content_id;
                    var1 = var3.bind(var4)(var2);
 151:
                    return var1;
                }
            };
            var10 = var3.bind(var4)(var1, var2);
            var7 = null;
            var2 = var7 == var22;
            var1 = null;
            if(var2) { _fun0005_ip = 993; continue _fun0005 }
 484:
            var2 = var7 == var14;
            var1 = null;
            if(var2) { _fun0005_ip = 993; continue _fun0005 }
 496:
            var4 = _closure1_slot11;
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var2 = 14;
            var2 = var21[var2];
            var2 = var19.bind(var5)(var2);
            var3 = var2.GeneratedCandidateContentPost;
            var2 = {};
            var2['guild'] = var22;
            var2['channel'] = var14;
            var13 = var15.content_id;
            var2['id'] = var13;
            var2['timestamp'] = var10;
            var10 = var15.type;
            var2['type'] = var10;
            var2['onHeaderPress'] = var9;
            var2['onHeaderLongPress'] = var6;
            var10 = _closure1_slot10;
            var9 = _closure1_slot5;
            var6 = {};
            var13 = var12.outerContainer;
            var6['style'] = var13;
            var16 = _closure1_slot5;
            var13 = {};
            var17 = var12.container;
            var13['style'] = var17;
            var27 = _closure1_slot10;
            var18 = 16;
            var17 = var21[var18];
            var17 = var19.bind(var5)(var17);
            var20 = var17.Text;
            var17 = {'variant': 'text-lg/semibold', 'color': 'header-primary'};
            var28 = var15.primary_text;
            var17['children'] = var28;
            var20 = var27.bind(var5)(var20, var17);
            var17 = new Array(4);
            var17[0] = var20;
            var20 = _closure1_slot10;
            var18 = var21[var18];
            var18 = var19.bind(var5)(var18);
            var19 = var18.Text;
            var18 = {'variant': 'text-md/normal', 'color': 'text-primary'};
            var21 = var12.secondaryText;
            var18['style'] = var21;
            var21 = var15.secondary_text;
            var18['children'] = var21;
            var18 = var20.bind(var5)(var19, var18);
            var17[1] = var18;
            var19 = var26.length;
            var18 = 0;
            var19 = var19 > var18;
            var18 = null;
            if(!var19) { _fun0005_ip = 815; continue _fun0005 }
 742:
            var21 = _closure1_slot10;
            var20 = _closure1_slot0;
            var27 = _closure1_slot2;
            var19 = 17;
            var19 = var27[var19];
            var19 = var20.bind(var5)(var19);
            var20 = var19.PressableOpacity;
            var19 = {};
            var27 = var12.messages;
            var19['style'] = var27;
            var19['onPress'] = var25;
            var25 = var26.map;
            var24 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var2 = arg1;
                    var1 = null;
                    var3 = var1 != var2;
                    if(!var3) { _fun0013_ip = 77; continue _fun0013 }
 12:
                    var6 = _closure1_slot10;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 18;
                    var3 = var5[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = {};
                    var3['message'] = var2;
                    var7 = _closure2_slot2;
                    var3['channel'] = var7;
                    var7 = true;
                    var3['showTimestamps'] = var7;
                    var2 = var2.id;
                    var1 = var6.bind(var5)(var4, var3, var2);
 77:
                    return var1;
                }
            };
            var24 = var25.bind(var26)(var24);
            var19['children'] = var24;
            var18 = var21.bind(var5)(var20, var19);
 815:
            var17[2] = var18;
            var19 = var23.length;
            var18 = 1;
            var19 = var19 > var18;
            var18 = null;
            if(!var19) { _fun0005_ip = 866; continue _fun0005 }
 836:
            var21 = _closure1_slot10;
            var20 = _closure1_slot15;
            var19 = {};
            var19['authors'] = var23;
            var22 = var22.id;
            var19['guildId'] = var22;
            var18 = var21.bind(var5)(var20, var19);
 866:
            var17[3] = var18;
            var13['children'] = var17;
            var13 = var4.bind(var5)(var16, var13);
            var6['children'] = var13;
            var9 = var10.bind(var5)(var9, var6);
            var6 = new Array(2);
            var6[0] = var9;
            var7 = null;
            if(var8) { _fun0005_ip = 979; continue _fun0005 }
 903:
            var10 = _closure1_slot10;
            var9 = _closure1_slot5;
            var8 = {};
            var12 = var12.footer;
            var8['style'] = var12;
            var13 = _closure1_slot10;
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 19;
            var11 = var16[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.GeneratedCandidateReplyRow;
            var11 = {};
            var11['item'] = var15;
            var11['channel'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 979:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 993:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();