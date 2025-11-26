// app/modules/messages/native/renderer/row_data/embeds/PremiumGroupInviteEmbed.tsx
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
    var4 = var4.HELP_CENTER_LINK;
    var _closure1_slot3 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/PremiumGroupInviteEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createPremiumGroupInviteEmbed(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = var3.author;
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 1;
            var2 = var13[var2];
            var6 = undefined;
            var5 = var10.bind(var6)(var2);
            var4 = var5.createNativeStyleProperties;
            var2 = {};
            var12 = _closure1_slot1;
            var7 = 2;
            var9 = var13[var7];
            var9 = var12.bind(var6)(var9);
            var9 = var9.colors;
            var9 = var9.HEADER_PRIMARY;
            var2['headerTextColor'] = var9;
            var9 = var13[var7];
            var9 = var12.bind(var6)(var9);
            var9 = var9.colors;
            var9 = var9.TEXT_NORMAL;
            var2['bodyTextColor'] = var9;
            var9 = var13[var7];
            var9 = var12.bind(var6)(var9);
            var9 = var9.colors;
            var9 = var9.TEXT_LINK;
            var2['linkTextColor'] = var9;
            var7 = var13[var7];
            var7 = var12.bind(var6)(var7);
            var7 = var7.colors;
            var7 = var7.BACKGROUND_SECONDARY_ALT;
            var2['backgroundColor'] = var7;
            var4 = var4.bind(var5)(var2);
            var2 = arg2;
            var4 = var4.bind(var6)(var2);
            var9 = var4.headerTextColor;
            var2 = var4.bodyTextColor;
            var7 = var4.linkTextColor;
            var5 = var4.backgroundColor;
            var4 = 3;
            var4 = var13[var4];
            var11 = var10.bind(var6)(var4);
            var10 = var11.getAssetUriForEmbed;
            var4 = 4;
            var4 = var13[var4];
            var4 = var12.bind(var6)(var4);
            var4 = var10.bind(var11)(var4);
            var13 = var3.author;
            var10 = var13.id;
            var3 = arg3;
            if(!(var3 !== var10)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 5;
            var3 = var11[var3];
            var11 = var10.bind(var6)(var3);
            var10 = var11.getReceiverPremiumGroupInviteEmbedText;
            var3 = true;
            var3 = var10.bind(var11)(var13, var3);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 5;
            var10 = var12[var10];
            var12 = var11.bind(var6)(var10);
            var11 = var12.getSenderPremiumGroupInviteEmbedText;
            var10 = arg4;
            var3 = var11.bind(var12)(var13, var10);
case 6:
            if(!(var1 == var3)) { _fun0001_ip = 7; continue _fun0001 }
case 2:
            var1 = undefined;
            return var1;
case 7:
            var1 = {};
            var10 = var3.header;
            var1['headerText'] = var10;
            var1['headerColor'] = var9;
            var1['backgroundColor'] = var5;
            var1['borderColor'] = var5;
            var1['headerImageUrl'] = var4;
            var3 = var3.body;
            var1['bodyText'] = var3;
            var1['bodyTextColor'] = var2;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 6;
            var2 = var9[var2];
            var2 = var3.bind(var6)(var2);
            var5 = var2.intl;
            var4 = var5.formatToParts;
            var3 = _closure1_slot1;
            var2 = 7;
            var2 = var9[var2];
            var2 = var3.bind(var6)(var2);
            var3 = var2.9VTnfI;
            var2 = {};
            var6 = {};
            var9 = 'bindOpenUrl';
            var6['action'] = var9;
            var8 = _closure1_slot3;
            var6['url'] = var8;
            var6['linkColor'] = var7;
            var2['learnMoreLinkOnClick'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var1['learnMoreLink'] = var2;
            return var1;
        }
    };
    var3['createPremiumGroupInviteEmbed'] = var2;
    return var1;
})();