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
    var1['button'] = var4;
    var4 = {};
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var2 = var1.density;
            var1 = 'compact';
            if(!(var1 !== var2)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var1 = 'default';
            if(!(var1 !== var2)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var1 = 'cozy';
            if(!(var1 === var2)) { _fun0005_ip = 44; continue _fun0005 }
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
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var1.density;
            var4 = var3.length;
            var1 = 0;
            if(!(var1 !== var4)) { _fun0008_ip = 47; continue _fun0008 }
case 48:
            var1 = _closure1_slot0;
            var6 = undefined;
            var5 = var1.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var1 = var3.done;
            var4 = 'refresh-fast-follow-avatars';
            if(var1) { _fun0008_ip = 49; continue _fun0008 }
case 50:
            var1 = var3.value;
            if(!(var4 !== var1)) { _fun0008_ip = 51; continue _fun0008 }
case 30:
            var7 = var5.bind(var6)();
            var1 = var7.done;
            var3 = var7;
            if(var1) { _fun0008_ip = 49; continue _fun0008 }
case 52:
            _fun0008_ip = 50; continue _fun0008;
case 51:
            var1 = 'compact';
            if(!(var1 !== var2)) { _fun0008_ip = 53; continue _fun0008 }
case 54:
            var1 = 'default';
            if(!(var1 !== var2)) { _fun0008_ip = 13; continue _fun0008 }
case 55:
            var1 = 'cozy';
            if(!(var1 === var2)) { _fun0008_ip = 53; continue _fun0008 }
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
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0010_ip = 9; continue _fun0010 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0010_ip = 37; continue _fun0010 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0010_ip = 39; continue _fun0010 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0010_ip = 37; continue _fun0010 }
case 41:
            _fun0010_ip = 38; continue _fun0010;
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
    var4['CARD_DEFAULT_RADIUS'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0011_ip = 56; continue _fun0011 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0011_ip = 57; continue _fun0011 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0011_ip = 39; continue _fun0011 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0011_ip = 57; continue _fun0011 }
case 41:
            _fun0011_ip = 38; continue _fun0011;
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
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0012_ip = 58; continue _fun0012 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0012_ip = 52; continue _fun0012 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0012_ip = 39; continue _fun0012 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0012_ip = 52; continue _fun0012 }
case 41:
            _fun0012_ip = 38; continue _fun0012;
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
            var1 = 'icon-only';
            return var1;
case 52:
            var1 = 'tertiary';
            return var1;
case 58:
            var1 = 'tertiary';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0014_ip = 9; continue _fun0014 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0014_ip = 37; continue _fun0014 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0014_ip = 39; continue _fun0014 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0014_ip = 37; continue _fun0014 }
case 41:
            _fun0014_ip = 38; continue _fun0014;
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
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0015_ip = 56; continue _fun0015 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0015_ip = 57; continue _fun0015 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0015_ip = 39; continue _fun0015 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0015_ip = 57; continue _fun0015 }
case 41:
            _fun0015_ip = 38; continue _fun0015;
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
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0016_ip = 9; continue _fun0016 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0016_ip = 37; continue _fun0016 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0016_ip = 39; continue _fun0016 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0016_ip = 37; continue _fun0016 }
case 41:
            _fun0016_ip = 38; continue _fun0016;
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
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0017_ip = 56; continue _fun0017 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0017_ip = 57; continue _fun0017 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0017_ip = 39; continue _fun0017 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0017_ip = 57; continue _fun0017 }
case 41:
            _fun0017_ip = 38; continue _fun0017;
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
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0018_ip = 9; continue _fun0018 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0018_ip = 37; continue _fun0018 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0018_ip = 39; continue _fun0018 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0018_ip = 37; continue _fun0018 }
case 41:
            _fun0018_ip = 38; continue _fun0018;
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
    var7 = function resolve(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0020_ip = 9; continue _fun0020 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0020_ip = 37; continue _fun0020 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0020_ip = 39; continue _fun0020 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0020_ip = 37; continue _fun0020 }
