// app/modules/icymi/ICYMITypes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var12 = require;
    var3 = exports;
    var13 = dependencyMap;
    var4 = global;
    var6 = var4.Object;
    var5 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var2);
    var2 = 0;
    var5 = var13[var2];
    var1 = undefined;
    var5 = var12.bind(var1)(var5);
    var6 = var5.ChannelTypes;
    var _closure1_slot0 = var6;
    var5 = var5.MessageEmbedTypes;
    var9 = {};
    var9['MESSAGE'] = var2;
    var6 = 'MESSAGE';
    var9[var2] = var6;
    var11 = 2;
    var9['ACTIVITY'] = var11;
    var6 = 'ACTIVITY';
    var9[var11] = var6;
    var10 = 3;
    var9['CUSTOM_STATUS'] = var10;
    var6 = 'CUSTOM_STATUS';
    var9[var10] = var6;
    var7 = 4;
    var9['GENERATED_CANDIDATE'] = var7;
    var6 = 'GENERATED_CANDIDATE';
    var9[var7] = var6;
    var7 = 5;
    var9['GUILD_EVENT'] = var7;
    var6 = 'GUILD_EVENT';
    var9[var7] = var6;
    var7 = 6;
    var9['RECOMMENDED_GUILDS'] = var7;
    var6 = 'RECOMMENDED_GUILDS';
    var9[var7] = var6;
    var _closure1_slot1 = var9;
    var14 = var4.Set;
    var7 = var9.MESSAGE;
    var6 = new Array(3);
    var6[0] = var7;
    var7 = var9.CUSTOM_STATUS;
    var6[1] = var7;
    var7 = var9.GENERATED_CANDIDATE;
    var6[2] = var7;
    var7 = var14.prototype;
    var7 = Object.create(var7, {constructor: {value: var14}});
    var20 = var7;
    var19 = var6;
    var6 = new var20[var14](var19, var18);
    var7 = var6 instanceof Object ? var6 : var7;
    var6 = var4.Set;
    var14 = var5.IMAGE;
    var4 = new Array(2);
    var4[0] = var14;
    var5 = var5.GIFV;
    var4[1] = var5;
    var5 = var6.prototype;
    var5 = Object.create(var5, {constructor: {value: var6}});
    var20 = var5;
    var19 = var4;
    var4 = new var20[var6](var19, var18);
    var6 = var4 instanceof Object ? var4 : var5;
    var5 = {};
    var5['DEFAULT'] = var2;
    var4 = 'DEFAULT';
    var5[var2] = var4;
    var5['BOOKMARKS'] = var11;
    var4 = 'BOOKMARKS';
    var5[var11] = var4;
    var4 = {};
    var4['TRENDING_TOPIC'] = var2;
    var15 = 'TRENDING_TOPIC';
    var4[var2] = var15;
    var11 = 1;
    var4['PRO_TIP'] = var11;
    var14 = 'PRO_TIP';
    var4[var11] = var14;
    var2 = {};
    var16 = 'POPULAR_MESSAGE';
    var2['POPULAR_MESSAGE'] = var16;
    var16 = 'IMAGE';
    var2['IMAGE'] = var16;
    var16 = 'VIDEO';
    var2['VIDEO'] = var16;
    var16 = 'LINK';
    var2['LINK'] = var16;
    var16 = 'THREAD';
    var2['THREAD'] = var16;
    var16 = 'CHANGED_STATUS';
    var2['CHANGED_STATUS'] = var16;
    var16 = 'INTERESTING';
    var2['INTERESTING'] = var16;
    var16 = 'ANNOUNCEMENT';
    var2['ANNOUNCEMENT'] = var16;
    var16 = 'FORUM_POST';
    var2['FORUM_POST'] = var16;
    var16 = 'FILE';
    var2['FILE'] = var16;
    var2['TRENDING_TOPIC'] = var15;
    var2['PRO_TIP'] = var14;
    var11 = var13[var11];
    var13 = var12.bind(var1)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'modules/icymi/ICYMITypes.tsx';
    var11 = var12.bind(var13)(var11);
    var11 = 15;
    var3['ICYMI_PAGE_SIZE'] = var11;
    var3['MIN_ITEMS_FOR_NEW_PILL'] = var10;
    var10 = 50;
    var3['MIN_SCORE_FOR_NEW_PILL'] = var10;
    var10 = '1312632705086787756';
    var3['GAME_CONTENT_GUILD_ID'] = var10;
    var3['ICYMIItemTypes'] = var9;
    var8 = function typeToString(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = var2.type;
            var3 = _closure1_slot1;
            var3 = var3.MESSAGE;
            if(!(var3 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot1;
            var3 = var3.ACTIVITY;
            if(!(var3 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot1;
            var3 = var3.CUSTOM_STATUS;
            if(!(var3 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot1;
            var3 = var3.GUILD_EVENT;
            if(!(var3 !== var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = _closure1_slot1;
            var3 = var3.RECOMMENDED_GUILDS;
            if(!(var3 !== var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = _closure1_slot1;
            var3 = var3.GENERATED_CANDIDATE;
            if(!(var3 !== var4)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = undefined;
            return var3;
case 12:
            var3 = 'generated_candidate';
            return var3;
case 10:
            var3 = 'recommended_guilds';
            return var3;
case 8:
            var3 = 'guild_event';
            return var3;
case 6:
            var3 = 'hotwheels_custom_status';
            return var3;
case 4:
            var3 = 'hotwheels_gaming_activity';
            return var3;
case 2:
            var3 = var2.data;
            var4 = var3.channel_type;
            var1 = _closure1_slot0;
            var3 = var1.GUILD_ANNOUNCEMENT;
            var1 = 'announcement';
            if(!(var4 !== var3)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = var2.data;
            var4 = var2.message_context;
            var3 = null;
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = var4.external_content_application_id;
case 16:
            var3 = var3 != var2;
            var2 = 'message';
            if(!var3) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var2 = 'game_message';
case 18:
            var1 = var2;
case 14:
            return var1;
        }
    };
    var3['typeToString'] = var8;
    var3['SUPPORTED_ITEM_TYPES'] = var7;
    var3['GRAVITY_VALID_EMBED_TYPES'] = var6;
    var3['GravityICYMIDoubleTapBehavior'] = var5;
    var3['GeneratedCandidateType'] = var4;
    var3['ContentType'] = var2;
    return var1;
})();