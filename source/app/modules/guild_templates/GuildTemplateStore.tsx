// app/modules/guild_templates/GuildTemplateStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
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
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
case 36: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 35: // try_end0
            _fun0004_ip = 37; continue _fun0004;
case 38: // catch_target0
            CatchBlockStart(arg_register=1);
case 37:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function updateGuildTemplate(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var2 = null;
            if(!(var2 != var4)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var5 = _closure1_slot8;
            var3 = var5.get;
            var5 = var3.bind(var5)(var4);
            if(!(var2 == var5)) { _fun0005_ip = 41; continue _fun0005 }
case 3:
            var3 = {};
            var3['code'] = var4;
            var2 = _closure1_slot7;
            var2 = var2.RESOLVING;
            var3['state'] = var2;
            _fun0005_ip = 30; continue _fun0005;
case 41:
            var2 = {};
            var8 = var2;
            var7 = var5;
            var5 = copyDataProperties(var8, var7);
            var3 = var2;
case 30:
            var5 = arg2;
            var2 = undefined;
            var2 = var5.bind(var2)(var3);
            var2 = global;
            var6 = var2.Map;
            var8 = _closure1_slot8;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var9 = var5;
            var2 = new var9[var6](var8, var7);
            var2 = var2 instanceof Object ? var2 : var5;
            _closure1_slot8 = var2;
            var1 = var2.set;
            var1 = var1.bind(var2)(var4, var3);
case 39:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var10 = function handleGuildTemplateResolveSuccess(arg1) {
        var3 = _closure1_slot14;
        var1 = arg1;
        var2 = var1.guildTemplate;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var1 = function resolveGuildTemplate(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot13;
        var3 = var1.code;
        var1 = undefined;
        var2 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var8 = arg1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = _closure2_slot0;
                var7 = var3.bind(var1)(var2);
                var5 = var7;
                for(var2 in var5)
case 42:
                {
case 43:
                    var10 = var2;
                    var9 = var7[var10];
                    var8[var10] = var9;
                    _fun0006_ip = 42; continue _fun0006;
                }
case 44:
                return var1;
            }
        };
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var9 = function handleGuildTemplateResolveFailure(arg1) {
        var4 = _closure1_slot13;
        var1 = arg1;
        var3 = var1.code;
        var1 = undefined;
        var2 = function(arg1) {
            var1 = _closure1_slot7;
            var2 = var1.EXPIRED;
            var1 = arg1;
            var1['state'] = var2;
            var1 = undefined;
            return var1;
        };
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = global;
    var12 = var2.Object;
    var11 = var12.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.GuildTemplateStates;
    var _closure1_slot7 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var16 = var8;
    var2 = new var16[var2](var15);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot8 = var2;
    var2 = null;
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildTemplateStore() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0007_ip = 45; continue _fun0007 }
case 42:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 46; continue _fun0007;
case 45:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 46:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'getGuildTemplate';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 == var3)) { _fun0008_ip = 47; continue _fun0008 }
case 40:
                var1 = undefined;
                return var1;
case 47:
                var2 = _closure1_slot8;
                var1 = var2.get;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getGuildTemplates';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var9 = arg1;
                var3 = _closure1_slot10;
                var2 = _closure1_slot8;
                var1 = var2.keys;
                var2 = var1.bind(var2)();
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var3 = var7.bind(var1)();
                var2 = var3.done;
                var6 = 'sourceGuildId';
                var5 = null;
                var4 = var3;
                if(var2) { _fun0009_ip = 48; continue _fun0009 }
case 42:
                var10 = var4.value;
                var3 = _closure1_slot8;
                var2 = var3.get;
                var2 = var2.bind(var3)(var10);
                if(!(var5 != var2)) { _fun0009_ip = 13; continue _fun0009 }
case 37:
                var3 = var6 in var2;
                if(!var3) { _fun0009_ip = 13; continue _fun0009 }
case 49:
                var3 = var2.sourceGuildId;
                if(!(var3 === var9)) { _fun0009_ip = 13; continue _fun0009 }