case 41:
            _fun0020_ip = 38; continue _fun0020;
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
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0021_ip = 9; continue _fun0021 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0021_ip = 37; continue _fun0021 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0021_ip = 39; continue _fun0021 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0021_ip = 37; continue _fun0021 }
case 41:
            _fun0021_ip = 38; continue _fun0021;
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
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0022_ip = 59; continue _fun0022 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0022_ip = 51; continue _fun0022 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0022_ip = 39; continue _fun0022 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0022_ip = 51; continue _fun0022 }
case 41:
            _fun0022_ip = 38; continue _fun0022;
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
    var7 = function resolve() {
        var1 = 2;
        return var1;
    };
    var5['resolve'] = var7;
    var4['CHAT_INPUT_PILL_PADDING'] = var5;
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
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0024_ip = 60; continue _fun0024 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0024_ip = 58; continue _fun0024 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0024_ip = 39; continue _fun0024 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0024_ip = 58; continue _fun0024 }
case 41:
            _fun0024_ip = 38; continue _fun0024;
case 39:
            var1 = 1.2;
            return var1;
case 58:
            var1 = 2;
            return var1;
case 60:
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
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0025_ip = 60; continue _fun0025 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0025_ip = 58; continue _fun0025 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0025_ip = 39; continue _fun0025 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0025_ip = 58; continue _fun0025 }
case 41:
            _fun0025_ip = 38; continue _fun0025;
case 39:
            var1 = 1.2;
            return var1;
case 58:
            var1 = 2;
            return var1;
case 60:
            var1 = 2;
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['CONTROL_RADIO_ICON_BORDER_WIDTH'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0026_ip = 9; continue _fun0026 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0026_ip = 37; continue _fun0026 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0026_ip = 39; continue _fun0026 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0026_ip = 37; continue _fun0026 }
case 41:
            _fun0026_ip = 38; continue _fun0026;
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
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0028_ip = 9; continue _fun0028 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0028_ip = 37; continue _fun0028 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0028_ip = 39; continue _fun0028 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0028_ip = 37; continue _fun0028 }
case 41:
            _fun0028_ip = 38; continue _fun0028;
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
    var4['CONTROL_SWITCH_KNOB_SIZE'] = var5;
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
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0031_ip = 9; continue _fun0031 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0031_ip = 37; continue _fun0031 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0031_ip = 39; continue _fun0031 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0031_ip = 37; continue _fun0031 }
case 41:
            _fun0031_ip = 38; continue _fun0031;
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
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0033_ip = 9; continue _fun0033 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0033_ip = 37; continue _fun0033 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0033_ip = 39; continue _fun0033 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0033_ip = 37; continue _fun0033 }
case 41:
            _fun0033_ip = 38; continue _fun0033;
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
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0034_ip = 56; continue _fun0034 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0034_ip = 37; continue _fun0034 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0034_ip = 39; continue _fun0034 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0034_ip = 37; continue _fun0034 }
case 41:
            _fun0034_ip = 38; continue _fun0034;
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
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0035_ip = 9; continue _fun0035 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0035_ip = 37; continue _fun0035 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0035_ip = 39; continue _fun0035 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0035_ip = 37; continue _fun0035 }
case 41:
            _fun0035_ip = 38; continue _fun0035;
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
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0036_ip = 59; continue _fun0036 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0036_ip = 51; continue _fun0036 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0036_ip = 39; continue _fun0036 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0036_ip = 51; continue _fun0036 }
case 41:
            _fun0036_ip = 38; continue _fun0036;
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
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0037_ip = 56; continue _fun0037 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0037_ip = 37; continue _fun0037 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0037_ip = 39; continue _fun0037 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0037_ip = 37; continue _fun0037 }
case 41:
            _fun0037_ip = 38; continue _fun0037;
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
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0038_ip = 9; continue _fun0038 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0038_ip = 37; continue _fun0038 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0038_ip = 39; continue _fun0038 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0038_ip = 37; continue _fun0038 }
case 41:
            _fun0038_ip = 38; continue _fun0038;
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
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0039_ip = 9; continue _fun0039 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0039_ip = 37; continue _fun0039 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0039_ip = 39; continue _fun0039 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0039_ip = 37; continue _fun0039 }
case 41:
            _fun0039_ip = 38; continue _fun0039;
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
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0040_ip = 9; continue _fun0040 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0040_ip = 37; continue _fun0040 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0040_ip = 39; continue _fun0040 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0040_ip = 37; continue _fun0040 }
case 41:
            _fun0040_ip = 38; continue _fun0040;
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
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0041_ip = 9; continue _fun0041 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0041_ip = 37; continue _fun0041 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0041_ip = 39; continue _fun0041 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0041_ip = 37; continue _fun0041 }
case 41:
            _fun0041_ip = 38; continue _fun0041;
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
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0042_ip = 36; continue _fun0042 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0042_ip = 37; continue _fun0042 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0042_ip = 39; continue _fun0042 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0042_ip = 37; continue _fun0042 }
case 41:
            _fun0042_ip = 38; continue _fun0042;
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
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0043_ip = 59; continue _fun0043 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0043_ip = 51; continue _fun0043 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0043_ip = 39; continue _fun0043 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0043_ip = 51; continue _fun0043 }
case 41:
            _fun0043_ip = 38; continue _fun0043;
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
        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0044_ip = 59; continue _fun0044 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0044_ip = 51; continue _fun0044 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0044_ip = 39; continue _fun0044 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0044_ip = 51; continue _fun0044 }
