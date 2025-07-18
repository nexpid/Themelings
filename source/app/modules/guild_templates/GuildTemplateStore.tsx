// app/modules/guild_templates/GuildTemplateStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
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
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
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
            var9 = _closure1_slot11;
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
            var7 = _closure1_slot11;
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
 342:
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
    var _closure1_slot11 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0004_ip = 74; continue _fun0004;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
 0:
            var4 = arg1;
            var2 = null;
            if(!(var2 != var4)) { _fun0005_ip = 124; continue _fun0005 }
 9:
            var5 = _closure1_slot8;
            var3 = var5.get;
            var5 = var3.bind(var5)(var4);
            if(!(var2 == var5)) { _fun0005_ip = 52; continue _fun0005 }
 30:
            var3 = {};
            var3['code'] = var4;
            var2 = _closure1_slot7;
            var2 = var2.RESOLVING;
            var3['state'] = var2;
            _fun0005_ip = 67; continue _fun0005;
 52:
            var2 = {};
            var8 = var2;
            var7 = var5;
            var5 = copyDataProperties(var8, var7);
            var3 = var2;
 67:
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
 124:
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
 0:
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
 51:
                {
 60:
                    var10 = var2;
                    var9 = var7[var10];
                    var8[var10] = var9;
                    _fun0006_ip = 51; continue _fun0006;
                }
 73:
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
 0:
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
                if(var1) { _fun0007_ip = 69; continue _fun0007 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 105; continue _fun0007;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
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
 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 == var3)) { _fun0008_ip = 13; continue _fun0008 }
 9:
                var1 = undefined;
                return var1;
 13:
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
 0:
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
                if(var2) { _fun0009_ip = 129; continue _fun0009 }
 51:
                var10 = var4.value;
                var3 = _closure1_slot8;
                var2 = var3.get;
                var2 = var2.bind(var3)(var10);
                if(!(var5 != var2)) { _fun0009_ip = 110; continue _fun0009 }
 74:
                var3 = var6 in var2;
                if(!var3) { _fun0009_ip = 110; continue _fun0009 }
 81:
                var3 = var2.sourceGuildId;
                if(!(var3 === var9)) { _fun0009_ip = 110; continue _fun0009 }
 91:
                var10 = var2.state;
                var3 = _closure1_slot7;
                var3 = var3.EXPIRED;
                if(!(var10 === var3)) { _fun0009_ip = 127; continue _fun0009 }
 110:
                var10 = var7.bind(var1)();
                var3 = var10.done;
                var4 = var10;
                if(var3) { _fun0009_ip = 129; continue _fun0009 }
 125:
                _fun0009_ip = 51; continue _fun0009;
 127:
                return var2;
 129:
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
 0:
                var2 = arg1;
                var1 = _closure1_slot7;
                var1 = var1.ACCEPTED;
                var2['state'] = var1;
                var1 = var2.usageCount;
                var3 = null;
                var4 = var3 != var1;
                var3 = 0;
                if(!var4) { _fun0010_ip = 42; continue _fun0010 }
 39:
                var3 = var1;
 42:
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