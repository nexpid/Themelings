// app/modules/messages/native/renderer/row_data/embeds/SafetySystemNotificationEmbed.tsx
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
    var4 = var4.Image;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageEmbedTypes;
    var _closure1_slot4 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/SafetySystemNotificationEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createSafetySystemNotificationEmbed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var5 = null;
            if(!(var5 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var4.embeds;
            if(!(var5 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = var4.embeds;
            var16 = 0;
            var2 = var1[var16];
            var6 = var5 == var2;
            var3 = undefined;
            var1 = undefined;
            if(var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var1 = var2.fields;
case 5:
            if(!(var5 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 7:
            var1 = var4.embeds;
            var1 = var1[var16];
            var6 = var5 == var1;
            var2 = undefined;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var1.type;
case 8:
            var1 = _closure1_slot4;
            var1 = var1.SAFETY_SYSTEM_NOTIFICATION;
            if(!(var2 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 10:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var11 = 5;
            var1 = var1[var11];
            var2 = var2.bind(var3)(var1);
            var1 = var2.parseMessageForProps;
            var2 = var1.bind(var2)(var4);
            if(!(var5 == var2)) { _fun0001_ip = 11; continue _fun0001 }
case 2:
            var1 = undefined;
            return var1;
case 11:
            var1 = var2.ctas;
            var1 = var5 != var1;
            var7 = undefined;
            var4 = undefined;
            if(!var1) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = var2.ctas;
            var1 = var1[var16];
            var1 = var5 != var1;
            var6 = undefined;
            if(!var1) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var11];
            var13 = var8.bind(var3)(var1);
            var10 = var13.mapCtaToNativeData;
            var1 = var2.ctas;
            var9 = var1[var16];
            var8 = var2.learn_more_link;
            var1 = var2.classification_id;
            var6 = var10.bind(var13)(var9, var8, var1);
case 14:
            var1 = var2.ctas;
            var9 = 1;
            var1 = var1[var9];
            var8 = var5 != var1;
            var1 = undefined;
            if(!var8) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var11];
            var13 = var10.bind(var3)(var8);
            var11 = var13.mapCtaToNativeData;
            var8 = var2.ctas;
            var10 = var8[var9];
            var9 = var2.learn_more_link;
            var8 = var2.classification_id;
            var1 = var11.bind(var13)(var10, var9, var8);
case 16:
            var4 = var1;
            var7 = var6;
case 12:
            var1 = {};
            var9 = var2.header;
            var10 = var5 != var9;
            var6 = '';
            var8 = var6;
            if(!var10) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var8 = var9;
case 18:
            var1['titleText'] = var8;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 6;
            var8 = var10[var8];
            var10 = var9.bind(var3)(var8);
            var9 = var10.getAssetUriForEmbed;
            var13 = _closure1_slot3;
            var11 = var13.resolveAssetSource;
            var15 = var2.icon;
            var14 = _closure1_slot1;
            var8 = 'danger';
            if(!(var8 !== var15)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var15 = _closure1_slot2;
            var8 = 4;
            var8 = var15[var8];
            _fun0001_ip = 22; continue _fun0001;
case 20:
            var17 = _closure1_slot2;
            var15 = 3;
            var8 = var17[var15];
case 22:
            var8 = var14.bind(var3)(var8);
            var8 = var11.bind(var13)(var8);
            var8 = var9.bind(var10)(var8);
            var1['titleIcon'] = var8;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 7;
            var10 = var13[var8];
            var10 = var9.bind(var3)(var10);
            var11 = var10.intl;
            var10 = var11.formatToPlainString;
            var8 = var13[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.t;
            var9 = var8.eevFb2;
            var8 = {};
            var13 = var2.timestamp;
            var14 = var5 != var13;
            var16 = 0;
            if(!var14) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var16 = var13;
case 23:
            var13 = _closure1_slot1;
            var17 = _closure1_slot2;
            var12 = 2;
            var14 = var17[var12];
            var14 = var13.bind(var3)(var14);
            var15 = var14.bind(var3)();
            var14 = var15.diff;
            var12 = var17[var12];
            var13 = var13.bind(var3)(var12);
            var12 = var13.unix;
            var13 = var12.bind(var13)(var16);
            var12 = 'days';
            var12 = var14.bind(var15)(var13, var12);
            var8['daysAgo'] = var12;
            var8 = var10.bind(var11)(var9, var8);
            var1['subtitleText'] = var8;
            var8 = var2.body;
            var9 = var5 != var8;
            if(!var9) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var6 = var8;
case 25:
            var1['descriptionText'] = var6;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var6 = var7.text;
case 27:
            var1['primaryCtaText'] = var6;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var6 = var7.type;
case 29:
            var1['primaryCtaType'] = var6;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var6 = var7.key;
case 31:
            var1['primaryCtaKey'] = var6;
            var7 = var5 == var4;
            var6 = undefined;
            if(var7) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var6 = var4.text;
case 33:
            var1['secondaryCtaText'] = var6;
            var7 = var5 == var4;
            var6 = undefined;
            if(var7) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var6 = var4.type;
case 35:
            var1['secondaryCtaType'] = var6;
            var5 = var5 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var3 = var4.key;
case 37:
            var1['secondaryCtaKey'] = var3;
            var2 = var2.theme;
            var1['footerTheme'] = var2;
            return var1;
        }
    };
    var3['createSafetySystemNotificationEmbed'] = var2;
    return var1;
})();