case 41:
            _fun0044_ip = 38; continue _fun0044;
case 39:
            var1 = 'text-md/normal';
            return var1;
case 51:
            var1 = 'text-sm/medium';
            return var1;
case 59:
            var1 = 'text-sm/medium';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['INPUT_FIELD_TEXT_STYLE_MD'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0045_ip = 54; continue _fun0045 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0045_ip = 51; continue _fun0045 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0045_ip = 39; continue _fun0045 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0045_ip = 51; continue _fun0045 }
case 41:
            _fun0045_ip = 38; continue _fun0045;
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
        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0046_ip = 9; continue _fun0046 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0046_ip = 37; continue _fun0046 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0046_ip = 39; continue _fun0046 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0046_ip = 37; continue _fun0046 }
case 41:
            _fun0046_ip = 38; continue _fun0046;
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
    var7 = function resolve(arg1) {
        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0047_ip = 59; continue _fun0047 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0047_ip = 51; continue _fun0047 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0047_ip = 39; continue _fun0047 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0047_ip = 51; continue _fun0047 }
case 41:
            _fun0047_ip = 38; continue _fun0047;
case 39:
            var1 = 'row-reverse';
            return var1;
case 51:
            var1 = 'row';
            return var1;
case 59:
            var1 = 'row';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['MESSAGES_HEADER_BUTTON_LAYOUT'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0048_ip = 9; continue _fun0048 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0048_ip = 37; continue _fun0048 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0048_ip = 39; continue _fun0048 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0048_ip = 37; continue _fun0048 }
case 41:
            _fun0048_ip = 38; continue _fun0048;
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
        _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0049_ip = 9; continue _fun0049 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0049_ip = 37; continue _fun0049 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0049_ip = 39; continue _fun0049 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0049_ip = 37; continue _fun0049 }
case 41:
            _fun0049_ip = 38; continue _fun0049;
case 39:
            var1 = 40;
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
    var4['MESSAGES_ITEM_CHANNEL_AVATAR_SIZE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0050_ip = 59; continue _fun0050 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0050_ip = 52; continue _fun0050 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0050_ip = 39; continue _fun0050 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0050_ip = 52; continue _fun0050 }
case 41:
            _fun0050_ip = 38; continue _fun0050;
case 39:
            var1 = 'text-md/semibold';
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
        _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0051_ip = 9; continue _fun0051 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0051_ip = 37; continue _fun0051 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0051_ip = 39; continue _fun0051 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0051_ip = 37; continue _fun0051 }
case 41:
            _fun0051_ip = 38; continue _fun0051;
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
        _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0052_ip = 9; continue _fun0052 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0052_ip = 37; continue _fun0052 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0052_ip = 39; continue _fun0052 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0052_ip = 37; continue _fun0052 }
case 41:
            _fun0052_ip = 38; continue _fun0052;
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
        _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0053_ip = 9; continue _fun0053 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0053_ip = 37; continue _fun0053 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0053_ip = 39; continue _fun0053 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0053_ip = 37; continue _fun0053 }
