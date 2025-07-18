// app/modules/guild_sidebar/SectionFooterHelpers.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function isSectionFooterWithDivider(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var8 = arg3;
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var10 = 4;
            var1 = var1[var10];
            var9 = undefined;
            var1 = var2.bind(var9)(var1);
            var1 = var1.SECTION_INDEX_GUILD_ACTIONS;
            if(!(var8 !== var1)) { _fun0001_ip = 66; continue _fun0001 }
 41:
            var2 = var7.getSections;
            var1 = false;
            var1 = var2.bind(var7)(var1);
            var2 = var1[var8];
            var1 = 0;
            var1 = var1 === var2;
            _fun0001_ip = 147; continue _fun0001;
 66:
            var2 = var7.getGuildActionSection;
            var3 = var2.bind(var7)();
            var2 = var3.getRows;
            var4 = var2.bind(var3)();
            var3 = var4.length;
            var2 = 1;
            var2 = var2 === var3;
            if(!var2) { _fun0001_ip = 121; continue _fun0001 }
 101:
            var3 = 0;
            var4 = var4[var3];
            var3 = _closure1_slot4;
            var3 = var3.GUILD_PREMIUM_PROGRESS_BAR;
            var2 = var4 === var3;
 121:
            if(var2) { _fun0001_ip = 144; continue _fun0001 }
 124:
            var3 = var7.getGuildActionSection;
            var4 = var3.bind(var7)();
            var3 = var4.isEmpty;
            var2 = var3.bind(var4)();
 144:
            var1 = var2;
 147:
            var1 = !var1;
            if(!var1) { _fun0001_ip = 294; continue _fun0001 }
 156:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var10];
            var2 = var3.bind(var9)(var2);
            var2 = var2.SECTION_INDEX_GUILD_ACTIONS;
            var2 = var8 === var2;
            if(var2) { _fun0001_ip = 291; continue _fun0001 }
 186:
            var3 = arg2;
            var4 = !var3;
            var3 = !var4;
            if(var4) { _fun0001_ip = 288; continue _fun0001 }
 198:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var10];
            var4 = var6.bind(var9)(var4);
            var4 = var4.SECTION_INDEX_FAVORITES;
            var4 = var8 === var4;
            if(var4) { _fun0001_ip = 285; continue _fun0001 }
 228:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var10];
            var5 = var6.bind(var9)(var5);
            var5 = var5.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
            var5 = var8 !== var5;
            if(!var5) { _fun0001_ip = 282; continue _fun0001 }
 258:
            var6 = var7.recentsSectionNumber;
            var6 = var8 === var6;
            if(var6) { _fun0001_ip = 279; continue _fun0001 }
 271:
            var7 = var7.voiceChannelsSectionNumber;
            var6 = false;
 279:
            var5 = var6;
 282:
            var4 = var5;
 285:
            var3 = var4;
 288:
            var2 = var3;
 291:
            var1 = var2;
 294:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function isSectionFooterVoiceSummaryEligible(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var3 = arg2;
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var7 = 4;
            var1 = var1[var7];
            var6 = undefined;
            var1 = var5.bind(var6)(var1);
            var1 = var1.SECTION_INDEX_GUILD_ACTIONS;
            var1 = var3 === var1;
            if(var1) { _fun0002_ip = 71; continue _fun0002 }
 44:
            var8 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var7];
            var5 = var8.bind(var6)(var5);
            var5 = var5.SECTION_INDEX_FAVORITES;
            var1 = var3 === var5;
 71:
            if(var1) { _fun0002_ip = 101; continue _fun0002 }
 74:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
            var1 = var3 === var4;
 101:
            if(var1) { _fun0002_ip = 114; continue _fun0002 }
 104:
            var4 = var2.recentsSectionNumber;
            var1 = var3 === var4;
 114:
            if(var1) { _fun0002_ip = 127; continue _fun0002 }
 117:
            var2 = var2.voiceChannelsSectionNumber;
            var1 = var3 === var2;
 127:
            var1 = !var1;
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var4 = function getSectionFooterActiveVoiceChannels(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var3 = var2.category;
            var4 = var2.voiceStates;
            var _closure2_slot0 = var4;
            var4 = var2.selectedChannelId;
            var _closure2_slot1 = var4;
            var2 = var2.selectedVoiceChannelId;
            var _closure2_slot2 = var2;
            var5 = _closure1_slot2;
            var4 = var5.isCollapsed;
            var2 = var3.record;
            var2 = var2.id;
            var4 = var4.bind(var5)(var2);
            var2 = true;
            if(!(var2 === var4)) { _fun0003_ip = 104; continue _fun0003 }
 75:
            var2 = var3.getChannelRecords;
            var3 = var2.bind(var3)();
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = arg1;
                    var3 = _closure1_slot3;
                    var2 = var3.can;
                    var1 = _closure1_slot5;
                    var1 = var1.VIEW_CHANNEL;
                    var1 = var2.bind(var3)(var1, var4);
                    if(var1) { _fun0004_ip = 39; continue _fun0004 }
 35:
                    var1 = false;
                    return var1;
 39:
                    var2 = _closure2_slot0;
                    var1 = var4.id;
                    var2 = var2[var1];
                    var1 = null;
                    if(!(var1 == var2)) { _fun0004_ip = 65; continue _fun0004 }
 61:
                    var2 = new Array(0);
 65:
                    var5 = var4.id;
                    var1 = _closure2_slot2;
                    var1 = var5 !== var1;
                    if(!var1) { _fun0004_ip = 94; continue _fun0004 }
 81:
                    var4 = var4.id;
                    var3 = _closure2_slot1;
                    var1 = var4 !== var3;
 94:
                    if(!var1) { _fun0004_ip = 108; continue _fun0004 }
 97:
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var3 > var2;
 108:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            _fun0003_ip = 108; continue _fun0003;
 104:
            var1 = new Array(0);
 108:
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ChannelListGuildActionRow;
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Permissions;
    var _closure1_slot5 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_sidebar/SectionFooterHelpers.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getSectionFooterConfig(arg1, arg2, arg3) {
        var5 = arg1;
        var4 = arg3;
        var1 = {};
        var7 = _closure1_slot6;
        var3 = undefined;
        var6 = arg2;
        var6 = var7.bind(var3)(var5, var6, var4);
        var1['hasDivider'] = var6;
        var2 = _closure1_slot7;
        var2 = var2.bind(var3)(var5, var4);
        var1['canHaveVoiceSummary'] = var2;
        return var1;
    };
    var3['getSectionFooterConfig'] = var5;
    var3['getSectionFooterActiveVoiceChannels'] = var4;
    var2 = function isSectionFooterWithActiveVoiceChannels(arg1) {
        var2 = arg1;
        var6 = var2.category;
        var1 = var2.voiceStates;
        var5 = var2.selectedChannelId;
        var4 = var2.selectedVoiceChannelId;
        var3 = _closure1_slot8;
        var2 = {};
        var2['category'] = var6;
        var2['selectedChannelId'] = var5;
        var2['selectedVoiceChannelId'] = var4;
        var2['voiceStates'] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var2 = var1.length;
        var1 = 0;
        var1 = var2 > var1;
        return var1;
    };
    var3['isSectionFooterWithActiveVoiceChannels'] = var2;
    return var1;
})();