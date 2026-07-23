// discord_common/js/packages/tokens/modules/generated/generated-definitions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
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
            var9 = _closure1_slot1;
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
            var7 = _closure1_slot1;
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
    var _closure1_slot0 = var1;
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
    var _closure1_slot1 = var1;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = {};
    var1 = {};
    var4 = {};
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0004_ip = 36; continue _fun0004 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0004_ip = 37; continue _fun0004 }
case 41:
            _fun0004_ip = 38; continue _fun0004;
case 39:
            var1 = 8;
            return var1;
case 37:
            var1 = 2147483647;
            return var1;
case 36:
            var1 = 2147483647;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['BORDER_RADIUS'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0005_ip = 36; continue _fun0005 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0005_ip = 37; continue _fun0005 }
case 41:
            _fun0005_ip = 38; continue _fun0005;
case 39:
            var1 = 12;
            return var1;
case 37:
            var1 = 2147483647;
            return var1;
case 36:
            var1 = 2147483647;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['BORDER_RADIUS_LG'] = var5;
    var1['button'] = var4;
    var4 = {};
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var2 = var1.density;
            var1 = 'compact';
            if(!(var1 !== var2)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var1 = 'default';
            if(!(var1 !== var2)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var1 = 'cozy';
            if(!(var1 === var2)) { _fun0006_ip = 44; continue _fun0006 }
case 46:
            var1 = 28;
            return var1;
case 44:
            var1 = 24;
            return var1;
case 42:
            var1 = 20;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['NAME_LINE_HEIGHT'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = var1.density;
            var1 = 'compact';
            if(!(var1 !== var2)) { _fun0007_ip = 42; continue _fun0007 }
case 43:
            var1 = 'default';
            if(!(var1 !== var2)) { _fun0007_ip = 44; continue _fun0007 }
case 45:
            var1 = 'cozy';
            if(!(var1 === var2)) { _fun0007_ip = 44; continue _fun0007 }
case 46:
            var1 = 9;
            return var1;
case 44:
            var1 = 6;
            return var1;
case 42:
            var1 = 2;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['SPINE_INVERTED_OFFSET_TOP'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var2 = var1.density;
            var1 = 'compact';
            if(!(var1 !== var2)) { _fun0008_ip = 42; continue _fun0008 }
case 43:
            var1 = 'default';
            if(!(var1 !== var2)) { _fun0008_ip = 44; continue _fun0008 }
case 45:
            var1 = 'cozy';
            if(!(var1 === var2)) { _fun0008_ip = 44; continue _fun0008 }
case 46:
            var1 = 28;
            return var1;
case 44:
            var1 = 24;
            return var1;
case 42:
            var1 = 20;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['SPINE_OFFSET_LEFT'] = var5;
    var1['channels'] = var4;
    var4 = {};
    var5 = {};
    var7 = function resolve() {
        var1 = 40;
        return var1;
    };
    var5['resolve'] = var7;
    var4['AVATAR_SIZE'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 20;
        return var1;
    };
    var5['resolve'] = var7;
    var4['INPUT_ICON_SIZE'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = '1.375rem';
        return var1;
    };
    var5['resolve'] = var7;
    var4['MARKUP_LINE_HEIGHT'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 8;
        return var1;
    };
    var5['resolve'] = var7;
    var4['RESIZE_HANDLE_WIDTH'] = var5;
    var1['chat'] = var4;
    var4 = {};
    var5 = {};
    var7 = function resolve() {
        var1 = 40;
        return var1;
    };
    var5['resolve'] = var7;
    var4['INPUT_HEIGHT_MD'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 32;
        return var1;
    };
    var5['resolve'] = var7;
    var4['INPUT_HEIGHT_SM'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 40;
        return var1;
    };
    var5['resolve'] = var7;
    var4['ITEM_HEIGHT_MD'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 32;
        return var1;
    };
    var5['resolve'] = var7;
    var4['ITEM_HEIGHT_SM'] = var5;
    var1['control'] = var4;
    var4 = {};
    var5 = {};
    var7 = function resolve() {
        var1 = 44;
        return var1;
    };
    var5['resolve'] = var7;
    var4['INPUT_HEIGHT'] = var5;
    var1['form'] = var4;
    var4 = {};
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var1.density;
            var4 = var3.length;
            var1 = 0;
            if(!(var1 !== var4)) { _fun0009_ip = 47; continue _fun0009 }
case 48:
            var1 = _closure1_slot0;
            var6 = undefined;
            var5 = var1.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var1 = var3.done;
            var4 = 'refresh-fast-follow-avatars';
            if(var1) { _fun0009_ip = 49; continue _fun0009 }
case 50:
            var1 = var3.value;
            if(!(var4 !== var1)) { _fun0009_ip = 51; continue _fun0009 }
case 30:
            var7 = var5.bind(var6)();
            var1 = var7.done;
            var3 = var7;
            if(var1) { _fun0009_ip = 49; continue _fun0009 }
case 52:
            _fun0009_ip = 50; continue _fun0009;
case 51:
            var1 = 'compact';
            if(!(var1 !== var2)) { _fun0009_ip = 53; continue _fun0009 }
case 54:
            var1 = 'default';
            if(!(var1 !== var2)) { _fun0009_ip = 13; continue _fun0009 }
case 55:
            var1 = 'cozy';
            if(!(var1 === var2)) { _fun0009_ip = 53; continue _fun0009 }
case 13:
            var1 = 44;
            return var1;
case 53:
            var1 = 40;
            return var1;
case 49:
            var1 = 40;
            return var1;
case 47:
            var1 = 40;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['AVATAR_SIZE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var1.density;
            var4 = var3.length;
            var1 = 0;
            if(!(var1 !== var4)) { _fun0010_ip = 47; continue _fun0010 }
case 48:
            var1 = _closure1_slot0;
            var6 = undefined;
            var5 = var1.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var1 = var3.done;
            var4 = 'refresh-fast-follow-avatars';
            if(var1) { _fun0010_ip = 49; continue _fun0010 }
case 50:
            var1 = var3.value;
            if(!(var4 !== var1)) { _fun0010_ip = 51; continue _fun0010 }
case 30:
            var7 = var5.bind(var6)();
            var1 = var7.done;
            var3 = var7;
            if(var1) { _fun0010_ip = 49; continue _fun0010 }
case 52:
            _fun0010_ip = 50; continue _fun0010;
case 51:
            var1 = 'compact';
            if(!(var1 !== var2)) { _fun0010_ip = 53; continue _fun0010 }
case 54:
            var1 = 'default';
            if(!(var1 !== var2)) { _fun0010_ip = 13; continue _fun0010 }
case 55:
            var1 = 'cozy';
            if(!(var1 === var2)) { _fun0010_ip = 53; continue _fun0010 }
case 13:
            var1 = 52;
            return var1;
case 53:
            var1 = 48;
            return var1;
case 49:
            var1 = 48;
            return var1;
case 47:
            var1 = 48;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['FOLDER_SIZE'] = var5;
    var1['guildbar'] = var4;
    var4 = {};
    var5 = {};
    var7 = function resolve() {
        var1 = 32;
        return var1;
    };
    var5['resolve'] = var7;
    var4['SIZE_LG'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 24;
        return var1;
    };
    var5['resolve'] = var7;
    var4['SIZE_MD'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 18;
        return var1;
    };
    var5['resolve'] = var7;
    var4['SIZE_SM'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 16;
        return var1;
    };
    var5['resolve'] = var7;
    var4['SIZE_XS'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 12;
        return var1;
    };
    var5['resolve'] = var7;
    var4['SIZE_XXS'] = var5;
    var1['icon'] = var4;
    var4 = {};
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0011_ip = 9; continue _fun0011 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0011_ip = 37; continue _fun0011 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0011_ip = 39; continue _fun0011 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0011_ip = 37; continue _fun0011 }
case 41:
            _fun0011_ip = 38; continue _fun0011;
case 39:
            var1 = 12;
            return var1;
case 37:
            var1 = 24;
            return var1;
case 9:
            var1 = 24;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['BOUNTY_TILE_BORDER_RADIUS'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 16;
        return var1;
    };
    var5['resolve'] = var7;
    var4['CARD_DEFAULT_RADIUS'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0012_ip = 56; continue _fun0012 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0012_ip = 57; continue _fun0012 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0012_ip = 39; continue _fun0012 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0012_ip = 57; continue _fun0012 }
case 41:
            _fun0012_ip = 38; continue _fun0012;
case 39:
            return var1;
case 57:
            var1 = 12;
            return var1;
case 56:
            var1 = 12;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHANNEL_DETAILS_NAV_BUTTONS_GAP'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0013_ip = 58; continue _fun0013 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0013_ip = 52; continue _fun0013 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0013_ip = 39; continue _fun0013 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0013_ip = 52; continue _fun0013 }
case 41:
            _fun0013_ip = 38; continue _fun0013;
case 39:
            var1 = 'lg';
            return var1;
case 52:
            var1 = 'sm';
            return var1;
case 58:
            var1 = 'sm';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0014_ip = 59; continue _fun0014 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0014_ip = 51; continue _fun0014 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0014_ip = 39; continue _fun0014 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0014_ip = 51; continue _fun0014 }
case 41:
            _fun0014_ip = 38; continue _fun0014;
case 39:
            var1 = 'icon-only';
            return var1;
case 51:
            var1 = 'tertiary';
            return var1;
case 59:
            var1 = 'tertiary';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0015_ip = 60; continue _fun0015 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh-floating';
            if(var2) { _fun0015_ip = 61; continue _fun0015 }
case 62:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0015_ip = 57; continue _fun0015 }
case 7:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0015_ip = 61; continue _fun0015 }
case 39:
            _fun0015_ip = 62; continue _fun0015;
case 57:
            return var1;
case 61:
            var1 = 8;
            return var1;
case 60:
            var1 = 8;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHANNEL_DRAWER_CORNER_RADIUS'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0016_ip = 60; continue _fun0016 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh-floating';
            if(var2) { _fun0016_ip = 56; continue _fun0016 }
case 62:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0016_ip = 57; continue _fun0016 }
case 7:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0016_ip = 56; continue _fun0016 }
case 39:
            _fun0016_ip = 62; continue _fun0016;
