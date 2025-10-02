// app/modules/messages/getEmojiPopoutMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.EmojiSourceDataTypes;
    var _closure1_slot2 = var4;
    var4 = {};
    var5 = 'Custom Emoji Popout';
    var4['DEFAULT'] = var5;
    var5 = 'Custom Emoji Popout (Cross-Server)';
    var4['CROSS_SERVER'] = var5;
    var5 = 'Custom Emoji Popout (Upsell Joined Current-Server)';
    var4['UPSELL_CURRENT_SERVER_JOINED'] = var5;
    var5 = 'Custom Emoji Popout (Upsell Joined Cross-Server)';
    var4['UPSELL_CROSS_SERVER_JOINED'] = var5;
    var5 = 'Custom Emoji Popout (Upsell Not-Joined Cross-Server)';
    var4['UPSELL_CROSS_SERVER_JOINABLE'] = var5;
    var5 = 'Custom Emoji Popout (Soft Upsell)';
    var4['UPSELL_CROSS_SERVER_UNJOINABLE'] = var5;
    var _closure1_slot3 = var4;
    var4 = {};
    var5 = 'GET_PREMIUM';
    var4['GET_PREMIUM'] = var5;
    var5 = 'JOIN_GUILD';
    var4['JOIN_GUILD'] = var5;
    var5 = 'UNAVAILABLE';
    var4['UNAVAILABLE'] = var5;
    var _closure1_slot4 = var4;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/getEmojiPopoutMessage.tsx';
    var5 = var6.bind(var7)(var5);
    var3['EmojiPopoutType'] = var4;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var13 = var2.sourceType;
            var8 = var2.expressionSourceApplication;
            var4 = var2.isPremium;
            var11 = var2.hasJoinedEmojiSourceGuild;
            var5 = var2.isUnusableRoleSubscriptionEmoji;
            var1 = var2.isDiscoverable;
            var3 = var2.emojiComesFromCurrentGuild;
            var7 = var2.userIsRoleSubscriber;
            var10 = var2.isRoleSubscriptionEmoji;
            var9 = var2.shouldHideRoleSubscriptionCTA;
            var19 = var2.onOpenPremiumSettings;
            var12 = _closure1_slot2;
            var12 = var12.APPLICATION;
            if(!(var13 === var12)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = null;
            if(!(var12 == var8)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            if(var4) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            if(var11) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var16 = _closure1_slot0;
            var17 = _closure1_slot1;
            var12 = 1;
            var4 = var17[var12];
            var15 = undefined;
            var4 = var16.bind(var15)(var4);
            var14 = var4.intl;
            if(var1) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var18 = var14.format;
            var4 = var17[var12];
            var4 = var16.bind(var15)(var4);
            var4 = var4.t;
            var13 = var4.U6vLcH;
            var4 = {};
            var4['openPremiumSettings'] = var19;
            var4 = var18.bind(var14)(var13, var4);
            _fun0001_ip = 11; continue _fun0001;
case 9:
            var13 = var14.string;
            var12 = var17[var12];
            var12 = var16.bind(var15)(var12);
            var12 = var12.t;
            var12 = var12.FJ6Z09;
            var4 = var13.bind(var14)(var12);
case 11:
            _fun0001_ip = 12; continue _fun0001;
case 7:
            if(!var9) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            if(var5) { _fun0001_ip = 15; continue _fun0001 }
case 13:
            var14 = _closure1_slot0;
            var17 = _closure1_slot1;
            var12 = 1;
            var15 = var17[var12];
            var13 = undefined;
            var15 = var14.bind(var13)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var12 = var17[var12];
            var12 = var14.bind(var13)(var12);
            var14 = var12.t;
            if(var5) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            if(var3) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var12 = var14.jQy3aG;
            var12 = var15.bind(var16)(var12);
            _fun0001_ip = 20; continue _fun0001;
case 18:
            var13 = var14.ICPhqa;
            var12 = var15.bind(var16)(var13);
case 20:
            _fun0001_ip = 21; continue _fun0001;
case 16:
            if(var7) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var13 = var14.g8i/bW;
            var13 = var15.bind(var16)(var13);
            _fun0001_ip = 24; continue _fun0001;
case 22:
            var14 = var14.vLklfH;
            var13 = var15.bind(var16)(var14);
case 24:
            var12 = var13;
case 21:
            _fun0001_ip = 25; continue _fun0001;
case 15:
            var17 = _closure1_slot0;
            var18 = _closure1_slot1;
            var13 = 1;
            var14 = var18[var13];
            var16 = undefined;
            var14 = var17.bind(var16)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var18[var13];
            var13 = var17.bind(var16)(var13);
            var13 = var13.t;
            var13 = var13.xFb68v;
            var12 = var14.bind(var15)(var13);
case 25:
            var4 = var12;
case 12:
            _fun0001_ip = 26; continue _fun0001;
case 5:
            if(var11) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var15 = _closure1_slot0;
            var16 = _closure1_slot1;
            var11 = 1;
            var12 = var16[var11];
            var14 = undefined;
            var12 = var15.bind(var14)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var16[var11];
            var11 = var15.bind(var14)(var11);
            var11 = var11.t;
            if(var1) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var1 = var11.0LMpW1;
            var1 = var12.bind(var13)(var1);
            _fun0001_ip = 31; continue _fun0001;
case 29:
            var11 = var11.xE9WGh;
            var1 = var12.bind(var13)(var11);
case 31:
            _fun0001_ip = 32; continue _fun0001;
case 27:
            if(var10) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var14 = _closure1_slot0;
            var15 = _closure1_slot1;
            var10 = 1;
            var11 = var15[var10];
            var13 = undefined;
            var11 = var14.bind(var13)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var15[var10];
            var10 = var14.bind(var13)(var10);
            var10 = var10.t;
            if(var3) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var3 = var10.GM0xaW;
            var3 = var11.bind(var12)(var3);
            _fun0001_ip = 37; continue _fun0001;
case 35:
            var10 = var10.hU4kIS;
            var3 = var11.bind(var12)(var10);
case 37:
            _fun0001_ip = 38; continue _fun0001;
case 33:
            if(!var9) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            if(var5) { _fun0001_ip = 41; continue _fun0001 }
case 39:
            var13 = _closure1_slot0;
            var14 = _closure1_slot1;
            var9 = 1;
            var10 = var14[var9];
            var12 = undefined;
            var10 = var13.bind(var12)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var14[var9];
            var9 = var13.bind(var12)(var9);
            var9 = var9.t;
            if(var5) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var5 = var9.Eoynp6;
            var5 = var10.bind(var11)(var5);
            _fun0001_ip = 44; continue _fun0001;
case 42:
            if(var7) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var7 = var9.g8i/bW;
            var7 = var10.bind(var11)(var7);
            _fun0001_ip = 47; continue _fun0001;
case 45:
            var9 = var9.vLklfH;
            var7 = var10.bind(var11)(var9);
case 47:
            var5 = var7;
case 44:
            _fun0001_ip = 48; continue _fun0001;
case 41:
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var7 = 1;
            var9 = var13[var7];
            var11 = undefined;
            var9 = var12.bind(var11)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var7 = var13[var7];
            var7 = var12.bind(var11)(var7);
            var7 = var7.t;
            var7 = var7.xFb68v;
            var5 = var9.bind(var10)(var7);
case 48:
            var3 = var5;
case 38:
            var1 = var3;
case 32:
            var4 = var1;
case 26:
            _fun0001_ip = 49; continue _fun0001;
case 4:
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var1 = 1;
            var5 = var10[var1];
            var3 = undefined;
            var5 = var9.bind(var3)(var5);
            var7 = var5.intl;
            var5 = var7.formatToPlainString;
            var1 = var10[var1];
            var1 = var9.bind(var3)(var1);
            var1 = var1.t;
            var3 = var1.uERlTU;
            var1 = {};
            var8 = var8.name;
            var1['appName'] = var8;
            var4 = var5.bind(var7)(var3, var1);
case 49:
            var5 = var2.isPremium;
            var8 = var2.hasJoinedEmojiSourceGuild;
            var10 = var2.isUnusableRoleSubscriptionEmoji;
            var9 = var2.emojiComesFromCurrentGuild;
            var1 = var2.isDiscoverable;
            var3 = _closure1_slot3;
            var7 = var3.DEFAULT;
            if(!var5) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            if(var8) { _fun0001_ip = 50; continue _fun0001 }
case 52:
            if(!var1) { _fun0001_ip = 50; continue _fun0001 }
case 53:
            var3 = _closure1_slot3;
            var3 = var3.CROSS_SERVER;
            _fun0001_ip = 54; continue _fun0001;
case 50:
            if(var5) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            if(!var8) { _fun0001_ip = 55; continue _fun0001 }
case 57:
            if(var10) { _fun0001_ip = 55; continue _fun0001 }
case 58:
            var10 = _closure1_slot3;
            if(var9) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            var9 = var10.UPSELL_CROSS_SERVER_JOINED;
            _fun0001_ip = 61; continue _fun0001;
case 59:
            var9 = var10.UPSELL_CURRENT_SERVER_JOINED;
case 61:
            var3 = var9;
            _fun0001_ip = 54; continue _fun0001;
case 55:
            if(var5) { _fun0001_ip = 62; continue _fun0001 }
case 63:
            var5 = var8;
case 62:
            var3 = var7;
            if(var5) { _fun0001_ip = 54; continue _fun0001 }
case 64:
            var5 = _closure1_slot3;
            if(var1) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            var1 = var5.UPSELL_CROSS_SERVER_UNJOINABLE;
            _fun0001_ip = 67; continue _fun0001;
case 65:
            var1 = var5.UPSELL_CROSS_SERVER_JOINABLE;
case 67:
            var3 = var1;
case 54:
            var1 = {};
            var8 = var2.isPremium;
            var7 = var2.hasJoinedEmojiSourceGuild;
            var5 = var2.isUnusableRoleSubscriptionEmoji;
            var9 = var2.isDiscoverable;
            var2 = !var7;
            if(!var2) { _fun0001_ip = 68; continue _fun0001 }
case 69:
            var2 = var9;
case 68:
            if(!var8) { _fun0001_ip = 70; continue _fun0001 }
case 71:
            if(var2) { _fun0001_ip = 72; continue _fun0001 }
case 70:
            if(var8) { _fun0001_ip = 73; continue _fun0001 }
case 74:
            if(!var7) { _fun0001_ip = 75; continue _fun0001 }
case 76:
            if(!var5) { _fun0001_ip = 77; continue _fun0001 }
case 75:
            if(!var2) { _fun0001_ip = 73; continue _fun0001 }
case 77:
            var2 = {};
            var5 = _closure1_slot4;
            var5 = var5.GET_PREMIUM;
            var2['type'] = var5;
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var5 = 1;
            var7 = var11[var5];
            var9 = undefined;
            var7 = var10.bind(var9)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var5 = var11[var5];
            var5 = var10.bind(var9)(var5);
            var5 = var5.t;
            var5 = var5.gl/XHB;
            var5 = var7.bind(var8)(var5);
            var2['text'] = var5;
            var5 = null;
            var2['description'] = var5;
            _fun0001_ip = 78; continue _fun0001;
case 73:
            var5 = {'type': null, 'text': null, 'description': null};
            var7 = _closure1_slot4;
            var7 = var7.UNAVAILABLE;
            var5['type'] = var7;
            var2 = var5;
case 78:
            _fun0001_ip = 79; continue _fun0001;
case 72:
            var5 = {};
            var7 = _closure1_slot4;
            var7 = var7.JOIN_GUILD;
            var5['type'] = var7;
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var6 = 1;
            var7 = var11[var6];
            var9 = undefined;
            var7 = var10.bind(var9)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var11[var6];
            var6 = var10.bind(var9)(var6);
            var6 = var6.t;
            var6 = var6.riu2R0;
            var6 = var7.bind(var8)(var6);
            var5['text'] = var6;
            var6 = null;
            var5['description'] = var6;
            var2 = var5;
case 79:
            var21 = var1;
            var20 = var2;
            var2 = copyDataProperties(var21, var20);
            var2 = 'emojiDescription';
            var1[var2] = var4;
            var2 = 'analyticsType';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['getEmojiPopoutData'] = var2;
    return var1;
})();