// app/modules/icymi/ICYMITypes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var3 = exports;
    var12 = dependencyMap;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var14 = 0;
    var4 = var12[var14];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var5 = var4.ChannelTypes;
    var _closure1_slot0 = var5;
    var4 = var4.MessageEmbedTypes;
    var8 = {};
    var8['MESSAGE'] = var14;
    var5 = 'MESSAGE';
    var8[var14] = var5;
    var10 = 1;
    var8['SUMMARY'] = var10;
    var5 = 'SUMMARY';
    var8[var10] = var5;
    var13 = 2;
    var8['ACTIVITY'] = var13;
    var5 = 'ACTIVITY';
    var8[var13] = var5;
    var9 = 3;
    var8['CUSTOM_STATUS'] = var9;
    var5 = 'CUSTOM_STATUS';
    var8[var9] = var5;
    var6 = 4;
    var8['GENERATED_CANDIDATE'] = var6;
    var5 = 'GENERATED_CANDIDATE';
    var8[var6] = var5;
    var6 = 5;
    var8['GUILD_EVENT'] = var6;
    var5 = 'GUILD_EVENT';
    var8[var6] = var5;
    var6 = 6;
    var8['RECOMMENDED_GUILDS'] = var6;
    var5 = 'RECOMMENDED_GUILDS';
    var8[var6] = var5;
    var _closure1_slot1 = var8;
    var15 = var2.Set;
    var6 = var8.MESSAGE;
    var5 = new Array(4);
    var5[0] = var6;
    var6 = var8.SUMMARY;
    var5[1] = var6;
    var6 = var8.CUSTOM_STATUS;
    var5[2] = var6;
    var6 = var8.GENERATED_CANDIDATE;
    var5[3] = var6;
    var6 = var15.prototype;
    var6 = Object.create(var6, {constructor: {value: var15}});
    var19 = var6;
    var18 = var5;
    var5 = new var19[var15](var18, var17);
    var6 = var5 instanceof Object ? var5 : var6;
    var5 = var2.Set;
    var15 = var4.IMAGE;
    var2 = new Array(2);
    var2[0] = var15;
    var4 = var4.GIFV;
    var2[1] = var4;
    var4 = var5.prototype;
    var4 = Object.create(var4, {constructor: {value: var5}});
    var19 = var4;
    var18 = var2;
    var2 = new var19[var5](var18, var17);
    var5 = var2 instanceof Object ? var2 : var4;
    var4 = {};
    var4['DEFAULT'] = var14;
    var2 = 'DEFAULT';
    var4[var14] = var2;
    var4['BOOKMARKS'] = var13;
    var2 = 'BOOKMARKS';
    var4[var13] = var2;
    var2 = {};
    var2['TRENDING_TOPIC'] = var14;
    var13 = 'TRENDING_TOPIC';
    var2[var14] = var13;
    var2['PRO_TIP'] = var10;
    var13 = 'PRO_TIP';
    var2[var10] = var13;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/icymi/ICYMITypes.tsx';
    var10 = var11.bind(var12)(var10);
    var10 = 15;
    var3['ICYMI_PAGE_SIZE'] = var10;
    var3['MIN_ITEMS_FOR_NEW_PILL'] = var9;
    var9 = 50;
    var3['MIN_SCORE_FOR_NEW_PILL'] = var9;
    var9 = '1312632705086787756';
    var3['GAME_CONTENT_GUILD_ID'] = var9;
    var3['ICYMIItemTypes'] = var8;
    var7 = function typeToString(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = var2.type;
            var3 = _closure1_slot1;
            var3 = var3.MESSAGE;
            if(!(var3 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot1;
            var3 = var3.SUMMARY;
            if(!(var3 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot1;
            var3 = var3.ACTIVITY;
            if(!(var3 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot1;
            var3 = var3.CUSTOM_STATUS;
            if(!(var3 !== var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = _closure1_slot1;
            var3 = var3.GUILD_EVENT;
            if(!(var3 !== var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = _closure1_slot1;
            var3 = var3.RECOMMENDED_GUILDS;
            if(!(var3 !== var4)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = _closure1_slot1;
            var3 = var3.GENERATED_CANDIDATE;
            if(!(var3 !== var4)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = undefined;
            return var3;
case 14:
            var3 = 'generated_candidate';
            return var3;
case 12:
            var3 = 'recommended_guilds';
            return var3;
case 10:
            var3 = 'guild_event';
            return var3;
case 8:
            var3 = 'hotwheels_custom_status';
            return var3;
case 6:
            var3 = 'hotwheels_gaming_activity';
            return var3;
case 4:
            var3 = 'summary';
            return var3;
case 2:
            var3 = var2.data;
            var4 = var3.channel_type;
            var1 = _closure1_slot0;
            var3 = var1.GUILD_ANNOUNCEMENT;
            var1 = 'announcement';
            if(!(var4 !== var3)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = var2.data;
            var4 = var2.message_context;
            var3 = null;
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var2 = var4.external_content_application_id;
case 18:
            var3 = var3 != var2;
            var2 = 'message';
            if(!var3) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var2 = 'game_message';
case 20:
            var1 = var2;
case 16:
            return var1;
        }
    };
    var3['typeToString'] = var7;
    var3['SUPPORTED_ITEM_TYPES'] = var6;
    var3['GRAVITY_VALID_EMBED_TYPES'] = var5;
    var3['GravityICYMIDoubleTapBehavior'] = var4;
    var3['GeneratedCandidateType'] = var2;
    return var1;
})();