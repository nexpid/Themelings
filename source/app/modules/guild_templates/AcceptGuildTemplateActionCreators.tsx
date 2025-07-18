// app/modules/guild_templates/AcceptGuildTemplateActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.Endpoints;
    var _closure1_slot5 = var2;
    var2 = {};
    var4 = function acceptGuildTemplate(arg1, arg2, arg3) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.dispatch;
        var2 = {};
        var6 = 'GUILD_TEMPLATE_ACCEPT';
        var2['type'] = var6;
        var2['code'] = var5;
        var2 = var3.bind(var4)(var2);
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var7 = function(arg1, arg2) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = arg2;
            var _closure3_slot1 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var5 = var3.HTTP;
            var4 = var5.post;
            var3 = {};
            var9 = _closure1_slot5;
            var8 = var9.UNRESOLVED_GUILD_TEMPLATE;
            var6 = _closure2_slot0;
            var6 = var8.bind(var9)(var6);
            var3['url'] = var6;
            var6 = {};
            var8 = _closure2_slot1;
            var6['name'] = var8;
            var7 = _closure2_slot2;
            var6['icon'] = var7;
            var3['body'] = var6;
            var6 = true;
            var3['oldFormErrors'] = var6;
            var6 = false;
            var3['rejectWithError'] = var6;
            var5 = var4.bind(var5)(var3);
            var4 = var5.then;
            var3 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.body;
                    var _closure4_slot0 = var5;
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 3;
                    var4 = var4[var1];
                    var1 = undefined;
                    var7 = var6.bind(var1)(var4);
                    var6 = var7.dispatch;
                    var4 = {};
                    var8 = 'GUILD_TEMPLATE_ACCEPT_SUCCESS';
                    var4['type'] = var8;
                    var8 = _closure2_slot0;
                    var4['code'] = var8;
                    var4['guild'] = var5;
                    var4 = var6.bind(var7)(var4);
                    var6 = _closure1_slot3;
                    var4 = var6.isConnected;
                    var4 = var4.bind(var6)();
                    if(var4) { _fun0001_ip = 143; continue _fun0001 }
 93:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 5;
                    var4 = var7[var4];
                    var7 = var6.bind(var1)(var4);
                    var6 = var7.transitionToGuild;
                    var4 = var5.id;
                    var4 = var6.bind(var7)(var4);
                    var4 = _closure3_slot0;
                    var4 = var4.bind(var1)(var5);
                    _fun0001_ip = 165; continue _fun0001;
 143:
                    var4 = _closure1_slot4;
                    var3 = var4.addConditionalChangeListener;
                    var2 = function() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            var5 = _closure1_slot4;
                            var4 = var5.getGuild;
                            var3 = _closure4_slot0;
                            var3 = var3.id;
                            var4 = var4.bind(var5)(var3);
                            var3 = null;
                            if(!(var3 == var4)) { _fun0002_ip = 39; continue _fun0002 }
 35:
                            var3 = undefined;
                            return var3;
 39:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 5;
                            var2 = var3[var2];
                            var3 = undefined;
                            var5 = var4.bind(var3)(var2);
                            var4 = var5.transitionToGuild;
                            var2 = _closure4_slot0;
                            var1 = var2.id;
                            var1 = var4.bind(var5)(var1);
                            var1 = _closure3_slot0;
                            var1 = var1.bind(var3)(var2);
                            var1 = false;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
 165:
                    return var1;
                }
            };
            var2 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'GUILD_TEMPLATE_ACCEPT_FAILURE';
                var2['type'] = var5;
                var5 = _closure2_slot0;
                var2['code'] = var5;
                var2 = var3.bind(var4)(var2);
                var3 = _closure3_slot1;
                var2 = arg1;
                var2 = var2.body;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var8 = var2;
        var1 = new var8[var3](var7, var6);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var2['acceptGuildTemplate'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_templates/AcceptGuildTemplateActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();