case 41:
            _fun0053_ip = 38; continue _fun0053;
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
    var7 = function resolve(arg1) {
        _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0054_ip = 56; continue _fun0054 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0054_ip = 37; continue _fun0054 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0054_ip = 39; continue _fun0054 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0054_ip = 37; continue _fun0054 }
case 41:
            _fun0054_ip = 38; continue _fun0054;
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
    var4['TABLE_ROW_ARROW_MARGIN_END'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0055_ip = 9; continue _fun0055 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0055_ip = 37; continue _fun0055 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0055_ip = 39; continue _fun0055 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0055_ip = 37; continue _fun0055 }
case 41:
            _fun0055_ip = 38; continue _fun0055;
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
        _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0057_ip = 9; continue _fun0057 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0057_ip = 37; continue _fun0057 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0057_ip = 39; continue _fun0057 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0057_ip = 37; continue _fun0057 }
case 41:
            _fun0057_ip = 38; continue _fun0057;
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
    var7 = function resolve() {
        var1 = 12;
        return var1;
    };
    var5['resolve'] = var7;
    var4['TABLE_ROW_PADDING'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0058_ip = 9; continue _fun0058 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0058_ip = 37; continue _fun0058 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0058_ip = 39; continue _fun0058 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0058_ip = 37; continue _fun0058 }
case 41:
            _fun0058_ip = 38; continue _fun0058;
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
        _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0059_ip = 54; continue _fun0059 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0059_ip = 51; continue _fun0059 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0059_ip = 39; continue _fun0059 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0059_ip = 51; continue _fun0059 }
case 41:
            _fun0059_ip = 38; continue _fun0059;
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
        _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0060_ip = 54; continue _fun0060 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0060_ip = 51; continue _fun0060 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0060_ip = 39; continue _fun0060 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0060_ip = 51; continue _fun0060 }
case 41:
            _fun0060_ip = 38; continue _fun0060;
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
        _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0061_ip = 58; continue _fun0061 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0061_ip = 52; continue _fun0061 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0061_ip = 39; continue _fun0061 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0061_ip = 52; continue _fun0061 }
case 41:
            _fun0061_ip = 38; continue _fun0061;
case 39:
            var1 = 'text-sm/medium';
            return var1;
case 52:
            var1 = 'text-sm/semibold';
            return var1;
case 58:
            var1 = 'text-sm/semibold';
            return var1;
        }
    };
    var5['resolve'] = var7;
    var4['USER_PROFILE_ABOUT_ME_HEADING_TEXT_STYLE'] = var5;
    var5 = {};
    var7 = function resolve(arg1) {
        _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
case 0:
            var1 = arg1;
            var3 = var1.enabledExperiments;
            var2 = var3.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0062_ip = 56; continue _fun0062 }
case 29:
            var2 = _closure1_slot0;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 'mobile-visual-refresh';
            if(var2) { _fun0062_ip = 37; continue _fun0062 }
case 38:
            var2 = var3.value;
            if(!(var4 !== var2)) { _fun0062_ip = 39; continue _fun0062 }
case 40:
            var7 = var5.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0062_ip = 37; continue _fun0062 }
case 41:
            _fun0062_ip = 38; continue _fun0062;
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
        _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0065_ip = 9; continue _fun0065 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0065_ip = 37; continue _fun0065 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0065_ip = 39; continue _fun0065 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0065_ip = 37; continue _fun0065 }
case 41:
            _fun0065_ip = 38; continue _fun0065;
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
        _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
case 0:
            var1 = arg1;
            var2 = var1.enabledExperiments;
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0066_ip = 9; continue _fun0066 }
case 29:
            var1 = _closure1_slot0;
            var5 = undefined;
            var4 = var1.bind(var5)(var2);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = 'mobile-visual-refresh';
            if(var1) { _fun0066_ip = 37; continue _fun0066 }
case 38:
            var1 = var2.value;
            if(!(var3 !== var1)) { _fun0066_ip = 39; continue _fun0066 }
case 40:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0066_ip = 37; continue _fun0066 }
case 41:
            _fun0066_ip = 38; continue _fun0066;
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