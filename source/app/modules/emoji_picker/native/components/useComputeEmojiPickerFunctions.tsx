// app/modules/emoji_picker/native/components/useComputeEmojiPickerFunctions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
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
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
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
            var9 = _closure1_slot9;
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
            var7 = _closure1_slot9;
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
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var _closure1_slot9 = var1;
    var1 = function _computeCategories(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var3 = var1.categories;
            var19 = var1.rowSize;
            var18 = var1.isNativeEmojiPickerEnabled;
            var1 = new Array(0);
            var2 = _closure1_slot8;
            var16 = undefined;
            var15 = var2.bind(var16)(var3);
            var3 = var15.bind(var16)();
            var2 = var3.done;
            var14 = 0;
            var13 = 4;
            var12 = global;
            var11 = null;
            var10 = 6;
            var9 = 5;
            var8 = var3;
            var7 = undefined;
            var6 = undefined;
            var5 = undefined;
            var4 = undefined;
            var3 = undefined;
            if(var2) { _fun0004_ip = 1289; continue _fun0004 }
 82:
            var27 = var8.value;
            var25 = var27.type;
            var2 = _closure1_slot6;
            var2 = var2.TOP_GUILD_EMOJI;
            if(!(var2 !== var25)) { _fun0004_ip = 1142; continue _fun0004 }
 109:
            var2 = _closure1_slot6;
            var2 = var2.FAVORITES;
            if(!(var2 !== var25)) { _fun0004_ip = 1037; continue _fun0004 }
 126:
            var2 = _closure1_slot6;
            var2 = var2.RECENT;
            if(!(var2 !== var25)) { _fun0004_ip = 929; continue _fun0004 }
 143:
            var2 = _closure1_slot6;
            var2 = var2.GUILD;
            if(!(var2 !== var25)) { _fun0004_ip = 548; continue _fun0004 }
 160:
            var2 = _closure1_slot6;
            var2 = var2.UNICODE;
            var24 = var7;
            var23 = var6;
            var22 = var5;
            var21 = var4;
            var20 = var3;
            if(!(var2 === var25)) { _fun0004_ip = 1256; continue _fun0004 }
 192:
            var25 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var26 = var25.bind(var16)(var2);
            var25 = var26.getByCategory;
            var2 = var27.name;
            var25 = var25.bind(var26)(var2);
            if(var18) { _fun0004_ip = 392; continue _fun0004 }
 231:
            var26 = _closure1_slot12;
            var2 = {};
            var2['emojiSections'] = var1;
            var28 = {};
            var29 = _closure1_slot7;
            var29 = var29.EMOJI;
            var28['type'] = var29;
            var29 = var25;
            if(!(var11 == var25)) { _fun0004_ip = 269; continue _fun0004 }
 265:
            var29 = new Array(0);
 269:
            var28['emojis'] = var29;
            var29 = var12.Set;
            var30 = var29.prototype;
            var30 = Object.create(var30, {constructor: {value: var29}});
            var34 = var30;
            var29 = new var34[var29](var33);
            var29 = var29 instanceof Object ? var29 : var30;
            var28['emojisDisabled'] = var29;
            var30 = _closure1_slot1;
            var29 = _closure1_slot2;
            var29 = var29[var10];
            var31 = var30.bind(var16)(var29);
            var30 = var31.capitalize;
            var29 = var27.name;
            var29 = var30.bind(var31)(var29);
            var28['label'] = var29;
            var29 = _closure1_slot6;
            var29 = var29.UNICODE;
            var28['footer'] = var29;
            var2['renderingData'] = var28;
            var2['rowSize'] = var19;
            var2 = var26.bind(var16)(var2);
            var24 = var7;
            var23 = var6;
            var22 = var5;
            var21 = var25;
            var20 = var3;
            _fun0004_ip = 1256; continue _fun0004;
 392:
            var28 = _closure1_slot13;
            var26 = {};
            var26['emojiSections'] = var1;
            var29 = {};
            var2 = _closure1_slot7;
            var2 = var2.NATIVE_SECTION;
            var29['type'] = var2;
            var30 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var10];
            var31 = var30.bind(var16)(var2);
            var30 = var31.capitalize;
            var2 = var27.name;
            var2 = var30.bind(var31)(var2);
            var29['label'] = var2;
            var30 = var11 == var25;
            var2 = undefined;
            if(var30) { _fun0004_ip = 470; continue _fun0004 }
 465:
            var2 = var25.length;
 470:
            var31 = var11 != var2;
            var30 = 0;
            if(!var31) { _fun0004_ip = 482; continue _fun0004 }
 479:
            var30 = var2;
 482:
            var29['emojiCount'] = var30;
            var30 = var12.Set;
            var31 = var30.prototype;
            var31 = Object.create(var31, {constructor: {value: var30}});
            var34 = var31;
            var30 = new var34[var30](var33);
            var30 = var30 instanceof Object ? var30 : var31;
            var29['emojisDisabled'] = var30;
            var26['renderingData'] = var29;
            var26 = var28.bind(var16)(var26);
            var24 = var7;
            var23 = var6;
            var22 = var5;
            var21 = var25;
            var20 = var2;
            _fun0004_ip = 1256; continue _fun0004;
 548:
            var26 = var27.guild;
            var25 = var27.emojis;
            var2 = var27.emojisDisabled;
            if(var18) { _fun0004_ip = 828; continue _fun0004 }
 571:
            var29 = _closure1_slot0;
            var28 = _closure1_slot2;
            var28 = var28[var13];
            var30 = var29.bind(var16)(var28);
            var29 = var30.shouldNSFWGateGuild;
            var28 = var26.id;
            var28 = var29.bind(var30)(var28);
            if(var28) { _fun0004_ip = 714; continue _fun0004 }
 607:
            var29 = _closure1_slot12;
            var28 = {};
            var28['emojiSections'] = var1;
            var30 = {};
            var31 = _closure1_slot7;
            var31 = var31.EMOJI;
            var30['type'] = var31;
            var30['emojis'] = var25;
            var30['emojisDisabled'] = var2;
            var31 = var26.name;
            var30['label'] = var31;
            var31 = _closure1_slot6;
            var31 = var31.GUILD;
            var30['footer'] = var31;
            var31 = var27.isNitroLocked;
            var30['isSectionNitroLocked'] = var31;
            var28['renderingData'] = var30;
            var28['rowSize'] = var19;
            var28 = var29.bind(var16)(var28);
            var24 = var26;
            var23 = var25;
            var22 = var2;
            var21 = var4;
            var20 = var3;
            _fun0004_ip = 1256; continue _fun0004;
 714:
            var28 = {};
            var28['emojiSections'] = var1;
            var29 = {};
            var30 = _closure1_slot7;
            var30 = var30.NSFW;
            var29['type'] = var30;
            var30 = var26.name;
            var29['label'] = var30;
            var30 = _closure1_slot6;
            var30 = var30.GUILD;
            var29['footer'] = var30;
            var30 = new Array(0);
            var29['emojis'] = var30;
            var30 = var27.isNitroLocked;
            var29['isSectionNitroLocked'] = var30;
            var28['renderingData'] = var29;
            var30 = var28.emojiSections;
            var29 = var30.push;
            var28 = var28.renderingData;
            var28 = var29.bind(var30)(var28);
            var24 = var26;
            var23 = var25;
            var22 = var2;
            var21 = var4;
            var20 = var3;
            _fun0004_ip = 1256; continue _fun0004;
 828:
            var29 = _closure1_slot13;
            var28 = {};
            var28['emojiSections'] = var1;
            var30 = {};
            var31 = _closure1_slot7;
            var31 = var31.NATIVE_SECTION;
            var30['type'] = var31;
            var31 = var26.name;
            var30['label'] = var31;
            var31 = var26.id;
            var30['guildId'] = var31;
            var31 = var25.length;
            var30['emojiCount'] = var31;
            var30['emojisDisabled'] = var2;
            var31 = var27.isNitroLocked;
            var30['isSectionNitroLocked'] = var31;
            var28['renderingData'] = var30;
            var28 = var29.bind(var16)(var28);
            var24 = var26;
            var23 = var25;
            var22 = var2;
            var21 = var4;
            var20 = var3;
            _fun0004_ip = 1256; continue _fun0004;
 929:
            var25 = _closure1_slot12;
            var2 = {};
            var2['emojiSections'] = var1;
            var26 = {};
            var28 = _closure1_slot7;
            var28 = var28.EMOJI;
            var26['type'] = var28;
            var28 = var27.emojisDisabled;
            var26['emojisDisabled'] = var28;
            var28 = var27.emojis;
            var26['emojis'] = var28;
            var28 = var27.name;
            var26['label'] = var28;
            var28 = _closure1_slot6;
            var28 = var28.RECENT;
            var26['footer'] = var28;
            var2['renderingData'] = var26;
            var2['rowSize'] = var19;
            var2 = var25.bind(var16)(var2);
            var24 = var7;
            var23 = var6;
            var22 = var5;
            var21 = var4;
            var20 = var3;
            _fun0004_ip = 1256; continue _fun0004;
 1037:
            var25 = _closure1_slot12;
            var2 = {};
            var2['emojiSections'] = var1;
            var26 = {};
            var28 = _closure1_slot7;
            var28 = var28.EMOJI;
            var26['type'] = var28;
            var28 = var27.emojis;
            var26['emojis'] = var28;
            var28 = var27.emojisDisabled;
            var26['emojisDisabled'] = var28;
            var28 = var27.name;
            var26['label'] = var28;
            var28 = _closure1_slot6;
            var28 = var28.FAVORITES;
            var26['footer'] = var28;
            var2['renderingData'] = var26;
            var2['rowSize'] = var19;
            var2 = var25.bind(var16)(var2);
            var24 = var7;
            var23 = var6;
            var22 = var5;
            var21 = var4;
            var20 = var3;
            _fun0004_ip = 1256; continue _fun0004;
 1142:
            var25 = var27.emojis;
            var2 = var25.slice;
            var28 = var2.bind(var25)(var14, var19);
            var25 = _closure1_slot12;
            var2 = {};
            var2['emojiSections'] = var1;
            var26 = {};
            var29 = _closure1_slot7;
            var29 = var29.EMOJI;
            var26['type'] = var29;
            var26['emojis'] = var28;
            var28 = var27.emojisDisabled;
            var26['emojisDisabled'] = var28;
            var27 = var27.name;
            var26['label'] = var27;
            var27 = _closure1_slot6;
            var27 = var27.TOP_GUILD_EMOJI;
            var26['footer'] = var27;
            var2['renderingData'] = var26;
            var2['rowSize'] = var19;
            var2 = var25.bind(var16)(var2);
            var24 = var7;
            var23 = var6;
            var22 = var5;
            var21 = var4;
            var20 = var3;
 1256:
            var25 = var15.bind(var16)();
            var2 = var25.done;
            var7 = var24;
            var6 = var23;
            var5 = var22;
            var4 = var21;
            var3 = var20;
            var8 = var25;
            if(!var2) { _fun0004_ip = 82; continue _fun0004 }
 1289:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function _computeSearchResults(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var2 = var1.emojis;
            var3 = var2.locked;
            var13 = var2.unlocked;
            var5 = var1.rowSize;
            var10 = var1.limit;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0005_ip = 52; continue _fun0005 }
 38:
            var1 = global;
            var1 = var1.Number;
            var10 = var1.MAX_SAFE_INTEGER;
 52:
            var1 = new Array(0);
            var8 = _closure1_slot12;
            var6 = {};
            var6['emojiSections'] = var1;
            var9 = {};
            var2 = _closure1_slot7;
            var2 = var2.EMOJI;
            var9['type'] = var2;
            var11 = var13.length;
            var2 = var13;
            if(!(var11 > var10)) { _fun0005_ip = 111; continue _fun0005 }
 98:
            var12 = var13.slice;
            var11 = 0;
            var2 = var12.bind(var13)(var11, var10);
 111:
            var9['emojis'] = var2;
            var2 = global;
            var11 = var2.Set;
            var12 = var11.prototype;
            var12 = Object.create(var12, {constructor: {value: var11}});
            var16 = var12;
            var11 = new var16[var11](var15);
            var11 = var11 instanceof Object ? var11 : var12;
            var9['emojisDisabled'] = var11;
            var11 = '';
            var9['label'] = var11;
            var11 = _closure1_slot6;
            var11 = var11.SEARCH_RESULTS;
            var9['footer'] = var11;
            var6['renderingData'] = var9;
            var6['rowSize'] = var5;
            var6 = var8.bind(var4)(var6);
            var6 = var3.length;
            var9 = var3;
            if(!(var6 > var10)) { _fun0005_ip = 212; continue _fun0005 }
 199:
            var8 = var3.slice;
            var6 = 0;
            var9 = var8.bind(var3)(var6, var10);
 212:
            var2 = var2.Set;
            var6 = var2.prototype;
            var6 = Object.create(var6, {constructor: {value: var2}});
            var16 = var6;
            var2 = new var16[var2](var15);
            var8 = var2 instanceof Object ? var2 : var6;
            var2 = _closure1_slot8;
            var10 = var2.bind(var4)(var3);
            var3 = var10.bind(var4)();
            var2 = var3.done;
            var6 = null;
            if(var2) { _fun0005_ip = 305; continue _fun0005 }
 261:
            var2 = var3.value;
            var11 = var2.id;
            if(!(var6 != var11)) { _fun0005_ip = 290; continue _fun0005 }
 275:
            var11 = var8.add;
            var2 = var2.id;
            var2 = var11.bind(var8)(var2);
 290:
            var11 = var10.bind(var4)();
            var2 = var11.done;
            var3 = var11;
            if(!var2) { _fun0005_ip = 261; continue _fun0005 }
 305:
            var3 = _closure1_slot12;
            var2 = {};
            var2['emojiSections'] = var1;
            var6 = {};
            var10 = _closure1_slot7;
            var10 = var10.EMOJI;
            var6['type'] = var10;
            var6['emojis'] = var9;
            var6['emojisDisabled'] = var8;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 7;
            var8 = var10[var8];
            var10 = var9.bind(var4)(var8);
            var9 = var10.getStringForEmojiCategory;
            var8 = _closure1_slot5;
            var8 = var8.PREMIUM_UPSELL;
            var8 = var9.bind(var10)(var8);
            var6['label'] = var8;
            var7 = _closure1_slot6;
            var7 = var7.PREMIUM_UPSELL;
            var6['footer'] = var7;
            var2['renderingData'] = var6;
            var2['rowSize'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function pushCategory(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var2 = var1.renderingData;
            var3 = var2.emojis;
            var2 = null;
            var2 = var2 != var3;
            if(!var2) { _fun0006_ip = 35; continue _fun0006 }
 24:
            var4 = var3.length;
            var3 = 0;
            var2 = var3 !== var4;
 35:
            if(!var2) { _fun0006_ip = 60; continue _fun0006 }
 38:
            var3 = var1.emojiSections;
            var2 = var3.push;
            var1 = var1.renderingData;
            var1 = var2.bind(var3)(var1);
 60:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function pushNativeCategory(arg1) {
        var1 = arg1;
        var3 = var1.emojiSections;
        var2 = var3.push;
        var1 = var1.renderingData;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot13 = var1;
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
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EmojiCategories;
    var _closure1_slot5 = var7;
    var4 = var4.EmojiCategoryTypes;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EmojiPickerRenderingDataType;
    var _closure1_slot7 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emoji_picker/native/components/useComputeEmojiPickerFunctions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useComputeEmojiPickerFunctions() {
        var4 = _closure1_slot4;
        var3 = var4.useState;
        var2 = function() {
            var1 = {};
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 8;
            var7 = var6[var3];
            var4 = undefined;
            var9 = var5.bind(var4)(var7);
            var8 = var9.cachedFunction;
            var7 = _closure1_slot10;
            var7 = var8.bind(var9)(var7);
            var1['computeCategories'] = var7;
            var3 = var6[var3];
            var4 = var5.bind(var4)(var3);
            var3 = var4.cachedFunction;
            var2 = _closure1_slot11;
            var2 = var3.bind(var4)(var2);
            var1['computeSearchResults'] = var2;
            return var1;
        };
        var4 = var3.bind(var4)(var2);
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = 1;
        var2 = var3.bind(var2)(var4, var1);
        var1 = 0;
        var1 = var2[var1];
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();