case 57:
            var2 = 1;
            return var2;
case 56:
            return var1;
case 60:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHANNEL_DRAWER_DIVIDER_WIDTH'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0017_ip = 60; continue _fun0017 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh-floating';
            if(var2) { _fun0017_ip = 61; continue _fun0017 }
case 62:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0017_ip = 57; continue _fun0017 }
case 7:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0017_ip = 61; continue _fun0017 }
case 39:
            _fun0017_ip = 62; continue _fun0017;
case 57:
            return var1;
case 61:
            var1 = 8;
            return var1;
case 60:
            var1 = 8;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHANNEL_DRAWER_SPACING'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0018_ip = 58; continue _fun0018 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0018_ip = 52; continue _fun0018 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0018_ip = 39; continue _fun0018 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0018_ip = 52; continue _fun0018 }
case 41:
            _fun0018_ip = 38; continue _fun0018;
case 39:
            var1 = 'xs';
            return var1;
case 52:
            var1 = 'md';
            return var1;
case 58:
            var1 = 'md';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHANNEL_HEADER_ICON_SIZE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0019_ip = 9; continue _fun0019 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0019_ip = 37; continue _fun0019 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0019_ip = 39; continue _fun0019 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0019_ip = 37; continue _fun0019 }
case 41:
            _fun0019_ip = 38; continue _fun0019;
case 39:
            var1 = 8;
            return var1;
case 37:
            var1 = 12;
            return var1;
case 9:
            var1 = 12;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHANNEL_ITEM_RADIUS'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0020_ip = 54; continue _fun0020 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0020_ip = 51; continue _fun0020 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0020_ip = 39; continue _fun0020 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0020_ip = 51; continue _fun0020 }
case 41:
            _fun0020_ip = 38; continue _fun0020;
case 39:
            var1 = 'text-sm/medium';
            return var1;
case 51:
            var1 = 'text-xs/medium';
            return var1;
case 54:
            var1 = 'text-xs/medium';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHANNEL_LIST_SUBTITLE_TEXT_STYLE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0021_ip = 54; continue _fun0021 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0021_ip = 51; continue _fun0021 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0021_ip = 39; continue _fun0021 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0021_ip = 51; continue _fun0021 }
case 41:
            _fun0021_ip = 38; continue _fun0021;
case 39:
            var1 = 'heading-lg/semibold';
            return var1;
case 51:
            var1 = 'redesign/heading-18/bold';
            return var1;
case 54:
            var1 = 'redesign/heading-18/bold';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHANNEL_LIST_TITLE_TEXT_STYLE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0022_ip = 56; continue _fun0022 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0022_ip = 57; continue _fun0022 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0022_ip = 39; continue _fun0022 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0022_ip = 57; continue _fun0022 }
case 41:
            _fun0022_ip = 38; continue _fun0022;
case 39:
            return var1;
case 57:
            var1 = 1;
            return var1;
case 56:
            var1 = 1;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHANNEL_NAME_CHANNEL_BORDER_WIDTH'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0023_ip = 9; continue _fun0023 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0023_ip = 37; continue _fun0023 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0023_ip = 39; continue _fun0023 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0023_ip = 37; continue _fun0023 }
case 41:
            _fun0023_ip = 38; continue _fun0023;
case 39:
            var1 = 8;
            return var1;
case 37:
            var1 = 12;
            return var1;
case 9:
            var1 = 12;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHANNEL_NAME_CHANNEL_ICON_RADIUS'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0024_ip = 54; continue _fun0024 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0024_ip = 51; continue _fun0024 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0024_ip = 39; continue _fun0024 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0024_ip = 51; continue _fun0024 }
case 41:
            _fun0024_ip = 38; continue _fun0024;
case 39:
            var1 = 'background-base-lower';
            return var1;
case 51:
            var1 = 'background-base-low';
            return var1;
case 54:
            var1 = 'background-base-low';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHANNEL_SAFE_AREA_BOTTOM_BACKGROUND'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0025_ip = 63; continue _fun0025 }
case 29:
            var2 = _closure1_slot0;
            var8 = undefined;
            var7 = var2.bind(var8)(var3);
            var3 = var7.bind(var8)();
            var2 = var3.done;
            var6 = 'mobile-visual-refresh-floating';
            var5 = 'mobile-visual-refresh-legacy-send-button';
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0025_ip = 64; continue _fun0025 }
case 65:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0025_ip = 66; continue _fun0025 }
case 67:
            if(!(var5 !== var2)) { _fun0025_ip = 66; continue _fun0025 }
case 68:
            if(!(var6 !== var2)) { _fun0025_ip = 11; continue _fun0025 }
case 69:
            var9 = var7.bind(var8)();
            var2 = var9.done;
            var3 = var9;
            if(var2) { _fun0025_ip = 64; continue _fun0025 }
case 70:
            _fun0025_ip = 65; continue _fun0025;
case 11:
            var2 = 10;
            return var2;
case 66:
            var2 = 8;
            return var2;
case 64:
            return var1;
case 63:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_ACTION_BUTTON_GAP'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0026_ip = 56; continue _fun0026 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0026_ip = 57; continue _fun0026 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0026_ip = 39; continue _fun0026 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0026_ip = 57; continue _fun0026 }
case 41:
            _fun0026_ip = 38; continue _fun0026;
case 39:
            return var1;
case 57:
            var1 = 4;
            return var1;
case 56:
            var1 = 4;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_ACTION_BUTTON_MARGIN'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0027_ip = 9; continue _fun0027 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0027_ip = 37; continue _fun0027 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0027_ip = 39; continue _fun0027 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0027_ip = 37; continue _fun0027 }
case 41:
            _fun0027_ip = 38; continue _fun0027;
case 39:
            var1 = 32;
            return var1;
case 37:
            var1 = 40;
            return var1;
case 9:
            var1 = 40;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_ACTION_BUTTON_SIZE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0028_ip = 54; continue _fun0028 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0028_ip = 51; continue _fun0028 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0028_ip = 39; continue _fun0028 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0028_ip = 51; continue _fun0028 }
case 41:
            _fun0028_ip = 38; continue _fun0028;
case 39:
            var1 = 'icon-strong';
            return var1;
case 51:
            var1 = 'text-brand';
            return var1;
case 54:
            var1 = 'text-brand';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_ACTION_ICON_ACTIVE_TINT'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0029_ip = 9; continue _fun0029 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0029_ip = 37; continue _fun0029 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0029_ip = 39; continue _fun0029 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0029_ip = 37; continue _fun0029 }
case 41:
            _fun0029_ip = 38; continue _fun0029;
case 39:
            var1 = 20;
            return var1;
case 37:
            var1 = 24;
            return var1;
case 9:
            var1 = 24;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_ACTION_ICON_PIXEL_SIZE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0030_ip = 9; continue _fun0030 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0030_ip = 37; continue _fun0030 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0030_ip = 39; continue _fun0030 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0030_ip = 37; continue _fun0030 }
case 41:
            _fun0030_ip = 38; continue _fun0030;
case 39:
            var1 = 8;
            return var1;
case 37:
            var1 = 24;
            return var1;
case 9:
            var1 = 24;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_BORDER_RADIUS'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 44;
        return var1;
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0031_ip = 56; continue _fun0031 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0031_ip = 37; continue _fun0031 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0031_ip = 39; continue _fun0031 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0031_ip = 37; continue _fun0031 }
case 41:
            _fun0031_ip = 38; continue _fun0031;
case 39:
            var2 = 1;
            return var2;
case 37:
            return var1;
case 56:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_COMMAND_CATEGORIES_BORDER_TOP_WIDTH'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0032_ip = 9; continue _fun0032 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0032_ip = 37; continue _fun0032 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0032_ip = 39; continue _fun0032 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0032_ip = 37; continue _fun0032 }
case 41:
            _fun0032_ip = 38; continue _fun0032;
case 39:
            var1 = 16;
            return var1;
case 37:
            var1 = 8;
            return var1;
case 9:
            var1 = 8;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0033_ip = 60; continue _fun0033 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh-floating';
            if(var2) { _fun0033_ip = 56; continue _fun0033 }
case 62:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0033_ip = 57; continue _fun0033 }
case 7:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0033_ip = 56; continue _fun0033 }
case 39:
            _fun0033_ip = 62; continue _fun0033;
case 57:
            var2 = 8;
            return var2;
case 56:
            return var1;
case 60:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_CONTEXT_BAR_GAP'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0034_ip = 60; continue _fun0034 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh-floating';
            if(var2) { _fun0034_ip = 56; continue _fun0034 }
case 62:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0034_ip = 57; continue _fun0034 }
case 7:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0034_ip = 56; continue _fun0034 }
case 39:
            _fun0034_ip = 62; continue _fun0034;
case 57:
            var2 = 12;
            return var2;
case 56:
            return var1;
case 60:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_CONTEXT_BAR_PADDING_HORIZONTAL'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0035_ip = 60; continue _fun0035 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh-floating';
            if(var2) { _fun0035_ip = 56; continue _fun0035 }
case 62:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0035_ip = 57; continue _fun0035 }
case 7:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0035_ip = 56; continue _fun0035 }
case 39:
            _fun0035_ip = 62; continue _fun0035;
case 57:
            var2 = 8;
            return var2;
case 56:
            return var1;
case 60:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_CONTEXT_BAR_PADDING_VERTICAL'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0036_ip = 9; continue _fun0036 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0036_ip = 37; continue _fun0036 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0036_ip = 39; continue _fun0036 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0036_ip = 37; continue _fun0036 }
case 41:
            _fun0036_ip = 38; continue _fun0036;
case 39:
            var1 = 12;
            return var1;
case 37:
            var1 = 6;
            return var1;
case 9:
            var1 = 6;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_EXPRESSION_OFFSET_LEFT'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0037_ip = 9; continue _fun0037 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0037_ip = 37; continue _fun0037 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0037_ip = 39; continue _fun0037 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0037_ip = 37; continue _fun0037 }
case 41:
            _fun0037_ip = 38; continue _fun0037;
case 39:
            var1 = 10;
            return var1;
case 37:
            var1 = 6;
            return var1;