case 50:
                var10 = var2.state;
                var3 = _closure1_slot7;
                var3 = var3.EXPIRED;
                if(!(var10 === var3)) { _fun0009_ip = 51; continue _fun0009 }
case 13:
                var10 = var7.bind(var1)();
                var3 = var10.done;
                var4 = var10;
                if(var3) { _fun0009_ip = 48; continue _fun0009 }
case 52:
                _fun0009_ip = 42; continue _fun0009;
case 51:
                return var2;
case 48:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getDisplayedGuildTemplateCode';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GuildTemplateStore';
    var8['displayName'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var15 = var7.bind(var1)(var2);
    var2 = {};
    var11 = function handleGuildTemplateResolve(arg1) {
        var1 = arg1;
        var4 = var1.code;
        var1 = global;
        var3 = var1.Map;
        var8 = _closure1_slot8;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var9 = var2;
        var1 = new var9[var3](var8, var7);
        var3 = var1 instanceof Object ? var1 : var2;
        _closure1_slot8 = var3;
        var2 = var3.set;
        var1 = {};
        var1['code'] = var4;
        var5 = _closure1_slot7;
        var5 = var5.RESOLVING;
        var1['state'] = var5;
        var1 = var2.bind(var3)(var4, var1);
        var1 = undefined;
        return var1;
    };
    var2['GUILD_TEMPLATE_RESOLVE'] = var11;
    var2['GUILD_TEMPLATE_CREATE_SUCCESS'] = var10;
    var2['GUILD_TEMPLATE_SYNC_SUCCESS'] = var10;
    var2['GUILD_TEMPLATE_RESOLVE_SUCCESS'] = var10;
    var10 = function handleGuildTemplateLoadForGuildSuccess(arg1) {
        var1 = arg1;
        var3 = var1.guildTemplates;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = _closure1_slot14;
            var1 = undefined;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS'] = var10;
    var2['GUILD_TEMPLATE_RESOLVE_FAILURE'] = var9;
    var2['GUILD_TEMPLATE_DELETE_SUCCESS'] = var9;
    var9 = function handleGuildTemplateAccept(arg1) {
        var4 = _closure1_slot13;
        var1 = arg1;
        var3 = var1.code;
        var1 = undefined;
        var2 = function(arg1) {
            var1 = _closure1_slot7;
            var2 = var1.ACCEPTING;
            var1 = arg1;
            var1['state'] = var2;
            var1 = undefined;
            return var1;
        };
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['GUILD_TEMPLATE_ACCEPT'] = var9;
    var9 = function handleGuildTemplateAcceptSuccess(arg1) {
        var4 = _closure1_slot13;
        var1 = arg1;
        var3 = var1.code;
        var1 = undefined;
        var2 = function(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = arg1;
                var1 = _closure1_slot7;
                var1 = var1.ACCEPTED;
                var2['state'] = var1;
                var1 = var2.usageCount;
                var3 = null;
                var4 = var3 != var1;
                var3 = 0;
                if(!var4) { _fun0010_ip = 53; continue _fun0010 }
case 54:
                var3 = var1;
case 53:
                var1 = 1;
                var1 = var3 + var1;
                var2['usageCount'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['GUILD_TEMPLATE_ACCEPT_SUCCESS'] = var9;
    var9 = function handleAcceptInviteFailure(arg1) {
        var4 = _closure1_slot13;
        var1 = arg1;
        var3 = var1.code;
        var1 = undefined;
        var2 = function(arg1) {
            var1 = _closure1_slot7;
            var2 = var1.RESOLVED;
            var1 = arg1;
            var1['state'] = var2;
            var1 = undefined;
            return var1;
        };
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['GUILD_TEMPLATE_ACCEPT_FAILURE'] = var9;
    var9 = function handleGuildTemplateModalShow(arg1) {
        var1 = arg1;
        var2 = var1.code;
        _closure1_slot9 = var2;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_TEMPLATE_MODAL_SHOW'] = var9;
    var4 = function handleGuildTemplateModalHide() {
        var1 = null;
        _closure1_slot9 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_TEMPLATE_MODAL_HIDE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var16 = var4;
    var14 = var2;
    var2 = new var16[var8](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_templates/GuildTemplateStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();