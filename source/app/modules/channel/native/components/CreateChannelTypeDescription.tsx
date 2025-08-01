// app/modules/channel/native/components/CreateChannelTypeDescription.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildProfileFetchStatus;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/native/components/CreateChannelTypeDescription.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CreateChannelTypeDescription(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.guildId;
            var7 = var1.channelType;
            var2 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 5;
            var1 = var4[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.useGuildProfile;
            var1 = var1.bind(var2)(var10);
            var2 = var1.guildProfile;
            var9 = var1.fetchGuildProfile;
            var _closure2_slot0 = var9;
            var4 = var1.fetchStatus;
            var1 = _closure1_slot4;
            var1 = var1.FETCHED;
            var8 = var4 !== var1;
            var1 = null;
            var4 = var1 != var2;
            if(!var4) { _fun0001_ip = 145; continue _fun0001 }
 97:
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var11 = 6;
            var11 = var13[var11];
            var11 = var12.bind(var5)(var11);
            var11 = var11.GuildProfileVisibilitySets;
            var12 = var11.VISIBLE;
            var11 = var12.has;
            var2 = var2.visibility;
            var4 = var11.bind(var12)(var2);
 145:
            var2 = !var8;
            if(var8) { _fun0001_ip = 154; continue _fun0001 }
 151:
            var2 = !var4;
 154:
            if(!var2) { _fun0001_ip = 171; continue _fun0001 }
 157:
            var4 = _closure1_slot5;
            var4 = var4.GUILD_ANNOUNCEMENT;
            var2 = var7 === var4;
 171:
            var8 = _closure1_slot2;
            var7 = var8.useEffect;
            var4 = new Array(2);
            var4[0] = var10;
            var4[1] = var9;
            var3 = function() {
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var3 = var7.bind(var8)(var3, var4);
            var1 = null;
            if(!var2) { _fun0001_ip = 324; continue _fun0001 }
 208:
            var4 = _closure1_slot6;
            var3 = _closure1_slot3;
            var2 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var6 = 7;
            var6 = var12[var6];
            var6 = var11.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-sm/normal', 'color': 'text-secondary'};
            var8 = 8;
            var9 = var12[var8];
            var9 = var11.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.2Ab4IS;
            var8 = var9.bind(var10)(var8);
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 324:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();