case 9:
            var1 = 6;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_EXPRESSION_OFFSET_TOP'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0038_ip = 60; continue _fun0038 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh-floating';
            if(var2) { _fun0038_ip = 56; continue _fun0038 }
case 62:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0038_ip = 57; continue _fun0038 }
case 7:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0038_ip = 56; continue _fun0038 }
case 39:
            _fun0038_ip = 62; continue _fun0038;
case 57:
            var2 = 1;
            return var2;
case 56:
            return var1;
case 60:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0039_ip = 60; continue _fun0039 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh-floating';
            if(var2) { _fun0039_ip = 56; continue _fun0039 }
case 62:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0039_ip = 57; continue _fun0039 }
case 7:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0039_ip = 56; continue _fun0039 }
case 39:
            _fun0039_ip = 62; continue _fun0039;
case 57:
            var2 = 8;
            return var2;
case 56:
            return var1;
case 60:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0040_ip = 60; continue _fun0040 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh-floating';
            if(var2) { _fun0040_ip = 56; continue _fun0040 }
case 62:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0040_ip = 57; continue _fun0040 }
case 7:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0040_ip = 56; continue _fun0040 }
case 39:
            _fun0040_ip = 62; continue _fun0040;
case 57:
            var2 = 16;
            return var2;
case 56:
            return var1;
case 60:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_HORIZONTAL'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0041_ip = 60; continue _fun0041 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh-floating';
            if(var2) { _fun0041_ip = 61; continue _fun0041 }
case 62:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0041_ip = 57; continue _fun0041 }
case 7:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0041_ip = 61; continue _fun0041 }
case 39:
            _fun0041_ip = 62; continue _fun0041;
case 57:
            return var1;
case 61:
            var1 = 4;
            return var1;
case 60:
            var1 = 4;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_FLOATING_ACCESSORY_PADDING_TOP'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0042_ip = 60; continue _fun0042 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh-floating';
            if(var2) { _fun0042_ip = 61; continue _fun0042 }
case 62:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0042_ip = 57; continue _fun0042 }
case 7:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0042_ip = 61; continue _fun0042 }
case 39:
            _fun0042_ip = 62; continue _fun0042;
case 57:
            return var1;
case 61:
            var1 = 1;
            return var1;
case 60:
            var1 = 1;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0043_ip = 60; continue _fun0043 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh-floating';
            if(var2) { _fun0043_ip = 56; continue _fun0043 }
case 62:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0043_ip = 57; continue _fun0043 }
case 7:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0043_ip = 56; continue _fun0043 }
case 39:
            _fun0043_ip = 62; continue _fun0043;
case 57:
            var2 = 16;
            return var2;
case 56:
            return var1;
case 60:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_FLOATING_BORDER_RADIUS'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0044_ip = 60; continue _fun0044 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh-floating';
            if(var2) { _fun0044_ip = 56; continue _fun0044 }
case 62:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0044_ip = 57; continue _fun0044 }
case 7:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0044_ip = 56; continue _fun0044 }
case 39:
            _fun0044_ip = 62; continue _fun0044;
case 57:
            var2 = 8;
            return var2;
case 56:
            return var1;
case 60:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_FLOATING_CONTENT_GAP'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0045_ip = 55; continue _fun0045 }
case 29:
            var2 = _closure1_slot0;
            var7 = undefined;
            var6 = var2.bind(var7)(var3);
            var3 = var6.bind(var7)();
            var2 = var3.done;
            var5 = 'mobile-visual-refresh-legacy-send-button';
            var4 = 'mobile-visual-refresh-floating';
            if(var2) { _fun0045_ip = 71; continue _fun0045 }
case 50:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0045_ip = 72; continue _fun0045 }
case 30:
            if(!(var5 !== var2)) { _fun0045_ip = 58; continue _fun0045 }
case 67:
            var8 = var6.bind(var7)();
            var2 = var8.done;
            var3 = var8;
            if(var2) { _fun0045_ip = 71; continue _fun0045 }
case 9:
            _fun0045_ip = 50; continue _fun0045;
case 58:
            var2 = 12;
            return var2;
case 72:
            var2 = 10;
            return var2;
case 71:
            return var1;
case 55:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0046_ip = 55; continue _fun0046 }
case 29:
            var2 = _closure1_slot0;
            var7 = undefined;
            var6 = var2.bind(var7)(var3);
            var3 = var6.bind(var7)();
            var2 = var3.done;
            var5 = 'mobile-visual-refresh-legacy-send-button';
            var4 = 'mobile-visual-refresh-floating';
            if(var2) { _fun0046_ip = 71; continue _fun0046 }
case 50:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0046_ip = 72; continue _fun0046 }
case 30:
            if(!(var5 !== var2)) { _fun0046_ip = 58; continue _fun0046 }
case 67:
            var8 = var6.bind(var7)();
            var2 = var8.done;
            var3 = var8;
            if(var2) { _fun0046_ip = 71; continue _fun0046 }
case 9:
            _fun0046_ip = 50; continue _fun0046;
case 58:
            var2 = 12;
            return var2;
case 72:
            var2 = 10;
            return var2;
case 71:
            return var1;
case 55:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0047_ip = 56; continue _fun0047 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0047_ip = 37; continue _fun0047 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0047_ip = 39; continue _fun0047 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0047_ip = 37; continue _fun0047 }
case 41:
            _fun0047_ip = 38; continue _fun0047;
case 39:
            var2 = 20;
            return var2;
case 37:
            return var1;
case 56:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0048_ip = 56; continue _fun0048 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0048_ip = 37; continue _fun0048 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0048_ip = 39; continue _fun0048 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0048_ip = 37; continue _fun0048 }
case 41:
            _fun0048_ip = 38; continue _fun0048;
case 39:
            var2 = 16;
            return var2;
case 37:
            return var1;
case 56:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_FLOATING_OFFSET_MINIMUM'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0049_ip = 56; continue _fun0049 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0049_ip = 37; continue _fun0049 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0049_ip = 39; continue _fun0049 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0049_ip = 37; continue _fun0049 }
case 41:
            _fun0049_ip = 38; continue _fun0049;
case 39:
            var2 = 56;
            return var2;
case 37:
            return var1;
case 56:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0050_ip = 56; continue _fun0050 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0050_ip = 37; continue _fun0050 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0050_ip = 39; continue _fun0050 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0050_ip = 37; continue _fun0050 }
case 41:
            _fun0050_ip = 38; continue _fun0050;
case 39:
            var2 = 36;
            return var2;
case 37:
            return var1;
case 56:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT_AT_BOTTOM'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0051_ip = 56; continue _fun0051 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0051_ip = 37; continue _fun0051 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0051_ip = 39; continue _fun0051 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0051_ip = 37; continue _fun0051 }
case 41:
            _fun0051_ip = 38; continue _fun0051;
case 39:
            var2 = 24;
            return var2;
case 37:
            return var1;
case 56:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_FLOATING_SCRIM_OFFSET_TOP'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0052_ip = 56; continue _fun0052 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0052_ip = 37; continue _fun0052 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0052_ip = 39; continue _fun0052 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0052_ip = 37; continue _fun0052 }
case 41:
            _fun0052_ip = 38; continue _fun0052;
case 39:
            var2 = 12;
            return var2;
case 37:
            return var1;
case 56:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_FLOATING_TYPING_GRADIENT_HEIGHT_REDUCED'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0053_ip = 54; continue _fun0053 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0053_ip = 51; continue _fun0053 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0053_ip = 39; continue _fun0053 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0053_ip = 51; continue _fun0053 }
case 41:
            _fun0053_ip = 38; continue _fun0053;
case 39:
            var1 = 'interactive-icon-default';
            return var1;
case 51:
            var1 = 'interactive-text-default';
            return var1;
case 54:
            var1 = 'interactive-text-default';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_ICON_DEFAULT_TINT'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0054_ip = 59; continue _fun0054 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0054_ip = 51; continue _fun0054 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0054_ip = 39; continue _fun0054 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0054_ip = 51; continue _fun0054 }
case 41:
            _fun0054_ip = 38; continue _fun0054;
case 39:
            var1 = 'small20';
            return var1;
case 51:
            var1 = 'medium';
            return var1;
case 59:
            var1 = 'medium';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_ICON_SIZE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0055_ip = 56; continue _fun0055 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0055_ip = 37; continue _fun0055 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0055_ip = 39; continue _fun0055 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0055_ip = 37; continue _fun0055 }
case 41:
            _fun0055_ip = 38; continue _fun0055;
case 39:
            var2 = 1;
            return var2;
case 37:
            return var1;
case 56:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_PILL_BORDER_WIDTH'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0056_ip = 9; continue _fun0056 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0056_ip = 37; continue _fun0056 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0056_ip = 39; continue _fun0056 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0056_ip = 37; continue _fun0056 }
case 41:
            _fun0056_ip = 38; continue _fun0056;
case 39:
            var1 = 8;
            return var1;
case 37:
            var1 = 4;
            return var1;
case 9:
            var1 = 4;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_PILL_MARGIN_HORIZONTAL'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0057_ip = 56; continue _fun0057 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0057_ip = 57; continue _fun0057 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0057_ip = 39; continue _fun0057 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0057_ip = 57; continue _fun0057 }
case 41:
            _fun0057_ip = 38; continue _fun0057;
case 39:
            return var1;
case 57:
            var1 = 2;
            return var1;
case 56:
            var1 = 2;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_PILL_PADDING'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0058_ip = 60; continue _fun0058 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh-floating';
            if(var2) { _fun0058_ip = 61; continue _fun0058 }
case 62:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0058_ip = 57; continue _fun0058 }
case 7:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0058_ip = 61; continue _fun0058 }
case 39:
            _fun0058_ip = 62; continue _fun0058;
case 57:
            return var1;
case 61:
            var1 = 4;
            return var1;
case 60:
            var1 = 4;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_REPLY_MENTION_ICON_MARGIN_RIGHT'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0059_ip = 58; continue _fun0059 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh-floating';
            if(var1) { _fun0059_ip = 56; continue _fun0059 }
case 62:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0059_ip = 57; continue _fun0059 }
case 7:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0059_ip = 56; continue _fun0059 }
case 39:
            _fun0059_ip = 62; continue _fun0059;
