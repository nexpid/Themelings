// app/modules/messages/native/renderer/row_data/embeds/SafetySystemNotificationEmbed.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function getIconType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot1;
            var4 = 'danger';
            var2 = arg1;
            if(!(var4 !== var2)) { _fun0001_ip = 31; continue _fun0001 }
 18:
            var4 = _closure1_slot2;
            var2 = 6;
            var2 = var4[var2];
            _fun0001_ip = 42; continue _fun0001;
 31:
            var4 = _closure1_slot2;
            var1 = 5;
            var2 = var4[var1];
 42:
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function SafetySystemNotificationEmbedInner(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = var1.embed;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var12 = 7;
            var1 = var1[var12];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.parseMessageEmbedForProps;
            var8 = var1.bind(var2)(var3);
            var6 = null;
            var2 = var6 == var8;
            var1 = null;
            if(var2) { _fun0002_ip = 558; continue _fun0002 }
 59:
            var2 = var8.ctas;
            var2 = var6 != var2;
            var9 = undefined;
            var7 = undefined;
            if(!var2) { _fun0002_ip = 232; continue _fun0002 }
 79:
            var2 = var8.ctas;
            var4 = 0;
            var2 = var2[var4];
            var2 = var6 != var2;
            var3 = undefined;
            if(!var2) { _fun0002_ip = 152; continue _fun0002 }
 100:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var12];
            var13 = var10.bind(var5)(var2);
            var11 = var13.mapCtaToNativeData;
            var2 = var8.ctas;
            var10 = var2[var4];
            var4 = var8.learn_more_link;
            var2 = var8.classification_id;
            var3 = var11.bind(var13)(var10, var4, var2);
 152:
            var2 = var8.ctas;
            var10 = 1;
            var2 = var2[var10];
            var4 = var6 != var2;
            var2 = undefined;
            if(!var4) { _fun0002_ip = 226; continue _fun0002 }
 174:
            var11 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var12];
            var13 = var11.bind(var5)(var4);
            var12 = var13.mapCtaToNativeData;
            var4 = var8.ctas;
            var11 = var4[var10];
            var10 = var8.learn_more_link;
            var4 = var8.classification_id;
            var2 = var12.bind(var13)(var11, var10, var4);
 226:
            var7 = var2;
            var9 = var3;
 232:
            var4 = _closure1_slot5;
            var3 = _closure1_slot7;
            var2 = {};
            var10 = var8.header;
            var2['titleText'] = var10;
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 8;
            var10 = var15[var10];
            var13 = var11.bind(var5)(var10);
            var12 = var13.getAssetUriForEmbed;
            var17 = _closure1_slot3;
            var16 = var17.resolveAssetSource;
            var18 = _closure1_slot8;
            var10 = var8.icon;
            var10 = var18.bind(var5)(var10);
            var10 = var16.bind(var17)(var10);
            var10 = var12.bind(var13)(var10);
            var2['titleIcon'] = var10;
            var10 = 9;
            var12 = var15[var10];
            var12 = var11.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var10 = var15[var10];
            var10 = var11.bind(var5)(var10);
            var10 = var10.t;
            var11 = var10.eevFb2;
            var10 = {};
            var15 = _closure1_slot6;
            var16 = var8.timestamp;
            var17 = var6 != var16;
            var14 = 0;
            if(!var17) { _fun0002_ip = 383; continue _fun0002 }
 380:
            var14 = var16;
 383:
            var14 = var15.bind(var5)(var14);
            var10['daysAgo'] = var14;
            var10 = var12.bind(var13)(var11, var10);
            var2['subtitleText'] = var10;
            var11 = var8.body;
            var12 = var6 != var11;
            var10 = '';
            if(!var12) { _fun0002_ip = 423; continue _fun0002 }
 420:
            var10 = var11;
 423:
            var2['descriptionText'] = var10;
            var8 = var8.theme;
            var2['footerTheme'] = var8;
            var10 = var6 == var9;
            var8 = undefined;
            if(var10) { _fun0002_ip = 452; continue _fun0002 }
 447:
            var8 = var9.type;
 452:
            var2['primaryCtaType'] = var8;
            var10 = var6 == var9;
            var8 = undefined;
            if(var10) { _fun0002_ip = 471; continue _fun0002 }
 466:
            var8 = var9.text;
 471:
            var2['primaryCtaText'] = var8;
            var10 = var6 == var9;
            var8 = undefined;
            if(var10) { _fun0002_ip = 490; continue _fun0002 }
 485:
            var8 = var9.key;
 490:
            var2['primaryCtaKey'] = var8;
            var9 = var6 == var7;
            var8 = undefined;
            if(var9) { _fun0002_ip = 509; continue _fun0002 }
 504:
            var8 = var7.type;
 509:
            var2['secondaryCtaType'] = var8;
            var9 = var6 == var7;
            var8 = undefined;
            if(var9) { _fun0002_ip = 528; continue _fun0002 }
 523:
            var8 = var7.text;
 528:
            var2['secondaryCtaText'] = var8;
            var8 = var6 == var7;
            var6 = undefined;
            if(var8) { _fun0002_ip = 547; continue _fun0002 }
 542:
            var6 = var7.key;
 547:
            var2['secondaryCtaKey'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 558:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Image;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageEmbedTypes;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = function getDaysAgo(arg1) {
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 4;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.bind(var2)();
        var3 = var4.diff;
        var1 = var6[var1];
        var5 = var5.bind(var2)(var1);
        var2 = var5.unix;
        var1 = arg1;
        var2 = var2.bind(var5)(var1);
        var1 = 'days';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.makeKeyedDataComponent;
    var4 = 'safetySystemNotificationEmbed';
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/SafetySystemNotificationEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function SafetySystemNotificationEmbed(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var6 = var1.message;
            var8 = null;
            var2 = var8 == var6;
            var1 = null;
            if(var2) { _fun0003_ip = 149; continue _fun0003 }
 22:
            var2 = var6.embeds;
            var2 = var8 == var2;
            var1 = null;
            if(var2) { _fun0003_ip = 149; continue _fun0003 }
 37:
            var2 = var6.embeds;
            var7 = 0;
            var3 = var2[var7];
            var4 = var8 == var3;
            var5 = undefined;
            var2 = undefined;
            if(var4) { _fun0003_ip = 66; continue _fun0003 }
 60:
            var2 = var3.fields;
 66:
            var2 = var8 == var2;
            var1 = null;
            if(var2) { _fun0003_ip = 149; continue _fun0003 }
 75:
            var2 = var6.embeds;
            var2 = var2[var7];
            var3 = var8 == var2;
            var4 = undefined;
            if(var3) { _fun0003_ip = 99; continue _fun0003 }
 94:
            var4 = var2.type;
 99:
            var3 = _closure1_slot4;
            var3 = var3.SAFETY_SYSTEM_NOTIFICATION;
            var1 = null;
            if(!(var4 === var3)) { _fun0003_ip = 149; continue _fun0003 }
 118:
            var4 = _closure1_slot5;
            var3 = _closure1_slot9;
            var2 = {};
            var6 = var6.embeds;
            var6 = var6[var7];
            var2['embed'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 149:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function createSafetySystemNotificationEmbed(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var5 = null;
            if(!(var5 != var4)) { _fun0004_ip = 128; continue _fun0004 }
 9:
            var1 = var4.embeds;
            if(!(var5 != var1)) { _fun0004_ip = 128; continue _fun0004 }
 19:
            var1 = var4.embeds;
            var13 = 0;
            var2 = var1[var13];
            var6 = var5 == var2;
            var3 = undefined;
            var1 = undefined;
            if(var6) { _fun0004_ip = 48; continue _fun0004 }
 42:
            var1 = var2.fields;
 48:
            if(!(var5 != var1)) { _fun0004_ip = 128; continue _fun0004 }
 52:
            var1 = var4.embeds;
            var1 = var1[var13];
            var6 = var5 == var1;
            var2 = undefined;
            if(var6) { _fun0004_ip = 76; continue _fun0004 }
 71:
            var2 = var1.type;
 76:
            var1 = _closure1_slot4;
            var1 = var1.SAFETY_SYSTEM_NOTIFICATION;
            if(!(var2 === var1)) { _fun0004_ip = 128; continue _fun0004 }
 93:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var11 = 7;
            var1 = var1[var11];
            var2 = var2.bind(var3)(var1);
            var1 = var2.parseMessageForProps;
            var2 = var1.bind(var2)(var4);
            if(!(var5 == var2)) { _fun0004_ip = 132; continue _fun0004 }
 128:
            var1 = undefined;
            return var1;
 132:
            var1 = var2.ctas;
            var1 = var5 != var1;
            var7 = undefined;
            var4 = undefined;
            if(!var1) { _fun0004_ip = 303; continue _fun0004 }
 152:
            var1 = var2.ctas;
            var1 = var1[var13];
            var1 = var5 != var1;
            var6 = undefined;
            if(!var1) { _fun0004_ip = 223; continue _fun0004 }
 171:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var11];
            var14 = var8.bind(var3)(var1);
            var10 = var14.mapCtaToNativeData;
            var1 = var2.ctas;
            var9 = var1[var13];
            var8 = var2.learn_more_link;
            var1 = var2.classification_id;
            var6 = var10.bind(var14)(var9, var8, var1);
 223:
            var1 = var2.ctas;
            var9 = 1;
            var1 = var1[var9];
            var8 = var5 != var1;
            var1 = undefined;
            if(!var8) { _fun0004_ip = 297; continue _fun0004 }
 245:
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var11];
            var14 = var10.bind(var3)(var8);
            var11 = var14.mapCtaToNativeData;
            var8 = var2.ctas;
            var10 = var8[var9];
            var9 = var2.learn_more_link;
            var8 = var2.classification_id;
            var1 = var11.bind(var14)(var10, var9, var8);
 297:
            var4 = var1;
            var7 = var6;
 303:
            var1 = {};
            var9 = var2.header;
            var10 = var5 != var9;
            var6 = '';
            var8 = var6;
            if(!var10) { _fun0004_ip = 327; continue _fun0004 }
 324:
            var8 = var9;
 327:
            var1['titleText'] = var8;
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 8;
            var8 = var14[var8];
            var11 = var9.bind(var3)(var8);
            var10 = var11.getAssetUriForEmbed;
            var16 = _closure1_slot3;
            var15 = var16.resolveAssetSource;
            var17 = _closure1_slot8;
            var8 = var2.icon;
            var8 = var17.bind(var3)(var8);
            var8 = var15.bind(var16)(var8);
            var8 = var10.bind(var11)(var8);
            var1['titleIcon'] = var8;
            var8 = 9;
            var10 = var14[var8];
            var10 = var9.bind(var3)(var10);
            var11 = var10.intl;
            var10 = var11.formatToPlainString;
            var8 = var14[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.t;
            var9 = var8.eevFb2;
            var8 = {};
            var12 = _closure1_slot6;
            var14 = var2.timestamp;
            var15 = var5 != var14;
            var13 = 0;
            if(!var15) { _fun0004_ip = 463; continue _fun0004 }
 460:
            var13 = var14;
 463:
            var12 = var12.bind(var3)(var13);
            var8['daysAgo'] = var12;
            var8 = var10.bind(var11)(var9, var8);
            var1['subtitleText'] = var8;
            var8 = var2.body;
            var9 = var5 != var8;
            if(!var9) { _fun0004_ip = 499; continue _fun0004 }
 496:
            var6 = var8;
 499:
            var1['descriptionText'] = var6;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0004_ip = 518; continue _fun0004 }
 513:
            var6 = var7.text;
 518:
            var1['primaryCtaText'] = var6;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0004_ip = 537; continue _fun0004 }
 532:
            var6 = var7.type;
 537:
            var1['primaryCtaType'] = var6;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0004_ip = 556; continue _fun0004 }
 551:
            var6 = var7.key;
 556:
            var1['primaryCtaKey'] = var6;
            var7 = var5 == var4;
            var6 = undefined;
            if(var7) { _fun0004_ip = 575; continue _fun0004 }
 570:
            var6 = var4.text;
 575:
            var1['secondaryCtaText'] = var6;
            var7 = var5 == var4;
            var6 = undefined;
            if(var7) { _fun0004_ip = 594; continue _fun0004 }
 589:
            var6 = var4.type;
 594:
            var1['secondaryCtaType'] = var6;
            var5 = var5 == var4;
            var3 = undefined;
            if(var5) { _fun0004_ip = 613; continue _fun0004 }
 608:
            var3 = var4.key;
 613:
            var1['secondaryCtaKey'] = var3;
            var2 = var2.theme;
            var1['footerTheme'] = var2;
            return var1;
        }
    };
    var3['createSafetySystemNotificationEmbed'] = var2;
    return var1;
})();