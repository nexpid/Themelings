// app/modules/channel_list_v2/native/unread_bars/ChannelsUnreadBars.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
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
            var9 = _closure1_slot21;
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
            var7 = _closure1_slot21;
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
    var _closure1_slot20 = var1;
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
    var _closure1_slot21 = var1;
    var1 = function shouldSkipSection(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = 12;
            var3 = var3[var5];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var3 = var3.SECTION_INDEX_CHANNEL_NOTICES;
            if(!(var3 !== var2)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var1 !== var2)) { _fun0004_ip = 36; continue _fun0004 }
case 38:
            var1 = false;
            return var1;
case 36:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function checkHasMentionOrUnread(arg1, arg2, arg3, arg4) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var3 = arg4;
            var4 = var5.getChannelFromSectionRow;
            var2 = arg2;
            var1 = arg3;
            var1 = var4.bind(var5)(var2, var1);
            var10 = null;
            if(!(var10 != var1)) { _fun0005_ip = 39; continue _fun0005 }
case 33:
            var2 = var1.channel;
            var1 = _closure1_slot16;
            var1 = var1.MENTION;
            if(!(var1 !== var3)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var1 = _closure1_slot16;
            var1 = var1.UNREAD;
            if(!(var1 !== var3)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var1 = false;
            return var1;
case 42:
            var6 = var2.record;
            var3 = _closure1_slot20;
            var1 = var2.threadIds;
            var8 = undefined;
            var7 = var3.bind(var8)(var1);
            var3 = var7.bind(var8)();
            var1 = var3.done;
            var4 = var3;
            if(var1) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var11 = var4.value;
            var3 = _closure1_slot7;
            var1 = var3.getChannel;
            var1 = var1.bind(var3)(var11);
            if(!(var10 != var1)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var11 = _closure1_slot9;
            var3 = var11.hasUnread;
            var1 = var1.id;
            var3 = var3.bind(var11)(var1);
            var1 = true;
            if(var3) { _fun0005_ip = 48; continue _fun0005 }
case 46:
            var11 = var7.bind(var8)();
            var3 = var11.done;
            var4 = var11;
            if(!var3) { _fun0005_ip = 45; continue _fun0005 }
case 44:
            var3 = var6.isGuildVocal;
            var3 = var3.bind(var6)();
            var3 = !var3;
            if(!var3) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var4 = var2.isMuted;
            var3 = !var4;
case 49:
            if(!var3) { _fun0005_ip = 51; continue _fun0005 }
case 22:
            var7 = _closure1_slot9;
            var5 = var7.hasUnread;
            var4 = var6.id;
            var3 = var5.bind(var7)(var4);
case 51:
            if(!var3) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var5 = _closure1_slot10;
            var4 = var5.resolveUnreadSetting;
            var5 = var4.bind(var5)(var6);
            var4 = _closure1_slot12;
            var4 = var4.ALL_MESSAGES;
            var3 = var5 === var4;
case 52:
            var1 = var3;
case 48:
            return var1;
case 40:
            var4 = _closure1_slot9;
            var3 = var4.getMentionCount;
            var1 = var2.id;
            var1 = var3.bind(var4)(var1);
            var8 = 0;
            var3 = var1 > var8;
            var1 = true;
            if(var3) { _fun0005_ip = 54; continue _fun0005 }
case 55:
            var3 = _closure1_slot20;
            var2 = var2.threadIds;
            var6 = undefined;
            var5 = var3.bind(var6)(var2);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var1 = false;
            if(var2) { _fun0005_ip = 54; continue _fun0005 }
case 56:
            var11 = var3.value;
            var10 = _closure1_slot9;
            var2 = var10.getMentionCount;
            var2 = var2.bind(var10)(var11);
            var2 = var2 > var8;
            var1 = true;
            if(var2) { _fun0005_ip = 54; continue _fun0005 }
case 57:
            var10 = var5.bind(var6)();
            var2 = var10.done;
            var3 = var10;
            var1 = false;
            if(!var2) { _fun0005_ip = 56; continue _fun0005 }
case 54:
            return var1;
case 39:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function findNearestUnreadItem(arg1, arg2, arg3, arg4) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var13 = arg2;
            var4 = arg3;
            var7 = var13.id;
            var5 = _closure1_slot8;
            var3 = var5.getMentionCount;
            var3 = var3.bind(var5)(var7);
            var12 = 0;
            var5 = var3 > var12;
            var6 = _closure1_slot8;
            var3 = var6.hasUnread;
            var3 = var3.bind(var6)(var7);
            if(var5) { _fun0006_ip = 58; continue _fun0006 }
case 28:
            var11 = null;
            if(!var3) { _fun0006_ip = 59; continue _fun0006 }
case 7:
            var3 = _closure1_slot16;
            var11 = var3.UNREAD;
case 59:
            _fun0006_ip = 60; continue _fun0006;
case 58:
            var3 = _closure1_slot16;
            var11 = var3.MENTION;
case 60:
            var10 = null;
            if(!(var10 != var11)) { _fun0006_ip = 61; continue _fun0006 }
case 62:
            var3 = var2.containerSize;
            if(!(var12 !== var3)) { _fun0006_ip = 63; continue _fun0006 }
case 64:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 13;
            var3 = var6[var3];
            var9 = undefined;
            var5 = var5.bind(var9)(var3);
            var3 = var5.getFontScale;
            var5 = var3.bind(var5)();
            var3 = _closure1_slot11;
            var5 = var3.bind(var9)(var5);
            var3 = 2;
            var7 = var5 / var3;
            var5 = var2.scrollPosValue;
            var3 = var5.get;
            var5 = var3.bind(var5)();
            var6 = var2.getSectionItemFromPosition;
            var3 = var4 + var5;
            var3 = var3 + var7;
            var3 = var6.bind(var2)(var3);
            var6 = var3.item;
            var7 = var10 == var6;
            var3 = undefined;
            if(var7) { _fun0006_ip = 65; continue _fun0006 }
case 49:
            var3 = var6.layoutStart;
case 65:
            var16 = var5;
            if(!(var10 != var3)) { _fun0006_ip = 66; continue _fun0006 }
case 67:
            var16 = var3;
case 66:
            var3 = var2.containerSize;
            var3 = var16 + var3;
            var4 = var3 - var4;
            var3 = arg4;
            var15 = var4 - var3;
            var6 = {'section': 4294967295, 'item': 4294967295};
            var14 = -1;
            var3 = _closure1_slot20;
            var2 = var2.state;
            var2 = var2.items;
            var7 = var3.bind(var9)(var2);
            var3 = var7.bind(var9)();
            var2 = var3.done;
            var5 = 14;
            var4 = var3;
            var3 = null;
            var8 = null;
            if(var2) { _fun0006_ip = 68; continue _fun0006 }
case 69:
            var18 = var4.value;
            var2 = var18.layoutStart;
            var17 = var3;
            if(!(!(var2 < var16))) { _fun0006_ip = 70; continue _fun0006 }
case 56:
            var19 = var18.type;
            var20 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var20.bind(var9)(var2);
            var2 = var2.FastListItemTypes;
            var2 = var2.ITEM;
            if(!(var19 !== var2)) { _fun0006_ip = 71; continue _fun0006 }
case 72:
            var19 = var18.type;
            var20 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var20.bind(var9)(var2);
            var2 = var2.FastListItemTypes;
            var2 = var2.SECTION;
            var17 = var3;
            if(!(var19 === var2)) { _fun0006_ip = 70; continue _fun0006 }
case 71:
            var2 = var18.layoutStart;
            var8 = var3;
            if(!(!(var2 > var15))) { _fun0006_ip = 68; continue _fun0006 }
case 73:
            var2 = var6.section;
            if(!(var14 === var2)) { _fun0006_ip = 74; continue _fun0006 }
case 75:
            var2 = var18.section;
            var6['section'] = var2;
            var2 = var18.item;
            var6['item'] = var2;
case 74:
            var19 = var18.type;
            var20 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var20.bind(var9)(var2);
            var2 = var2.FastListItemTypes;
            var2 = var2.ITEM;
            var17 = var18;
            if(!(var19 === var2)) { _fun0006_ip = 70; continue _fun0006 }
case 76:
            var19 = _closure1_slot22;
            var2 = var18.section;
            var2 = var19.bind(var9)(var2);
            var17 = var3;
            if(var2) { _fun0006_ip = 70; continue _fun0006 }
case 77:
            var20 = _closure1_slot23;
            var24 = var18.section;
            var23 = var18.item;
            var26 = undefined;
            var25 = var13;
            var22 = var11;
            var2 = var26[var20](var25, var24, var23, var22, var21);
            var17 = var18;
            if(!var2) { _fun0006_ip = 70; continue _fun0006 }
case 78:
            var2 = _closure1_slot17;
            return var2;
case 70:
            var18 = var7.bind(var9)();
            var2 = var18.done;
            var3 = var17;
            var4 = var18;
            var8 = var3;
            if(!var2) { _fun0006_ip = 69; continue _fun0006 }
case 68:
            var2 = var13.getSections;
            var7 = var2.bind(var13)();
            var5 = var6.section;
            var14 = var5 >= var12;
            var4 = 1;
            var3 = undefined;
            var2 = undefined;
            if(!var14) { _fun0006_ip = 79; continue _fun0006 }
case 80:
            var14 = _closure1_slot22;
            var16 = var14.bind(var9)(var5);
            var15 = var5;
            var14 = var2;
            if(var16) { _fun0006_ip = 81; continue _fun0006 }
case 82:
            var16 = var7[var15];
            var16 = var16 - var4;
            var14 = var2;
            var3 = var16;
            if(!(var3 >= var12)) { _fun0006_ip = 81; continue _fun0006 }
case 83:
            var17 = var6.section;
            var18 = var6.item;
            var18 = var16 >= var18;
            if(!(var15 === var17)) { _fun0006_ip = 84; continue _fun0006 }
case 85:
            if(var18) { _fun0006_ip = 86; continue _fun0006 }
case 84:
            var17 = _closure1_slot23;
            var26 = undefined;
            var25 = var13;
            var24 = var15;
            var23 = var16;
            var22 = var11;
            var17 = var26[var17](var25, var24, var23, var22, var21);
            if(!var17) { _fun0006_ip = 86; continue _fun0006 }
case 87:
            var17 = {};
            var19 = {};
            var19['section'] = var15;
            var19['row'] = var16;
            var20 = _closure1_slot16;
            var20 = var20.MENTION;
            var20 = var11 === var20;
            var19['isMention'] = var20;
            var17['beforeItem'] = var19;
            var17['afterItem'] = var10;
            return var17;
case 86:
            var16 = var16 - 1;
            var14 = var18;
            var3 = var16;
            if(var3 >= var12) { _fun0006_ip = 83; continue _fun0006 }
case 81:
            var5 = var15 - 1;
            var2 = var14;
            if(var5 >= var12) { _fun0006_ip = 80; continue _fun0006 }
case 79:
            var3 = var10 == var8;
            var2 = undefined;
            if(var3) { _fun0006_ip = 88; continue _fun0006 }
case 89:
            var2 = var8.section;
case 88:
            var3 = var10 != var2;
            var6 = 0;
            if(!var3) { _fun0006_ip = 90; continue _fun0006 }
case 91:
            var6 = var2;
case 90:
            var2 = var7.length;
            var2 = var6 < var2;
            var5 = undefined;
            var4 = undefined;
            var3 = undefined;
            if(!var2) { _fun0006_ip = 92; continue _fun0006 }
case 93:
            var2 = _closure1_slot22;
            var15 = var2.bind(var9)(var6);
            var2 = var6;
            var14 = var3;
            if(var15) { _fun0006_ip = 94; continue _fun0006 }
case 95:
            var17 = var7[var2];
            var18 = var12 < var17;
            var16 = 0;
            var15 = var3;
            var5 = var17;
            var4 = 0;
            var14 = var15;
            if(!var18) { _fun0006_ip = 94; continue _fun0006 }
case 96:
            if(!(var10 != var8)) { _fun0006_ip = 97; continue _fun0006 }
case 98:
            var19 = var8.section;
            var18 = var8.item;
            var18 = var16 <= var18;
            var15 = var18;
            if(!(var2 === var19)) { _fun0006_ip = 97; continue _fun0006 }
case 99:
            var15 = var18;
            var19 = var15;
            if(var19) { _fun0006_ip = 100; continue _fun0006 }
case 97:
            var18 = _closure1_slot23;
            var26 = undefined;
            var25 = var13;
            var24 = var2;
            var23 = var16;
            var22 = var11;
            var18 = var26[var18](var25, var24, var23, var22, var21);
            var19 = var15;
            if(!var18) { _fun0006_ip = 100; continue _fun0006 }
case 101:
            var18 = {};
            var20 = {};
            var20['section'] = var2;
            var20['row'] = var16;
            var21 = _closure1_slot16;
            var21 = var21.MENTION;
            var21 = var11 === var21;
            var20['isMention'] = var21;
            var18['afterItem'] = var20;
            var18['beforeItem'] = var10;
            return var18;
case 100:
            var16 = var16 + 1;
            var15 = var19;
            var5 = var17;
            var14 = var15;
            var4 = var16;
            if(var4 < var17) { _fun0006_ip = 96; continue _fun0006 }
case 94:
            var6 = var2 + 1;
            var2 = var7.length;
            var3 = var14;
            if(var6 < var2) { _fun0006_ip = 93; continue _fun0006 }
case 92:
            var2 = _closure1_slot17;
            return var2;
case 63:
            var2 = _closure1_slot17;
            return var2;
case 61:
            var1 = _closure1_slot17;
            return var1;
        }
    };
    var _closure1_slot24 = var1;
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.View;
    var _closure1_slot5 = var9;
    var10 = var4.StyleSheet;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getScaledChannelRowHeight;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UnreadSetting;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot13 = var8;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = var10.absoluteFillObject;
    var4['wrapper'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot15 = var4;
    var4 = {};
    var8 = 'mention';
    var4['MENTION'] = var8;
    var8 = 'unread';
    var4['UNREAD'] = var8;
    var _closure1_slot16 = var4;
    var4 = {'beforeItem': null, 'afterItem': null};
    var _closure1_slot17 = var4;
    var4 = {};
    var8 = 'function ChannelsUnreadBarsTsx1(){const{scrollPosValue}=this.__closure;return scrollPosValue.get();}';
    var4['code'] = var8;
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = 'function ChannelsUnreadBarsTsx2(position,lastPosition){const{runOnJS,debouncedUpdate}=this.__closure;if(position!==lastPosition){runOnJS(debouncedUpdate)();}}';
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var4 = var7.memo;
    var2 = function ChannelUnreadBarsComponent(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var11 = var2.fastList;
            var _closure2_slot0 = var11;
            var15 = var2.guild;
            var17 = var2.guildChannels;
            var _closure2_slot1 = var17;
            var9 = var2.headerHeight;
            var _closure2_slot2 = var9;
            var2 = var17.id;
            var _closure2_slot3 = var2;
            var14 = _closure1_slot4;
            var4 = var14.useRef;
            var3 = -1;
            var3 = var4.bind(var14)(var3);
            var _closure2_slot4 = var3;
            var3 = var14.useRef;
            var12 = null;
            var3 = var3.bind(var14)(var12);
            var _closure2_slot5 = var3;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 15;
            var7 = var5[var4];
            var4 = undefined;
            var8 = var3.bind(var4)(var7);
            var7 = var8.useYouBarTotalHeight;
            var7 = var7.bind(var8)();
            var _closure2_slot6 = var7;
            var10 = var14.useState;
            var8 = function() {
                var6 = _closure1_slot24;
                var10 = _closure2_slot0;
                var9 = _closure2_slot1;
                var8 = _closure2_slot2;
                var7 = _closure2_slot6;
                var11 = undefined;
                var1 = var11[var6](var10, var9, var8, var7, var6);
                return var1;
            };
            var13 = var10.bind(var14)(var8);
            var10 = _closure1_slot3;
            var8 = 2;
            var16 = var10.bind(var4)(var13, var8);
            var10 = 0;
            var8 = var16[var10];
            var18 = var8.beforeItem;
            var _closure2_slot7 = var18;
            var13 = var8.afterItem;
            var _closure2_slot8 = var13;
            var8 = 1;
            var8 = var16[var8];
            var _closure2_slot9 = var8;
            var16 = var14.useMemo;
            var8 = new Array(4);
            var8[0] = var11;
            var8[1] = var17;
            var8[2] = var9;
            var8[3] = var7;
            var7 = function() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 16;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = function() {
                    var8 = _closure1_slot24;
                    var12 = _closure2_slot0;
                    var11 = _closure2_slot1;
                    var10 = _closure2_slot2;
                    var9 = _closure2_slot6;
                    var1 = undefined;
                    var13 = undefined;
                    var4 = var13[var8](var12, var11, var10, var9, var8);
                    var _closure4_slot0 = var4;
                    var3 = _closure2_slot9;
                    var2 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var4 = arg1;
                            var3 = _closure4_slot0;
                            var1 = var4;
                            if(!(var4 !== var3)) { _fun0008_ip = 17; continue _fun0008 }
case 29:
                            var6 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var8 = 17;
                            var3 = var3[var8];
                            var7 = undefined;
                            var10 = var6.bind(var7)(var3);
                            var6 = var4.afterItem;
                            var3 = null;
                            var11 = var3 != var6;
                            var9 = undefined;
                            if(!var11) { _fun0008_ip = 38; continue _fun0008 }
case 102:
                            var9 = var6;
case 38:
                            var6 = _closure4_slot0;
                            var11 = var6.afterItem;
                            var12 = var3 != var11;
                            var6 = undefined;
                            if(!var12) { _fun0008_ip = 103; continue _fun0008 }
case 104:
                            var6 = var11;
case 103:
                            var6 = var10.bind(var7)(var9, var6);
                            if(!var6) { _fun0008_ip = 105; continue _fun0008 }
case 11:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var5 = var5[var8];
                            var6 = var6.bind(var7)(var5);
                            var8 = var4.beforeItem;
                            var9 = var3 != var8;
                            var5 = undefined;
                            if(!var9) { _fun0008_ip = 106; continue _fun0008 }
case 107:
                            var5 = var8;
case 106:
                            var8 = _closure4_slot0;
                            var8 = var8.beforeItem;
                            var9 = var3 != var8;
                            var3 = undefined;
                            if(!var9) { _fun0008_ip = 108; continue _fun0008 }
case 109:
                            var3 = var8;
case 108:
                            var3 = var6.bind(var7)(var5, var3);
                            var1 = var4;
                            if(var3) { _fun0008_ip = 17; continue _fun0008 }
case 105:
                            var1 = _closure4_slot0;
case 17:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = 100;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var19 = var16.bind(var14)(var7, var8);
            var _closure2_slot10 = var19;
            var8 = var14.useEffect;
            var7 = new Array(2);
            var7[0] = var19;
            var7[1] = var2;
            var2 = function() {
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 18;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var5 = var3.BatchedStoreListener;
                var3 = _closure1_slot8;
                var4 = new Array(2);
                var4[0] = var3;
                var2 = _closure1_slot9;
                var4[1] = var2;
                var2 = var5.prototype;
                var3 = Object.create(var2, {constructor: {value: var5}});
                var6 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var4 = _closure2_slot3;
                        var3 = _closure1_slot9;
                        var2 = var3.getGuildUnreadsSentinel;
                        var3 = var2.bind(var3)(var4);
                        var2 = _closure2_slot5;
                        var2 = var2.current;
                        var2 = var4 === var2;
                        if(!var2) { _fun0009_ip = 28; continue _fun0009 }
case 110:
                        var5 = _closure2_slot4;
                        var5 = var5.current;
                        var2 = var3 === var5;
case 28:
                        if(var2) { _fun0009_ip = 111; continue _fun0009 }
case 112:
                        var2 = _closure2_slot5;
                        var2['current'] = var4;
                        var2 = _closure2_slot4;
                        var2['current'] = var3;
                        var2 = _closure2_slot10;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 111:
                        var1 = undefined;
                        return var1;
                    }
                };
                var8 = var3;
                var7 = var4;
                var2 = new var8[var5](var7, var6, var5);
                var4 = var2 instanceof Object ? var2 : var3;
                var _closure3_slot0 = var4;
                var3 = var4.attach;
                var2 = 'channel-list-unread-bars';
                var2 = var3.bind(var4)(var2);
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.detach;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var2 = var8.bind(var14)(var2, var7);
            var17 = var11.scrollPosValue;
            var _closure2_slot11 = var17;
            var20 = 19;
            var2 = var5[var20];
            var16 = var3.bind(var4)(var2);
            var8 = var16.useAnimatedReaction;
            var7 = function A() {
                var2 = _closure2_slot11;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = {};
            var2['scrollPosValue'] = var17;
            var7['__closure'] = var2;
            var2 = 7966775243843.0;
            var7['__workletHash'] = var2;
            var2 = _closure1_slot18;
            var7['__initData'] = var2;
            var2 = function w(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = arg1;
                    var1 = arg2;
                    if(!(var2 !== var1)) { _fun0010_ip = 28; continue _fun0010 }
case 113:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var1);
                    var3 = var4.runOnJS;
                    var1 = _closure2_slot10;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
case 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = {};
            var20 = var5[var20];
            var20 = var3.bind(var4)(var20);
            var20 = var20.runOnJS;
            var17['runOnJS'] = var20;
            var17['debouncedUpdate'] = var19;
            var2['__closure'] = var17;
            var17 = 17498480935002.0;
            var2['__workletHash'] = var17;
            var17 = _closure1_slot19;
            var2['__initData'] = var17;
            var2 = var8.bind(var16)(var7, var2);
            var2 = _closure1_slot15;
            var8 = var2.bind(var4)();
            var _closure2_slot12 = var8;
            var7 = _closure1_slot1;
            var2 = 20;
            var2 = var5[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.bind(var4)(var15);
            var17 = var2.bannerWidth;
            var _closure2_slot13 = var17;
            var16 = var2.listBottom;
            var _closure2_slot14 = var16;
            var2 = 21;
            var2 = var5[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var _closure2_slot15 = var2;
            var15 = var14.useMemo;
            var19 = var8.wrapper;
            var8 = new Array(4);
            var8[0] = var19;
            var8[1] = var17;
            var8[2] = var16;
            var8[3] = var2;
            var2 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = _closure2_slot12;
                    var2 = var1.wrapper;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = {};
                    var3 = _closure2_slot13;
                    var2['width'] = var3;
                    var5 = _closure2_slot15;
                    var3 = 0;
                    if(var5) { _fun0011_ip = 114; continue _fun0011 }
case 115:
                    var3 = _closure2_slot14;
case 114:
                    var2['bottom'] = var3;
                    var1[1] = var2;
                    return var1;
                }
            };
            var8 = var15.bind(var14)(var2, var8);
            if(!(var12 != var18)) { _fun0007_ip = 116; continue _fun0007 }
case 117:
            var2 = var18.isMention;
            var16 = 'before';
            if(var2) { _fun0007_ip = 118; continue _fun0007 }
case 116:
            if(!(var12 != var13)) { _fun0007_ip = 119; continue _fun0007 }
case 120:
            var15 = var13.isMention;
            var2 = 'after';
            if(var15) { _fun0007_ip = 121; continue _fun0007 }
case 119:
            var17 = var12 != var18;
            var15 = 'before';
            if(var17) { _fun0007_ip = 122; continue _fun0007 }
case 123:
            var19 = var12 != var13;
            var17 = null;
            if(!var19) { _fun0007_ip = 124; continue _fun0007 }
case 68:
            var17 = 'after';
case 124:
            var15 = var17;
case 122:
            var2 = var15;
case 121:
            var16 = var2;
case 118:
            var2 = 18;
            var2 = var5[var2];
            var17 = var3.bind(var4)(var2);
            var15 = var17.useStateFromStores;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var15 = var15.bind(var17)(var3, var2);
            var _closure2_slot16 = var15;
            var17 = var14.useCallback;
            var3 = new Array(3);
            var3[0] = var18;
            var3[1] = var15;
            var3[2] = var11;
            var2 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure2_slot7;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0012_ip = 125; continue _fun0012 }
case 126:
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 22;
                    var2 = var7[var2];
                    var6 = undefined;
                    var3 = var3.bind(var6)(var2);
                    var2 = var3.triggerHapticFeedback;
                    var5 = _closure1_slot1;
                    var1 = 23;
                    var1 = var7[var1];
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.IMPACT_LIGHT;
                    var1 = var2.bind(var3)(var1);
                    var3 = _closure2_slot0;
                    var2 = var3.scrollToLocation;
                    var1 = {};
                    var5 = _closure2_slot7;
                    var6 = var5.section;
                    var1['section'] = var6;
                    var5 = var5.row;
                    var1['item'] = var5;
                    var4 = _closure2_slot16;
                    var4 = !var4;
                    var1['animated'] = var4;
                    var4 = 'center';
                    var1['orientation'] = var4;
                    var1 = var2.bind(var3)(var1);
case 125:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var17.bind(var14)(var2, var3);
            var3 = var14.useCallback;
            var2 = new Array(3);
            var2[0] = var13;
            var2[1] = var15;
            var2[2] = var11;
            var1 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = _closure2_slot8;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0013_ip = 125; continue _fun0013 }
case 126:
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 22;
                    var2 = var7[var2];
                    var6 = undefined;
                    var3 = var3.bind(var6)(var2);
                    var2 = var3.triggerHapticFeedback;
                    var5 = _closure1_slot1;
                    var1 = 23;
                    var1 = var7[var1];
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.IMPACT_LIGHT;
                    var1 = var2.bind(var3)(var1);
                    var3 = _closure2_slot0;
                    var2 = var3.scrollToLocation;
                    var1 = {};
                    var5 = _closure2_slot8;
                    var6 = var5.section;
                    var1['section'] = var6;
                    var5 = var5.row;
                    var1['item'] = var5;
                    var4 = _closure2_slot16;
                    var4 = !var4;
                    var1['animated'] = var4;
                    var4 = 'center';
                    var1['orientation'] = var4;
                    var1 = var2.bind(var3)(var1);
case 125:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var3.bind(var14)(var1, var2);
            var3 = _closure1_slot14;
            var2 = _closure1_slot5;
            var1 = {};
            var1['style'] = var8;
            var8 = 'box-none';
            var1['pointerEvents'] = var8;
            var8 = _closure1_slot13;
            var15 = 24;
            var5 = var5[var15];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var19 = 'top';
            var5['position'] = var19;
            var19 = 'before';
            var19 = var19 === var16;
            var5['shown'] = var19;
            var5['onPress'] = var17;
            var19 = var12 == var18;
            var17 = undefined;
            if(var19) { _fun0007_ip = 127; continue _fun0007 }
case 128:
            var17 = var18.isMention;
case 127:
            var5['isMention'] = var17;
            var17 = var11.scrollPosValue;
            var5['scrollPosition'] = var17;
            var5['listPaddingTop'] = var10;
            var5['headerHeight'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot13;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var15];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var15 = 'bottom';
            var6['position'] = var15;
            var15 = 'after';
            var15 = var15 === var16;
            var6['shown'] = var15;
            var6['onPress'] = var14;
            var14 = var12 == var13;
            var12 = undefined;
            if(var14) { _fun0007_ip = 129; continue _fun0007 }
case 130:
            var12 = var13.isMention;
case 129:
            var6['isMention'] = var12;
            var11 = var11.scrollPosValue;
            var6['scrollPosition'] = var11;
            var6['listPaddingTop'] = var10;
            var6['headerHeight'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/unread_bars/ChannelsUnreadBars.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();