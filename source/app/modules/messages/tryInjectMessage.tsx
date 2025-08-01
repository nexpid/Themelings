// app/modules/messages/tryInjectMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function createInjectedInGameNuxMessage(arg1, arg2) {
        var2 = arg1;
        var4 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 2;
        var3 = var6[var3];
        var5 = undefined;
        var4 = var4.bind(var5)(var3);
        var3 = {};
        var7 = arg2;
        var3['channelId'] = var7;
        var7 = _closure1_slot6;
        var7 = var7.IN_GAME_MESSAGE_NUX;
        var3['type'] = var7;
        var7 = '';
        var3['content'] = var7;
        var7 = var2.author;
        var3['author'] = var7;
        var7 = _closure1_slot4;
        var7 = var7.EPHEMERAL;
        var3['flags'] = var7;
        var7 = _closure1_slot5;
        var7 = var7.SENT;
        var3['state'] = var7;
        var4 = var4.bind(var5)(var3);
        var3 = _closure1_slot0;
        var1 = 3;
        var1 = var6[var1];
        var3 = var3.bind(var5)(var1);
        var1 = var3.createMessageRecord;
        var1 = var1.bind(var3)(var4);
        var3 = var2.applicationId;
        var1['applicationId'] = var3;
        var2 = var2.timestamp;
        var1['timestamp'] = var2;
        return var1;
    };
    var _closure1_slot8 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.MessageFlags;
    var _closure1_slot4 = var8;
    var8 = var7.MessageStates;
    var _closure1_slot5 = var8;
    var7 = var7.MessageTypes;
    var _closure1_slot6 = var7;
    var4 = var4.Map;
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var14 = var7;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/tryInjectMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function tryCreateInjectedMessage(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var1 = arg2;
            var6 = _closure1_slot7;
            var4 = var6.get;
            var2 = var1.id;
            var4 = var4.bind(var6)(var2);
            var2 = var5.id;
            if(!(var4 !== var2)) { _fun0001_ip = 439; continue _fun0001 }
 40:
            var2 = var5.applicationId;
            var10 = null;
            var4 = var10 == var2;
            var2 = null;
            if(var4) { _fun0001_ip = 456; continue _fun0001 }
 59:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var11 = 4;
            var4 = var4[var11];
            var8 = undefined;
            var9 = var6.bind(var8)(var4);
            var7 = var9.hasFlag;
            var6 = var5.flags;
            var4 = _closure1_slot4;
            var4 = var4.SENT_BY_SOCIAL_LAYER_INTEGRATION;
            var4 = var7.bind(var9)(var6, var4);
            var2 = null;
            if(!var4) { _fun0001_ip = 456; continue _fun0001 }
 116:
            var4 = var1.isDM;
            var4 = var4.bind(var1)();
            var2 = null;
            if(!var4) { _fun0001_ip = 456; continue _fun0001 }
 134:
            var4 = var5.author;
            var6 = var4.id;
            var7 = _closure1_slot3;
            var4 = var7.getId;
            var4 = var4.bind(var7)();
            var2 = null;
            if(!(var6 !== var4)) { _fun0001_ip = 456; continue _fun0001 }
 168:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var11];
            var13 = var6.bind(var8)(var4);
            var9 = var13.hasFlag;
            var4 = var1.recipientFlags;
            var6 = var10 != var4;
            var7 = 0;
            if(!var6) { _fun0001_ip = 209; continue _fun0001 }
 206:
            var7 = var4;
 209:
            var14 = _closure1_slot0;
            var4 = _closure1_slot2;
            var6 = 5;
            var4 = var4[var6];
            var4 = var14.bind(var8)(var4);
            var4 = var4.ChannelRecipientPrivateUserDataFlags;
            var4 = var4.DISMISSED_IN_GAME_MESSAGE_NUX;
            var4 = var9.bind(var13)(var7, var4);
            var2 = null;
            if(var4) { _fun0001_ip = 456; continue _fun0001 }
 255:
            var9 = _closure1_slot7;
            var7 = var9.has;
            var4 = var1.id;
            var4 = var7.bind(var9)(var4);
            var2 = null;
            if(var4) { _fun0001_ip = 456; continue _fun0001 }
 282:
            var7 = _closure1_slot8;
            var4 = var1.id;
            var4 = var7.bind(var8)(var5, var4);
            var14 = _closure1_slot7;
            var13 = var14.set;
            var9 = var1.id;
            var7 = var5.id;
            var7 = var13.bind(var14)(var9, var7);
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var11];
            var11 = var9.bind(var8)(var7);
            var9 = var11.setFlag;
            var7 = var1.recipientFlags;
            var10 = var10 != var7;
            var12 = 0;
            if(!var10) { _fun0001_ip = 363; continue _fun0001 }
 360:
            var12 = var7;
 363:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = var10[var6];
            var6 = var7.bind(var8)(var6);
            var6 = var6.ChannelRecipientPrivateUserDataFlags;
            var7 = var6.DISMISSED_IN_GAME_MESSAGE_NUX;
            var6 = true;
            var9 = var9.bind(var11)(var12, var7, var6);
            var7 = _closure1_slot1;
            var6 = 6;
            var6 = var10[var6];
            var8 = var7.bind(var8)(var6);
            var7 = var8.updatePrivateChannelRecipientFlags;
            var6 = var1.id;
            var6 = var7.bind(var8)(var6, var9);
            var2 = var4;
            _fun0001_ip = 456; continue _fun0001;
 439:
            var4 = _closure1_slot8;
            var3 = var1.id;
            var1 = undefined;
            var2 = var4.bind(var1)(var5, var3);
 456:
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0001_ip = 468; continue _fun0001 }
 465:
            var1 = var2;
 468:
            return var1;
        }
    };
    var3['tryCreateInjectedMessage'] = var2;
    return var1;
})();