// app/modules/applications/message_embed/web/appMessageEmbedTrackingConfig.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.LinkType;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/message_embed/web/appMessageEmbedTrackingConfig.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function trackingConfigWithDefaults(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var4 = null;
            var5 = var4 == var3;
            var6 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var3.id;
case 2:
            var7 = var4 != var6;
            var5 = '0';
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var6;
case 4:
            var1['id'] = var5;
            var6 = var4 == var3;
            var5 = undefined;
            if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var3.linkType;
case 6:
            if(!(var4 == var5)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = _closure1_slot1;
            var5 = var6.UNKNOWN;
case 8:
            var1['linkType'] = var5;
            var6 = var4 == var3;
            var5 = undefined;
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var3.referrerId;
case 10:
            if(!(var4 == var5)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = _closure1_slot0;
            var6 = var7.getId;
            var5 = var6.bind(var7)();
case 12:
            var1['referrerId'] = var5;
            var6 = var4 == var3;
            var5 = undefined;
            if(var6) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5 = var3.activityCustomId;
case 14:
            var1['activityCustomId'] = var5;
            var6 = var4 == var3;
            var5 = undefined;
            if(var6) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var5 = var3.onView;
case 16:
            var1['onView'] = var5;
            var6 = var4 == var3;
            var5 = undefined;
            if(var6) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var5 = var3.onLinkCopied;
case 18:
            var1['onLinkCopied'] = var5;
            var6 = var4 == var3;
            var5 = undefined;
            if(var6) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var5 = var3.guildId;
case 20:
            var1['guildId'] = var5;
            var6 = var4 == var3;
            var5 = undefined;
            if(var6) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var5 = var3.channelId;
case 22:
            var1['channelId'] = var5;
            var6 = var4 == var3;
            var5 = undefined;
            if(var6) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var5 = var3.messageId;
case 24:
            var1['messageId'] = var5;
            var5 = var4 == var3;
            var6 = undefined;
            if(var5) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var6 = var3.isDeadEnd;
case 26:
            var5 = var4 != var6;
            if(!var5) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var5 = var6;
case 28:
            var1['isDeadEnd'] = var5;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var2 = var3.appEmbedState;
case 30:
            var1['appEmbedState'] = var2;
            return var1;
        }
    };
    var3['trackingConfigWithDefaults'] = var2;
    return var1;
})();