case 57:
            var1 = 16;
            return var1;
case 56:
            var1 = 20;
            return var1;
case 58:
            var1 = 20;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_REPLY_MENTION_ICON_SIZE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0060_ip = 73; continue _fun0060 }
case 29:
            var1 = _closure1_slot0;
            var7 = undefined;
            var6 = var1.bind(var7)(var2);
            var2 = var6.bind(var7)();
            var1 = var2.done;
            var5 = 'mobile-visual-refresh-floating';
            var4 = 'mobile-visual-refresh-legacy-send-button';
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0060_ip = 64; continue _fun0060 }
case 65:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0060_ip = 66; continue _fun0060 }
case 67:
            if(!(var4 !== var1)) { _fun0060_ip = 66; continue _fun0060 }
case 68:
            if(!(var5 !== var1)) { _fun0060_ip = 11; continue _fun0060 }
case 69:
            var8 = var6.bind(var7)();
            var1 = var8.done;
            var2 = var8;
            if(var1) { _fun0060_ip = 64; continue _fun0060 }
case 70:
            _fun0060_ip = 65; continue _fun0060;
case 11:
            var1 = 36;
            return var1;
case 66:
            var1 = 32;
            return var1;
case 64:
            var1 = 40;
            return var1;
case 73:
            var1 = 40;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_SEND_BUTTON_HEIGHT'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0061_ip = 74; continue _fun0061 }
case 29:
            var1 = _closure1_slot0;
            var7 = undefined;
            var6 = var1.bind(var7)(var2);
            var2 = var6.bind(var7)();
            var1 = var2.done;
            var5 = 'mobile-visual-refresh-legacy-send-button';
            var4 = 'mobile-visual-refresh-floating';
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0061_ip = 73; continue _fun0061 }
case 65:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0061_ip = 64; continue _fun0061 }
case 67:
            if(!(var4 !== var1)) { _fun0061_ip = 66; continue _fun0061 }
case 68:
            if(!(var5 !== var1)) { _fun0061_ip = 11; continue _fun0061 }
case 69:
            var8 = var6.bind(var7)();
            var1 = var8.done;
            var2 = var8;
            if(var1) { _fun0061_ip = 73; continue _fun0061 }
case 70:
            _fun0061_ip = 65; continue _fun0061;
case 11:
            var1 = 40;
            return var1;
case 66:
            var1 = 36;
            return var1;
case 64:
            var1 = 32;
            return var1;
case 73:
            var1 = 40;
            return var1;
case 74:
            var1 = 40;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_SEND_BUTTON_WIDTH'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0062_ip = 36; continue _fun0062 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0062_ip = 37; continue _fun0062 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0062_ip = 39; continue _fun0062 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0062_ip = 37; continue _fun0062 }
case 41:
            _fun0062_ip = 38; continue _fun0062;
case 39:
            var1 = 240;
            return var1;
case 37:
            var1 = 260;
            return var1;
case 36:
            var1 = 260;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['COACHMARK_BODY_WIDTH'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0063_ip = 9; continue _fun0063 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0063_ip = 37; continue _fun0063 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0063_ip = 39; continue _fun0063 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0063_ip = 37; continue _fun0063 }
case 41:
            _fun0063_ip = 38; continue _fun0063;
case 39:
            var1 = 16;
            return var1;
case 37:
            var1 = 12;
            return var1;
case 9:
            var1 = 12;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['COACHMARK_BUTTON_SPACING'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0064_ip = 9; continue _fun0064 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0064_ip = 37; continue _fun0064 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0064_ip = 39; continue _fun0064 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0064_ip = 37; continue _fun0064 }
case 41:
            _fun0064_ip = 38; continue _fun0064;
case 39:
            var1 = 4;
            return var1;
case 37:
            var1 = 8;
            return var1;
case 9:
            var1 = 8;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CONTROL_CHECKBOX_BORDER_RADIUS'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0065_ip = 72; continue _fun0065 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0065_ip = 58; continue _fun0065 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0065_ip = 39; continue _fun0065 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0065_ip = 58; continue _fun0065 }
case 41:
            _fun0065_ip = 38; continue _fun0065;
case 39:
            var1 = 1.2;
            return var1;
case 58:
            var1 = 2;
            return var1;
case 72:
            var1 = 2;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CONTROL_CHECKBOX_BORDER_WIDTH'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 24;
        return var1;
    };
    var5['resolve'] = var7;
    var4['CONTROL_CHECKBOX_SIZE_DEFAULT'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0066_ip = 72; continue _fun0066 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0066_ip = 58; continue _fun0066 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0066_ip = 39; continue _fun0066 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0066_ip = 58; continue _fun0066 }
case 41:
            _fun0066_ip = 38; continue _fun0066;
case 39:
            var1 = 1.2;
            return var1;
case 58:
            var1 = 2;
            return var1;
case 72:
            var1 = 2;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CONTROL_RADIO_ICON_BORDER_WIDTH'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0067_ip = 9; continue _fun0067 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0067_ip = 37; continue _fun0067 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0067_ip = 39; continue _fun0067 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0067_ip = 37; continue _fun0067 }
case 41:
            _fun0067_ip = 38; continue _fun0067;
case 39:
            var1 = 8;
            return var1;
case 37:
            var1 = 10;
            return var1;
case 9:
            var1 = 10;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 24;
        return var1;
    };
    var5['resolve'] = var7;
    var4['CONTROL_RADIO_ICON_SIZE_DEFAULT'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0068_ip = 9; continue _fun0068 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0068_ip = 37; continue _fun0068 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0068_ip = 39; continue _fun0068 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0068_ip = 37; continue _fun0068 }
case 41:
            _fun0068_ip = 38; continue _fun0068;
case 39:
            var1 = 28;
            return var1;
case 37:
            var1 = 32;
            return var1;
case 9:
            var1 = 32;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CONTROL_SWITCH_HEIGHT'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0069_ip = 9; continue _fun0069 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0069_ip = 37; continue _fun0069 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0069_ip = 39; continue _fun0069 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0069_ip = 37; continue _fun0069 }
case 41:
            _fun0069_ip = 38; continue _fun0069;
case 39:
            var1 = 28;
            return var1;
case 37:
            var1 = 16;
            return var1;
case 9:
            var1 = 16;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CONTROL_SWITCH_KNOB_CHECKED_OFFSET'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0070: for(var _fun0070_ip = 0; ; ) switch(_fun0070_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0070_ip = 9; continue _fun0070 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0070_ip = 37; continue _fun0070 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0070_ip = 39; continue _fun0070 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0070_ip = 37; continue _fun0070 }
case 41:
            _fun0070_ip = 38; continue _fun0070;
case 39:
            var1 = 20;
            return var1;
case 37:
            var1 = 24;
            return var1;
case 9:
            var1 = 24;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CONTROL_SWITCH_KNOB_SIZE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0071: for(var _fun0071_ip = 0; ; ) switch(_fun0071_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0071_ip = 9; continue _fun0071 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0071_ip = 37; continue _fun0071 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0071_ip = 39; continue _fun0071 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0071_ip = 37; continue _fun0071 }
case 41:
            _fun0071_ip = 38; continue _fun0071;
case 39:
            var1 = 56;
            return var1;
case 37:
            var1 = 48;
            return var1;
case 9:
            var1 = 48;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CONTROL_SWITCH_WIDTH'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0072: for(var _fun0072_ip = 0; ; ) switch(_fun0072_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0072_ip = 9; continue _fun0072 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0072_ip = 37; continue _fun0072 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0072_ip = 39; continue _fun0072 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0072_ip = 37; continue _fun0072 }
case 41:
            _fun0072_ip = 38; continue _fun0072;
case 39:
            var1 = 48;
            return var1;
case 37:
            var1 = 48;
            return var1;
