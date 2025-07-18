// app/stores/WebhooksStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function fetchingKey(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg2;
            var1 = null;
            if(!(var1 == var5)) { _fun0002_ip = 13; continue _fun0002 }
 9:
            var5 = 'guild';
 13:
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '';
            var2 = arg1;
            var1 = ':';
            var1 = var4.bind(var3)(var2, var1, var5);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function getOrCreateGuild(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot8;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 == var4)) { _fun0003_ip = 30; continue _fun0003 }
 20:
            var4 = _closure1_slot8;
            var3 = {};
            var4[var2] = var3;
 30:
            var1 = _closure1_slot8;
            var1 = var1[var2];
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var8 = function handleWebhookCreateUpdate(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var4 = var1.webhook;
        var2 = _closure1_slot12;
        var1 = undefined;
        var3 = var2.bind(var1)(var3);
        var2 = var4.id;
        var3[var2] = var4;
        return var1;
    };
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = {};
    var _closure1_slot8 = var2;
    var2 = {};
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function WebhooksStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 69; continue _fun0004 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 105; continue _fun0004;
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
        var1 = 'isFetching';
        var5['key'] = var1;
        var1 = function value(arg1, arg2) {
            var2 = _closure1_slot9;
            var5 = _closure1_slot11;
            var4 = undefined;
            var3 = arg1;
            var1 = arg2;
            var1 = var5.bind(var4)(var3, var1);
            var2 = var2[var1];
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getWebhooksForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 6;
            var2 = var4[var2];
            var5 = undefined;
            var3 = var3.bind(var5)(var2);
            var2 = var3.values;
            var4 = _closure1_slot12;
            var1 = arg1;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getWebhooksForChannel';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var2 = arg2;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 6;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var5 = _closure1_slot12;
            var2 = arg1;
            var2 = var5.bind(var4)(var2);
            var3 = var3.bind(var4)(var2);
            var2 = var3.values;
            var3 = var2.bind(var3)();
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.channel_id;
                var1 = _closure3_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.value;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'error';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot7;
            return var1;
        };
        var5['get'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'WebhooksStore';
    var7['displayName'] = var2;
    var2 = 8;
    var2 = var5[var2];
    var12 = var6.bind(var1)(var2);
    var2 = {};
    var9 = function handleWebhooksUpdate(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var4 = var1.channelId;
            var _closure2_slot0 = var4;
            var8 = var1.webhooks;
            var7 = var1.error;
            var1 = undefined;
            var _closure2_slot1 = var1;
            var6 = null;
            if(!(var6 == var8)) { _fun0005_ip = 148; continue _fun0005 }
 42:
            if(!(var6 == var7)) { _fun0005_ip = 118; continue _fun0005 }
 46:
            var2 = var6 != var4;
            if(!var2) { _fun0005_ip = 68; continue _fun0005 }
 53:
            var9 = _closure1_slot8;
            var9 = var9[var5];
            var2 = var6 != var9;
 68:
            if(!var2) { _fun0005_ip = 291; continue _fun0005 }
 74:
            var _closure1_slot7 = var6;
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var2 = 5;
            var2 = var10[var2];
            var9 = var9.bind(var1)(var2);
            var2 = var9.fetchForChannel;
            var2 = var2.bind(var9)(var5, var4);
            _fun0005_ip = 291; continue _fun0005;
 118:
            _closure1_slot7 = var7;
            var7 = _closure1_slot9;
            var2 = _closure1_slot11;
            var2 = var2.bind(var1)(var5, var4);
            var2 = delete var7[var2];
            _fun0005_ip = 291; continue _fun0005;
 148:
            _closure1_slot7 = var6;
            var7 = new Array(0);
            if(!(var6 != var4)) { _fun0005_ip = 232; continue _fun0005 }
 163:
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var6 = 6;
            var6 = var10[var6];
            var9 = var9.bind(var1)(var6);
            var6 = _closure1_slot12;
            var6 = var6.bind(var1)(var5);
            var9 = var9.bind(var1)(var6);
            var6 = var9.values;
            var10 = var6.bind(var9)();
            var9 = var10.filter;
            var6 = function(arg1) {
                var1 = arg1;
                var2 = var1.channel_id;
                var1 = _closure2_slot0;
                var1 = var2 !== var1;
                return var1;
            };
            var9 = var9.bind(var10)(var6);
            var6 = var9.value;
            var7 = var6.bind(var9)();
 232:
            var9 = _closure1_slot8;
            var6 = {};
            var9[var5] = var6;
            _closure2_slot1 = var6;
            var6 = var7.concat;
            var7 = var6.bind(var7)(var8);
            var6 = var7.forEach;
            var3 = function(arg1) {
                var1 = arg1;
                var3 = _closure2_slot1;
                var2 = var1.id;
                var3[var2] = var1;
                return var1;
            };
            var3 = var6.bind(var7)(var3);
            var3 = _closure1_slot9;
            var2 = _closure1_slot11;
            var2 = var2.bind(var1)(var5, var4);
            var2 = delete var3[var2];
 291:
            return var1;
        }
    };
    var2['WEBHOOKS_UPDATE'] = var9;
    var9 = function handleWebhooksFetching(arg1) {
        var1 = arg1;
        var5 = var1.guildId;
        var3 = var1.channelId;
        var4 = _closure1_slot9;
        var2 = _closure1_slot11;
        var1 = undefined;
        var3 = var2.bind(var1)(var5, var3);
        var2 = true;
        var4[var3] = var2;
        return var1;
    };
    var2['WEBHOOKS_FETCHING'] = var9;
    var2['WEBHOOK_CREATE'] = var8;
    var2['WEBHOOK_UPDATE'] = var8;
    var4 = function handleWebhookDelete(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var3 = var1.webhookId;
        var2 = _closure1_slot12;
        var1 = undefined;
        var2 = var2.bind(var1)(var4);
        var2 = delete var2[var3];
        return var1;
    };
    var2['WEBHOOK_DELETE'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var7](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/WebhooksStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();