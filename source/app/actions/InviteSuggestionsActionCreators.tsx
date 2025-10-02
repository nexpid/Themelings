// app/actions/InviteSuggestionsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = var5.bind(var1)(var4);
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/InviteSuggestionsActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function loadInviteSuggestions(arg1) {
        var2 = arg1;
        var3 = var2.omitUserIds;
        var _closure2_slot0 = var3;
        var3 = var2.guild;
        var _closure2_slot1 = var3;
        var3 = var2.channel;
        var _closure2_slot2 = var3;
        var3 = var2.applicationId;
        var _closure2_slot3 = var3;
        var2 = var2.inviteTargetType;
        var _closure2_slot4 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.fetchUserAffinitiesV2;
        var3 = var2.bind(var3)();
        var2 = var3.then;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'LOAD_INVITE_SUGGESTIONS';
                var2['type'] = var5;
                var7 = _closure2_slot0;
                var6 = null;
                if(!(var6 == var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = global;
                var6 = var6.Set;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var9 = var7;
                var6 = new var9[var6](var8);
                var6 = var6 instanceof Object ? var6 : var7;
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var6 = _closure2_slot0;
case 4:
                var2['omitUserIds'] = var6;
                var6 = _closure2_slot1;
                var2['guild'] = var6;
                var6 = _closure2_slot2;
                var2['channel'] = var6;
                var6 = _closure2_slot3;
                var2['applicationId'] = var6;
                var5 = _closure2_slot4;
                var2['inviteTargetType'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['loadInviteSuggestions'] = var4;
    var2 = function searchInviteSuggestions(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'INVITE_SUGGESTIONS_SEARCH';
        var2['type'] = var5;
        var5 = arg1;
        var2['query'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['searchInviteSuggestions'] = var2;
    return var1;
})();