case 9:
            var1 = 48;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['EMOJI_ROW_EMOJI_CONTAINER_SIZE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0073: for(var _fun0073_ip = 0; ; ) switch(_fun0073_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0073_ip = 9; continue _fun0073 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0073_ip = 37; continue _fun0073 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0073_ip = 39; continue _fun0073 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0073_ip = 37; continue _fun0073 }
case 41:
            _fun0073_ip = 38; continue _fun0073;
case 39:
            var1 = 22;
            return var1;
case 37:
            var1 = 28;
            return var1;
case 9:
            var1 = 28;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['EMOJI_ROW_EMOJI_FONT_SIZE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0074: for(var _fun0074_ip = 0; ; ) switch(_fun0074_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0074_ip = 9; continue _fun0074 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0074_ip = 37; continue _fun0074 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0074_ip = 39; continue _fun0074 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0074_ip = 37; continue _fun0074 }
case 41:
            _fun0074_ip = 38; continue _fun0074;
case 39:
            var1 = 28;
            return var1;
case 37:
            var1 = 33;
            return var1;
case 9:
            var1 = 33;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['EMOJI_ROW_EMOJI_LINE_HEIGHT'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0075: for(var _fun0075_ip = 0; ; ) switch(_fun0075_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0075_ip = 9; continue _fun0075 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0075_ip = 37; continue _fun0075 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0075_ip = 39; continue _fun0075 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0075_ip = 37; continue _fun0075 }
case 41:
            _fun0075_ip = 38; continue _fun0075;
case 39:
            var1 = 12;
            return var1;
case 37:
            var1 = 12;
            return var1;
case 9:
            var1 = 12;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['EMOJI_ROW_EMOJI_MIN_SPACING'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0076: for(var _fun0076_ip = 0; ; ) switch(_fun0076_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0076_ip = 9; continue _fun0076 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0076_ip = 37; continue _fun0076 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0076_ip = 39; continue _fun0076 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0076_ip = 37; continue _fun0076 }
case 41:
            _fun0076_ip = 38; continue _fun0076;
case 39:
            var1 = 24;
            return var1;
case 37:
            var1 = 28;
            return var1;
case 9:
            var1 = 28;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['EMOJI_ROW_EMOJI_SIZE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0077: for(var _fun0077_ip = 0; ; ) switch(_fun0077_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0077_ip = 56; continue _fun0077 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0077_ip = 37; continue _fun0077 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0077_ip = 39; continue _fun0077 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0077_ip = 37; continue _fun0077 }
case 41:
            _fun0077_ip = 38; continue _fun0077;
case 39:
            var2 = 16;
            return var2;
case 37:
            return var1;
case 56:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['GIFTING_SETTINGS_PADDING_HORIZONTAL'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0078: for(var _fun0078_ip = 0; ; ) switch(_fun0078_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0078_ip = 9; continue _fun0078 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0078_ip = 37; continue _fun0078 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0078_ip = 39; continue _fun0078 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0078_ip = 37; continue _fun0078 }
case 41:
            _fun0078_ip = 38; continue _fun0078;
case 39:
            var1 = 64;
            return var1;
case 37:
            var1 = 72;
            return var1;
case 9:
            var1 = 72;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['GROUP_AVATAR_SIZE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0079: for(var _fun0079_ip = 0; ; ) switch(_fun0079_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0079_ip = 9; continue _fun0079 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0079_ip = 37; continue _fun0079 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0079_ip = 39; continue _fun0079 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0079_ip = 37; continue _fun0079 }
case 41:
            _fun0079_ip = 38; continue _fun0079;
case 39:
            var1 = 6;
            return var1;
case 37:
            var1 = 4;
            return var1;
case 9:
            var1 = 4;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['GUILD_BAR_ITEM_MARGIN'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 8;
        return var1;
    };
    var5['resolve'] = var7;
    var4['GUILD_BAR_ITEM_PADDING'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 48;
        return var1;
    };
    var5['resolve'] = var7;
    var4['GUILD_BAR_ITEM_SIZE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0080: for(var _fun0080_ip = 0; ; ) switch(_fun0080_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0080_ip = 9; continue _fun0080 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0080_ip = 37; continue _fun0080 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0080_ip = 39; continue _fun0080 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0080_ip = 37; continue _fun0080 }
case 41:
            _fun0080_ip = 38; continue _fun0080;
case 39:
            var1 = 8;
            return var1;
case 37:
            var1 = 12;
            return var1;
case 9:
            var1 = 12;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['GUILD_FOLDER_BACKGROUND_LEFT'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0081: for(var _fun0081_ip = 0; ; ) switch(_fun0081_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0081_ip = 36; continue _fun0081 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0081_ip = 37; continue _fun0081 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0081_ip = 39; continue _fun0081 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0081_ip = 37; continue _fun0081 }
case 41:
            _fun0081_ip = 38; continue _fun0081;
case 39:
            var1 = 16;
            return var1;
case 37:
            var1 = 2147483647;
            return var1;
case 36:
            var1 = 2147483647;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['GUILD_FOLDER_BACKGROUND_RADIUS'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0082: for(var _fun0082_ip = 0; ; ) switch(_fun0082_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0082_ip = 56; continue _fun0082 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0082_ip = 37; continue _fun0082 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0082_ip = 39; continue _fun0082 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0082_ip = 37; continue _fun0082 }
case 41:
            _fun0082_ip = 38; continue _fun0082;
case 39:
            var2 = 8;
            return var2;
case 37:
            return var1;
case 56:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['GUILD_FOLDER_BACKGROUND_WIDTH_OFFSET'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 0.15;
        return var1;
    };
    var5['resolve'] = var7;
    var4['GUILD_FOLDER_COLOR_OPACITY'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 8;
        return var1;
    };
    var5['resolve'] = var7;
    var4['GUILD_FOLDER_PADDING'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 6;
        return var1;
    };
    var5['resolve'] = var7;
    var4['GUILD_FOLDER_PREVIEW_ICON_MARGIN'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 0.4;
        return var1;
    };
    var5['resolve'] = var7;
    var4['GUILD_FOLDER_PREVIEW_OPACITY'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0083: for(var _fun0083_ip = 0; ; ) switch(_fun0083_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0083_ip = 9; continue _fun0083 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0083_ip = 37; continue _fun0083 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0083_ip = 39; continue _fun0083 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0083_ip = 37; continue _fun0083 }
case 41:
            _fun0083_ip = 38; continue _fun0083;
case 39:
            var1 = 12;
            return var1;
case 37:
            var1 = 16;
            return var1;
case 9:
            var1 = 16;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['GUILD_ITEM_SELECTED_BORDER_RADIUS'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0084: for(var _fun0084_ip = 0; ; ) switch(_fun0084_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0084_ip = 59; continue _fun0084 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0084_ip = 51; continue _fun0084 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0084_ip = 39; continue _fun0084 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0084_ip = 51; continue _fun0084 }
case 41:
            _fun0084_ip = 38; continue _fun0084;
case 39:
            var1 = 'heading-lg/semibold';
            return var1;
case 51:
            var1 = 'heading-md/bold';
            return var1;
case 59:
            var1 = 'heading-md/bold';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['HEADER_TITLE_TEXT_STYLE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0085: for(var _fun0085_ip = 0; ; ) switch(_fun0085_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0085_ip = 56; continue _fun0085 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0085_ip = 37; continue _fun0085 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0085_ip = 39; continue _fun0085 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0085_ip = 37; continue _fun0085 }
case 41:
            _fun0085_ip = 38; continue _fun0085;
case 39:
            var2 = 1;
            return var2;
case 37:
            return var1;
case 56:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['INPUT_FIELD_BORDER_WIDTH'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0086: for(var _fun0086_ip = 0; ; ) switch(_fun0086_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0086_ip = 9; continue _fun0086 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0086_ip = 37; continue _fun0086 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0086_ip = 39; continue _fun0086 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0086_ip = 37; continue _fun0086 }
case 41:
            _fun0086_ip = 38; continue _fun0086;
case 39:
            var1 = 4;
            return var1;
case 37:
            var1 = 8;
            return var1;
case 9:
            var1 = 8;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['INPUT_FIELD_PADDING_VERTICAL_SM_IOS'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0087: for(var _fun0087_ip = 0; ; ) switch(_fun0087_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0087_ip = 9; continue _fun0087 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0087_ip = 37; continue _fun0087 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0087_ip = 39; continue _fun0087 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0087_ip = 37; continue _fun0087 }
case 41:
            _fun0087_ip = 38; continue _fun0087;
case 39:
            var1 = 12;
            return var1;
case 37:
            var1 = 16;
            return var1;
case 9:
            var1 = 16;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['INPUT_FIELD_RADIUS_LG'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0088: for(var _fun0088_ip = 0; ; ) switch(_fun0088_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0088_ip = 9; continue _fun0088 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0088_ip = 37; continue _fun0088 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0088_ip = 39; continue _fun0088 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0088_ip = 37; continue _fun0088 }
case 41:
            _fun0088_ip = 38; continue _fun0088;
case 39:
            var1 = 8;
            return var1;
case 37:
            var1 = 12;
            return var1;
case 9:
            var1 = 12;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['INPUT_FIELD_RADIUS_MD'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0089: for(var _fun0089_ip = 0; ; ) switch(_fun0089_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0089_ip = 9; continue _fun0089 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0089_ip = 37; continue _fun0089 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0089_ip = 39; continue _fun0089 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0089_ip = 37; continue _fun0089 }
case 41:
            _fun0089_ip = 38; continue _fun0089;
case 39:
            var1 = 8;
            return var1;
case 37:
            var1 = 12;
            return var1;
case 9:
            var1 = 12;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['INPUT_FIELD_RADIUS_SM'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0090: for(var _fun0090_ip = 0; ; ) switch(_fun0090_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0090_ip = 36; continue _fun0090 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0090_ip = 37; continue _fun0090 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0090_ip = 39; continue _fun0090 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0090_ip = 37; continue _fun0090 }
case 41:
            _fun0090_ip = 38; continue _fun0090;
case 39:
            var1 = 8;
            return var1;
case 37:
            var1 = 2147483647;
            return var1;
case 36:
            var1 = 2147483647;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['INPUT_FIELD_ROUND_RADIUS'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0091: for(var _fun0091_ip = 0; ; ) switch(_fun0091_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0091_ip = 59; continue _fun0091 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0091_ip = 51; continue _fun0091 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0091_ip = 39; continue _fun0091 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0091_ip = 51; continue _fun0091 }
case 41:
            _fun0091_ip = 38; continue _fun0091;
case 39:
            var1 = 'text-md/normal';
            return var1;
case 51:
            var1 = 'text-md/medium';
            return var1;
case 59:
            var1 = 'text-md/medium';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['INPUT_FIELD_TEXT_STYLE_LG'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0092: for(var _fun0092_ip = 0; ; ) switch(_fun0092_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0092_ip = 54; continue _fun0092 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0092_ip = 51; continue _fun0092 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0092_ip = 39; continue _fun0092 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0092_ip = 51; continue _fun0092 }
case 41:
            _fun0092_ip = 38; continue _fun0092;
case 39:
            var1 = 'text-md/normal';
            return var1;
case 51:
            var1 = 'text-sm/medium';
            return var1;
case 54:
            var1 = 'text-sm/medium';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['INPUT_FIELD_TEXT_STYLE_MD'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0093: for(var _fun0093_ip = 0; ; ) switch(_fun0093_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0093_ip = 54; continue _fun0093 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0093_ip = 51; continue _fun0093 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0093_ip = 39; continue _fun0093 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0093_ip = 51; continue _fun0093 }
case 41:
            _fun0093_ip = 38; continue _fun0093;
case 39:
            var1 = 'text-xs/normal';
            return var1;
case 51:
            var1 = 'text-xs/medium';
            return var1;
case 54:
            var1 = 'text-xs/medium';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['INPUT_FIELD_TEXT_STYLE_SM'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0094: for(var _fun0094_ip = 0; ; ) switch(_fun0094_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0094_ip = 9; continue _fun0094 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0094_ip = 37; continue _fun0094 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0094_ip = 39; continue _fun0094 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0094_ip = 37; continue _fun0094 }
case 41:
            _fun0094_ip = 38; continue _fun0094;
case 39:
            var1 = 8;
            return var1;
case 37:
            var1 = 12;
            return var1;
case 9:
            var1 = 12;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['JUMP_TO_PRESENT_BOTTOM_SPACING'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 40;
        return var1;
    };
    var5['resolve'] = var7;
    var4['JUMP_TO_PRESENT_BUTTON_SIZE'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 20;
        return var1;
    };
    var5['resolve'] = var7;
    var4['JUMP_TO_PRESENT_ICON_SIZE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0095: for(var _fun0095_ip = 0; ; ) switch(_fun0095_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0095_ip = 9; continue _fun0095 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0095_ip = 37; continue _fun0095 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0095_ip = 39; continue _fun0095 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0095_ip = 37; continue _fun0095 }
case 41:
            _fun0095_ip = 38; continue _fun0095;
case 39:
            var1 = 16;
            return var1;
case 37:
            var1 = 12;
            return var1;
case 9:
            var1 = 12;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['JUMP_TO_PRESENT_RIGHT_SPACING'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0096: for(var _fun0096_ip = 0; ; ) switch(_fun0096_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0096_ip = 36; continue _fun0096 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0096_ip = 37; continue _fun0096 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0096_ip = 39; continue _fun0096 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0096_ip = 37; continue _fun0096 }
case 41:
            _fun0096_ip = 38; continue _fun0096;
case 39:
            var1 = 16;
            return var1;
case 37:
            var1 = 2147483647;
            return var1;
case 36:
            var1 = 2147483647;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['MEDIA_KEYBOARD_BAR_BORDER_RADIUS'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0097: for(var _fun0097_ip = 0; ; ) switch(_fun0097_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0097_ip = 56; continue _fun0097 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0097_ip = 37; continue _fun0097 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0097_ip = 39; continue _fun0097 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0097_ip = 37; continue _fun0097 }
case 41:
            _fun0097_ip = 38; continue _fun0097;
case 39:
            var2 = 1;
            return var2;
case 37:
            return var1;
case 56:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['MEDIA_KEYBOARD_BAR_BORDER_WIDTH'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0098: for(var _fun0098_ip = 0; ; ) switch(_fun0098_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0098_ip = 56; continue _fun0098 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0098_ip = 57; continue _fun0098 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0098_ip = 39; continue _fun0098 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0098_ip = 57; continue _fun0098 }
case 41:
            _fun0098_ip = 38; continue _fun0098;
case 39:
            return var1;
case 57:
            var1 = 24;
            return var1;
case 56:
            var1 = 24;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['MEDIA_KEYBOARD_BAR_BUTTONS_MARGIN_HORIZONTAL'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0099: for(var _fun0099_ip = 0; ; ) switch(_fun0099_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0099_ip = 9; continue _fun0099 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0099_ip = 37; continue _fun0099 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0099_ip = 39; continue _fun0099 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0099_ip = 37; continue _fun0099 }
case 41:
            _fun0099_ip = 38; continue _fun0099;
case 39:
            var1 = 4;
            return var1;
case 37:
            var1 = 16;
            return var1;
case 9:
            var1 = 16;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['MEDIA_KEYBOARD_BAR_GAP'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0100: for(var _fun0100_ip = 0; ; ) switch(_fun0100_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0100_ip = 9; continue _fun0100 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0100_ip = 37; continue _fun0100 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0100_ip = 39; continue _fun0100 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0100_ip = 37; continue _fun0100 }
case 41:
            _fun0100_ip = 38; continue _fun0100;
case 39:
            var1 = 12;
            return var1;
case 37:
            var1 = 16;
            return var1;
case 9:
            var1 = 16;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['MEDIA_KEYBOARD_BAR_MARGIN_HORIZONTAL'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0101: for(var _fun0101_ip = 0; ; ) switch(_fun0101_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0101_ip = 56; continue _fun0101 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0101_ip = 37; continue _fun0101 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0101_ip = 39; continue _fun0101 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0101_ip = 37; continue _fun0101 }
case 41:
            _fun0101_ip = 38; continue _fun0101;
case 39:
            var2 = 8;
            return var2;
case 37:
            return var1;
case 56:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['MEDIA_KEYBOARD_BAR_PADDING_HORIZONTAL'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0102: for(var _fun0102_ip = 0; ; ) switch(_fun0102_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0102_ip = 56; continue _fun0102 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0102_ip = 37; continue _fun0102 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0102_ip = 39; continue _fun0102 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0102_ip = 37; continue _fun0102 }
case 41:
            _fun0102_ip = 38; continue _fun0102;
case 39:
            var2 = 8;
            return var2;
case 37:
            return var1;
case 56:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['MEDIA_KEYBOARD_BUTTON_BORDER_RADIUS'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0103: for(var _fun0103_ip = 0; ; ) switch(_fun0103_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0103_ip = 54; continue _fun0103 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0103_ip = 51; continue _fun0103 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0103_ip = 39; continue _fun0103 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0103_ip = 51; continue _fun0103 }
case 41:
            _fun0103_ip = 38; continue _fun0103;
case 39:
            var1 = 'icon-default';
            return var1;
case 51:
            var1 = 'icon-default';
            return var1;
case 54:
            var1 = 'icon-default';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['MEDIA_KEYBOARD_BUTTON_ICON_COLOR_ACTIVE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0104: for(var _fun0104_ip = 0; ; ) switch(_fun0104_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0104_ip = 56; continue _fun0104 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0104_ip = 37; continue _fun0104 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0104_ip = 39; continue _fun0104 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0104_ip = 37; continue _fun0104 }
case 41:
            _fun0104_ip = 38; continue _fun0104;
case 39:
            var2 = 4;
            return var2;
case 37:
            return var1;
case 56:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['MEDIA_KEYBOARD_BUTTON_PADDING'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0105: for(var _fun0105_ip = 0; ; ) switch(_fun0105_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0105_ip = 54; continue _fun0105 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0105_ip = 51; continue _fun0105 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0105_ip = 39; continue _fun0105 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0105_ip = 51; continue _fun0105 }
case 41:
            _fun0105_ip = 38; continue _fun0105;
case 39:
            var1 = 'text-default';
            return var1;
case 51:
            var1 = 'text-default';
            return var1;
case 54:
            var1 = 'text-default';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['MEDIA_KEYBOARD_BUTTON_TEXT_COLOR_ACTIVE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0106: for(var _fun0106_ip = 0; ; ) switch(_fun0106_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0106_ip = 54; continue _fun0106 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0106_ip = 51; continue _fun0106 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0106_ip = 39; continue _fun0106 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0106_ip = 51; continue _fun0106 }
case 41:
            _fun0106_ip = 38; continue _fun0106;
case 39:
            var1 = 'text-xs/medium';
            return var1;
case 51:
            var1 = 'text-xs/semibold';
            return var1;
case 54:
            var1 = 'text-xs/semibold';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['MEDIA_KEYBOARD_BUTTON_TEXT_VARIANT'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0107: for(var _fun0107_ip = 0; ; ) switch(_fun0107_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0107_ip = 56; continue _fun0107 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0107_ip = 37; continue _fun0107 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0107_ip = 39; continue _fun0107 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0107_ip = 37; continue _fun0107 }
case 41:
            _fun0107_ip = 38; continue _fun0107;
case 39:
            var2 = 8;
            return var2;
case 37:
            return var1;
case 56:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['MEDIA_KEYBOARD_SEND_VERTICAL_INSET'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0108: for(var _fun0108_ip = 0; ; ) switch(_fun0108_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0108_ip = 9; continue _fun0108 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0108_ip = 37; continue _fun0108 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0108_ip = 39; continue _fun0108 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0108_ip = 37; continue _fun0108 }
case 41:
            _fun0108_ip = 38; continue _fun0108;
case 39:
            var1 = 12;
            return var1;
case 37:
            var1 = 8;
            return var1;
case 9:
            var1 = 8;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['MESSAGES_HEADER_BUTTON_GAP'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 'row';
        return var1;
    };
    var5['resolve'] = var7;
    var4['MESSAGES_HEADER_BUTTON_LAYOUT'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0109: for(var _fun0109_ip = 0; ; ) switch(_fun0109_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0109_ip = 9; continue _fun0109 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0109_ip = 37; continue _fun0109 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0109_ip = 39; continue _fun0109 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0109_ip = 37; continue _fun0109 }
case 41:
            _fun0109_ip = 38; continue _fun0109;
case 39:
            var1 = 12;
            return var1;
case 37:
            var1 = 16;
            return var1;
case 9:
            var1 = 16;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['MESSAGES_HEADER_PADDING_BOTTOM'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0110: for(var _fun0110_ip = 0; ; ) switch(_fun0110_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0110_ip = 9; continue _fun0110 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0110_ip = 37; continue _fun0110 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0110_ip = 39; continue _fun0110 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0110_ip = 37; continue _fun0110 }
case 41:
            _fun0110_ip = 38; continue _fun0110;
case 39:
            var1 = 12;
            return var1;
case 37:
            var1 = 8;
            return var1;
case 9:
            var1 = 8;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['MESSAGES_ITEM_CHANNEL_AVATAR_MARGIN_END'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 32;
        return var1;
    };
    var5['resolve'] = var7;
    var4['MESSAGES_ITEM_CHANNEL_AVATAR_SIZE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0111: for(var _fun0111_ip = 0; ; ) switch(_fun0111_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0111_ip = 59; continue _fun0111 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0111_ip = 52; continue _fun0111 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0111_ip = 39; continue _fun0111 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0111_ip = 52; continue _fun0111 }
case 41:
            _fun0111_ip = 38; continue _fun0111;
case 39:
            var1 = 'text-md/medium';
            return var1;
case 52:
            var1 = 'redesign/channel-title/semibold';
            return var1;
case 59:
            var1 = 'redesign/channel-title/semibold';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['MESSAGES_ITEM_CHANNEL_NAME_TEXT_STYLE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0112: for(var _fun0112_ip = 0; ; ) switch(_fun0112_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0112_ip = 9; continue _fun0112 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0112_ip = 37; continue _fun0112 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0112_ip = 39; continue _fun0112 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0112_ip = 37; continue _fun0112 }
case 41:
            _fun0112_ip = 38; continue _fun0112;
case 39:
            var1 = 16;
            return var1;
case 37:
            var1 = 8;
            return var1;
case 9:
            var1 = 8;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0113: for(var _fun0113_ip = 0; ; ) switch(_fun0113_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0113_ip = 58; continue _fun0113 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh-floating';
            if(var1) { _fun0113_ip = 56; continue _fun0113 }
case 62:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0113_ip = 57; continue _fun0113 }
case 7:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0113_ip = 56; continue _fun0113 }
case 39:
            _fun0113_ip = 62; continue _fun0113;
case 57:
            var1 = 24;
            return var1;
case 56:
            var1 = 15;
            return var1;
case 58:
            var1 = 15;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['MOBILE_KEYBOARD_TOP_BORDER_RADIUS'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0114: for(var _fun0114_ip = 0; ; ) switch(_fun0114_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0114_ip = 60; continue _fun0114 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh-floating';
            if(var2) { _fun0114_ip = 56; continue _fun0114 }
case 62:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0114_ip = 57; continue _fun0114 }
case 7:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0114_ip = 56; continue _fun0114 }
case 39:
            _fun0114_ip = 62; continue _fun0114;
case 57:
            var2 = 24;
            return var2;
case 56:
            return var1;
case 60:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['MOBILE_MEDIA_KEYBOARD_TOP_BORDER_RADIUS'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 288;
        return var1;
    };
    var5['resolve'] = var7;
    var4['PROMO_SHEET_GRAPHIC_MAX_WIDTH'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0115: for(var _fun0115_ip = 0; ; ) switch(_fun0115_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0115_ip = 9; continue _fun0115 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0115_ip = 37; continue _fun0115 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0115_ip = 39; continue _fun0115 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0115_ip = 37; continue _fun0115 }
case 41:
            _fun0115_ip = 38; continue _fun0115;
case 39:
            var1 = 16;
            return var1;
case 37:
            var1 = 24;
            return var1;
case 9:
            var1 = 24;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['QUEST_DOCK_BORDER_RADIUS'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0116: for(var _fun0116_ip = 0; ; ) switch(_fun0116_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0116_ip = 9; continue _fun0116 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0116_ip = 37; continue _fun0116 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0116_ip = 39; continue _fun0116 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0116_ip = 37; continue _fun0116 }
case 41:
            _fun0116_ip = 38; continue _fun0116;
case 39:
            var1 = 8;
            return var1;
case 37:
            var1 = 16;
            return var1;
case 9:
            var1 = 16;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['SEGMENTED_CONTROL_BORDER_RADIUS'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0117: for(var _fun0117_ip = 0; ; ) switch(_fun0117_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0117_ip = 9; continue _fun0117 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0117_ip = 37; continue _fun0117 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0117_ip = 39; continue _fun0117 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0117_ip = 37; continue _fun0117 }
case 41:
            _fun0117_ip = 38; continue _fun0117;
case 39:
            var1 = 24;
            return var1;
case 37:
            var1 = 16;
            return var1;
case 9:
            var1 = 16;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['SETTINGS_PADDING_TOP'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 4;
        return var1;
    };
    var5['resolve'] = var7;
    var4['SHEET_HANDLE_HEIGHT'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0118: for(var _fun0118_ip = 0; ; ) switch(_fun0118_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0118_ip = 9; continue _fun0118 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0118_ip = 37; continue _fun0118 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0118_ip = 39; continue _fun0118 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0118_ip = 37; continue _fun0118 }
case 41:
            _fun0118_ip = 38; continue _fun0118;
case 39:
            var1 = 24;
            return var1;
case 37:
            var1 = 12;
            return var1;
case 9:
            var1 = 12;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['SHEET_HANDLE_MARGIN_BOTTOM'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0119: for(var _fun0119_ip = 0; ; ) switch(_fun0119_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0119_ip = 9; continue _fun0119 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0119_ip = 37; continue _fun0119 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0119_ip = 39; continue _fun0119 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0119_ip = 37; continue _fun0119 }
case 41:
            _fun0119_ip = 38; continue _fun0119;
case 39:
            var1 = 8;
            return var1;
case 37:
            var1 = 4;
            return var1;
case 9:
            var1 = 4;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['SHEET_HANDLE_MARGIN_TOP'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0120: for(var _fun0120_ip = 0; ; ) switch(_fun0120_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0120_ip = 9; continue _fun0120 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0120_ip = 37; continue _fun0120 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0120_ip = 39; continue _fun0120 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0120_ip = 37; continue _fun0120 }
case 41:
            _fun0120_ip = 38; continue _fun0120;
case 39:
            var1 = 36;
            return var1;
case 37:
            var1 = 32;
            return var1;
case 9:
            var1 = 32;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['SHEET_HANDLE_WIDTH'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0121: for(var _fun0121_ip = 0; ; ) switch(_fun0121_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0121_ip = 56; continue _fun0121 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0121_ip = 57; continue _fun0121 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0121_ip = 39; continue _fun0121 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0121_ip = 57; continue _fun0121 }
case 41:
            _fun0121_ip = 38; continue _fun0121;
case 39:
            return var1;
case 57:
            var1 = 16;
            return var1;
case 56:
            var1 = 16;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['SHEET_HEADER_PADDING_HORIZONTAL'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0122: for(var _fun0122_ip = 0; ; ) switch(_fun0122_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0122_ip = 56; continue _fun0122 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0122_ip = 37; continue _fun0122 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0122_ip = 39; continue _fun0122 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0122_ip = 37; continue _fun0122 }
case 41:
            _fun0122_ip = 38; continue _fun0122;
case 39:
            var2 = 8;
            return var2;
case 37:
            return var1;
case 56:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['TABLE_ROW_ARROW_MARGIN_END'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0123: for(var _fun0123_ip = 0; ; ) switch(_fun0123_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0123_ip = 9; continue _fun0123 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0123_ip = 37; continue _fun0123 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0123_ip = 39; continue _fun0123 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0123_ip = 37; continue _fun0123 }
case 41:
            _fun0123_ip = 38; continue _fun0123;
case 39:
            var1 = 8;
            return var1;
case 37:
            var1 = 14;
            return var1;
case 9:
            var1 = 14;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['TABLE_ROW_ARROW_MARGIN_START'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0124: for(var _fun0124_ip = 0; ; ) switch(_fun0124_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0124_ip = 9; continue _fun0124 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0124_ip = 37; continue _fun0124 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0124_ip = 39; continue _fun0124 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0124_ip = 37; continue _fun0124 }
case 41:
            _fun0124_ip = 38; continue _fun0124;
case 39:
            var1 = 12;
            return var1;
case 37:
            var1 = 8;
            return var1;
case 9:
            var1 = 8;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['TABLE_ROW_ARROW_WIDTH'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0125: for(var _fun0125_ip = 0; ; ) switch(_fun0125_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0125_ip = 9; continue _fun0125 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0125_ip = 37; continue _fun0125 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0125_ip = 39; continue _fun0125 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0125_ip = 37; continue _fun0125 }
case 41:
            _fun0125_ip = 38; continue _fun0125;
case 39:
            var1 = 12;
            return var1;
case 37:
            var1 = 16;
            return var1;
case 9:
            var1 = 16;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['TABLE_ROW_BORDER_RADIUS'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0126: for(var _fun0126_ip = 0; ; ) switch(_fun0126_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0126_ip = 9; continue _fun0126 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0126_ip = 37; continue _fun0126 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0126_ip = 39; continue _fun0126 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0126_ip = 37; continue _fun0126 }
case 41:
            _fun0126_ip = 38; continue _fun0126;
case 39:
            var1 = 32;
            return var1;
case 37:
            var1 = 36;
            return var1;
case 9:
            var1 = 36;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['TABLE_ROW_CONTENT_HEIGHT'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 56;
        return var1;
    };
    var5['resolve'] = var7;
    var4['TABLE_ROW_DIVIDER_PADDING'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0127: for(var _fun0127_ip = 0; ; ) switch(_fun0127_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0127_ip = 54; continue _fun0127 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0127_ip = 51; continue _fun0127 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0127_ip = 39; continue _fun0127 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0127_ip = 51; continue _fun0127 }
case 41:
            _fun0127_ip = 38; continue _fun0127;
case 39:
            var1 = 'text-sm/normal';
            return var1;
case 51:
            var1 = 'text-sm/medium';
            return var1;
case 54:
            var1 = 'text-sm/medium';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['TABLE_ROW_GROUP_HELPER_TEXT_STYLE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0128: for(var _fun0128_ip = 0; ; ) switch(_fun0128_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0128_ip = 9; continue _fun0128 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0128_ip = 37; continue _fun0128 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0128_ip = 39; continue _fun0128 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0128_ip = 37; continue _fun0128 }
case 41:
            _fun0128_ip = 38; continue _fun0128;
case 39:
            var1 = 56;
            return var1;
case 37:
            var1 = 60;
            return var1;
case 9:
            var1 = 60;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['TABLE_ROW_HEIGHT'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 32;
        return var1;
    };
    var5['resolve'] = var7;
    var4['TABLE_ROW_ICON_SIZE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0129: for(var _fun0129_ip = 0; ; ) switch(_fun0129_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0129_ip = 54; continue _fun0129 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0129_ip = 51; continue _fun0129 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0129_ip = 39; continue _fun0129 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0129_ip = 51; continue _fun0129 }
case 41:
            _fun0129_ip = 38; continue _fun0129;
case 39:
            var1 = 'text-strong';
            return var1;
case 51:
            var1 = 'mobile-text-heading-primary';
            return var1;
case 54:
            var1 = 'mobile-text-heading-primary';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['TABLE_ROW_LABEL_COLOR'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0130: for(var _fun0130_ip = 0; ; ) switch(_fun0130_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0130_ip = 58; continue _fun0130 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0130_ip = 52; continue _fun0130 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0130_ip = 39; continue _fun0130 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0130_ip = 52; continue _fun0130 }
case 41:
            _fun0130_ip = 38; continue _fun0130;
case 39:
            var1 = 'text-md/medium';
            return var1;
case 52:
            var1 = 'text-md/semibold';
            return var1;
case 58:
            var1 = 'text-md/semibold';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['TABLE_ROW_LABEL_TEXT_STYLE'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 12;
        return var1;
    };
    var5['resolve'] = var7;
    var4['TABLE_ROW_PADDING'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0131: for(var _fun0131_ip = 0; ; ) switch(_fun0131_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0131_ip = 9; continue _fun0131 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0131_ip = 37; continue _fun0131 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0131_ip = 39; continue _fun0131 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0131_ip = 37; continue _fun0131 }
case 41:
            _fun0131_ip = 38; continue _fun0131;
case 39:
            var1 = 12;
            return var1;
case 37:
            var1 = 22;
            return var1;
case 9:
            var1 = 22;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['TAB_BAR_UNREAD_BADGE_SIZE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0132: for(var _fun0132_ip = 0; ; ) switch(_fun0132_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0132_ip = 54; continue _fun0132 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0132_ip = 51; continue _fun0132 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0132_ip = 39; continue _fun0132 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0132_ip = 51; continue _fun0132 }
case 41:
            _fun0132_ip = 38; continue _fun0132;
case 39:
            var1 = -4;
            return var1;
case 51:
            var1 = -6;
            return var1;
case 54:
            var1 = -6;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['TAB_LABEL_MARGIN_TOP'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0133: for(var _fun0133_ip = 0; ; ) switch(_fun0133_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0133_ip = 54; continue _fun0133 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0133_ip = 51; continue _fun0133 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0133_ip = 39; continue _fun0133 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0133_ip = 51; continue _fun0133 }
case 41:
            _fun0133_ip = 38; continue _fun0133;
case 39:
            var1 = 'text-xs/medium';
            return var1;
case 51:
            var1 = 'text-xxs/semibold';
            return var1;
case 54:
            var1 = 'text-xxs/semibold';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['TAB_LABEL_TEXT_STYLE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0134: for(var _fun0134_ip = 0; ; ) switch(_fun0134_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0134_ip = 54; continue _fun0134 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0134_ip = 51; continue _fun0134 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0134_ip = 39; continue _fun0134 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0134_ip = 51; continue _fun0134 }
case 41:
            _fun0134_ip = 38; continue _fun0134;
case 39:
            var1 = 'text-sm/medium';
            return var1;
case 51:
            var1 = 'text-sm/semibold';
            return var1;
case 54:
            var1 = 'text-sm/semibold';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['USER_PROFILE_ABOUT_ME_HEADING_TEXT_STYLE'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 16;
        return var1;
    };
    var5['resolve'] = var7;
    var4['USER_ROW_LABEL_LINE_HEIGHT_ANDROID'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0135: for(var _fun0135_ip = 0; ; ) switch(_fun0135_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0135_ip = 9; continue _fun0135 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0135_ip = 37; continue _fun0135 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0135_ip = 39; continue _fun0135 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0135_ip = 37; continue _fun0135 }
case 41:
            _fun0135_ip = 38; continue _fun0135;
case 39:
            var1 = 20;
            return var1;
case 37:
            var1 = 22;
            return var1;
case 9:
            var1 = 22;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['USER_ROW_LABEL_LINE_HEIGHT_IOS'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0136: for(var _fun0136_ip = 0; ; ) switch(_fun0136_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0136_ip = 56; continue _fun0136 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0136_ip = 37; continue _fun0136 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0136_ip = 39; continue _fun0136 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0136_ip = 37; continue _fun0136 }
case 41:
            _fun0136_ip = 38; continue _fun0136;
case 39:
            var2 = 1;
            return var2;
case 37:
            return var1;
case 56:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['VOICE_CHANNEL_USER_LIMIT_BORDER_WIDTH'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0137: for(var _fun0137_ip = 0; ; ) switch(_fun0137_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0137_ip = 9; continue _fun0137 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0137_ip = 37; continue _fun0137 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0137_ip = 39; continue _fun0137 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0137_ip = 37; continue _fun0137 }
case 41:
            _fun0137_ip = 38; continue _fun0137;
case 39:
            var1 = 13;
            return var1;
case 37:
            var1 = 14;
            return var1;
case 9:
            var1 = 14;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['VOICE_MESSAGE_DURATION_LINE_HEIGHT_ANDROID'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 17;
        return var1;
    };
    var5['resolve'] = var7;
    var4['VOICE_MESSAGE_DURATION_LINE_HEIGHT_IOS'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0138: for(var _fun0138_ip = 0; ; ) switch(_fun0138_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0138_ip = 54; continue _fun0138 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0138_ip = 51; continue _fun0138 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0138_ip = 39; continue _fun0138 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0138_ip = 51; continue _fun0138 }
case 41:
            _fun0138_ip = 38; continue _fun0138;
case 39:
            var1 = 'text-xs/semibold';
            return var1;
case 51:
            var1 = 'text-sm/semibold';
            return var1;
case 54:
            var1 = 'text-sm/semibold';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['VOICE_MESSAGE_DURATION_TEXT_STYLE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0139: for(var _fun0139_ip = 0; ; ) switch(_fun0139_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0139_ip = 9; continue _fun0139 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0139_ip = 37; continue _fun0139 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0139_ip = 39; continue _fun0139 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0139_ip = 37; continue _fun0139 }
case 41:
            _fun0139_ip = 38; continue _fun0139;
case 39:
            var1 = 6;
            return var1;
case 37:
            var1 = 10;
            return var1;
case 9:
            var1 = 10;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_VERTICAL'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0140: for(var _fun0140_ip = 0; ; ) switch(_fun0140_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0140_ip = 9; continue _fun0140 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0140_ip = 37; continue _fun0140 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0140_ip = 39; continue _fun0140 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0140_ip = 37; continue _fun0140 }
case 41:
            _fun0140_ip = 38; continue _fun0140;
case 39:
            var1 = 16;
            return var1;
case 37:
            var1 = 32;
            return var1;
case 9:
            var1 = 32;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['VOICE_PANEL_CONTROLS_BORDER_RADIUS'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0141: for(var _fun0141_ip = 0; ; ) switch(_fun0141_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0141_ip = 9; continue _fun0141 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0141_ip = 37; continue _fun0141 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0141_ip = 39; continue _fun0141 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0141_ip = 37; continue _fun0141 }
case 41:
            _fun0141_ip = 38; continue _fun0141;
case 39:
            var1 = 4;
            return var1;
case 37:
            var1 = 16;
            return var1;
case 9:
            var1 = 16;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['VOICE_PANEL_CONTROLS_PADDING'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0142: for(var _fun0142_ip = 0; ; ) switch(_fun0142_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0142_ip = 56; continue _fun0142 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0142_ip = 37; continue _fun0142 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0142_ip = 39; continue _fun0142 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0142_ip = 37; continue _fun0142 }
case 41:
            _fun0142_ip = 38; continue _fun0142;
case 39:
            var2 = 64;
            return var2;
case 37:
            return var1;
case 56:
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['VOICE_PANEL_DISCONNECT_BUTTON_MIN_WIDTH'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0143: for(var _fun0143_ip = 0; ; ) switch(_fun0143_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0143_ip = 9; continue _fun0143 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0143_ip = 37; continue _fun0143 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0143_ip = 39; continue _fun0143 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0143_ip = 37; continue _fun0143 }
case 41:
            _fun0143_ip = 38; continue _fun0143;
case 39:
            var1 = 16;
            return var1;
case 37:
            var1 = 12;
            return var1;
case 9:
            var1 = 12;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['VOICE_PANEL_GUTTER'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0144: for(var _fun0144_ip = 0; ; ) switch(_fun0144_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0144_ip = 9; continue _fun0144 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0144_ip = 37; continue _fun0144 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0144_ip = 39; continue _fun0144 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0144_ip = 37; continue _fun0144 }
case 41:
            _fun0144_ip = 38; continue _fun0144;
case 39:
            var1 = 16;
            return var1;
case 37:
            var1 = 12;
            return var1;
case 9:
            var1 = 12;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['VOICE_PANEL_PADDING'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0145: for(var _fun0145_ip = 0; ; ) switch(_fun0145_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0145_ip = 9; continue _fun0145 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0145_ip = 37; continue _fun0145 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0145_ip = 39; continue _fun0145 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0145_ip = 37; continue _fun0145 }
case 41:
            _fun0145_ip = 38; continue _fun0145;
case 39:
            var1 = 12;
            return var1;
case 37:
            var1 = 24;
            return var1;
case 9:
            var1 = 24;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['VOICE_TILE_BORDER_RADIUS'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0146: for(var _fun0146_ip = 0; ; ) switch(_fun0146_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0146_ip = 9; continue _fun0146 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0146_ip = 37; continue _fun0146 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0146_ip = 39; continue _fun0146 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0146_ip = 37; continue _fun0146 }
case 41:
            _fun0146_ip = 38; continue _fun0146;
case 39:
            var1 = 16;
            return var1;
case 37:
            var1 = 28;
            return var1;
case 9:
            var1 = 28;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['YOU_BAR_BORDER_RADIUS'] = var5;
    var1['mobile'] = var4;
    var4 = {};
    var5 = {};
    var7 = function resolve() {
        var1 = 24;
        return var1;
    };
    var5['resolve'] = var7;
    var4['HORIZONTAL_PADDING'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 16;
        return var1;
    };
    var5['resolve'] = var7;
    var4['VERTICAL_PADDING'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 800;
        return var1;
    };
    var5['resolve'] = var7;
    var4['WIDTH_LARGE'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 602;
        return var1;
    };
    var5['resolve'] = var7;
    var4['WIDTH_MEDIUM'] = var5;
    var5 = {};
    var7 = function resolve() {
        var1 = 442;
        return var1;
    };
    var5['resolve'] = var7;
    var4['WIDTH_SMALL'] = var5;
    var1['modal'] = var4;
    var4 = {};
    var5 = {};
    var7 = function resolve() {
        var1 = 248;
        return var1;
    };
    var5['resolve'] = var7;
    var4['MAX_WIDTH'] = var5;
    var5 = {};
    var6 = function resolve() {
        var1 = 40;
        return var1;
    };
    var5['resolve'] = var6;
    var4['OPTION_HEIGHT'] = var5;
    var1['select'] = var4;
    var2['Modules'] = var1;
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/tokens/modules/generated/generated-definitions.tsx';
    var4 = var5.bind(var6)(var4);
    var3['_private'] = var2;
    return var1;
})();