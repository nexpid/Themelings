// app/modules/messages/native/renderer/row_data/embeds/SafetyPolicyNoticeEmbed.tsx
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
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SafetyHubPolicyNoticeKeys;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/SafetyPolicyNoticeEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createSafetyPolicyNoticeEmbed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = var2.embeds;
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var2.embeds;
            var5 = 0;
            var6 = var4[var5];
            var8 = var1 == var6;
            var7 = undefined;
            var4 = undefined;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var6.fields;
case 4:
            if(!(var1 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            var4 = var2.embeds;
            var4 = var4[var5];
            var6 = var1 == var4;
            var8 = undefined;
            if(var6) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var8 = var4.type;
case 7:
            var6 = _closure1_slot4;
            var6 = var6.SAFETY_POLICY_NOTICE;
            if(!(var8 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 9:
            var2 = var2.embeds;
            var5 = var2[var5];
            var9 = var5.fields;
            var2 = var1 == var9;
            var6 = undefined;
            if(var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = var9.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.rawName;
                var1 = _closure1_slot5;
                var1 = var1.CLASSIFICATION_ID;
                var1 = var2 === var1;
                return var1;
            };
            var6 = var8.bind(var9)(var2);
case 10:
            var8 = var1 != var6;
            var2 = undefined;
            if(!var8) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = var6;
case 12:
            var8 = var1 == var2;
            var6 = undefined;
            if(var8) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var6 = var2.rawValue;
case 14:
            var8 = var1 != var6;
            var2 = undefined;
            if(!var8) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = var6;
case 16:
            var8 = var5.fields;
            var6 = var1 == var8;
            var5 = undefined;
            if(var6) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var6 = var8.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.rawName;
                var1 = _closure1_slot5;
                var1 = var1.INCIDENT_TIMESTAMP;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var6.bind(var8)(var3);
case 18:
            var6 = var1 != var5;
            var3 = undefined;
            if(!var6) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var3 = var5;
case 20:
            var5 = var1 == var3;
            var15 = undefined;
            if(var5) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var5 = var3.rawValue;
            var5 = var1 == var5;
            var15 = undefined;
            if(var5) { _fun0001_ip = 22; continue _fun0001 }
case 24:
            var5 = global;
            var5 = var5.parseFloat;
            var3 = var3.rawValue;
            var15 = var5.bind(var7)(var3);
case 22:
            if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 25:
            if(!(var1 == var15)) { _fun0001_ip = 26; continue _fun0001 }
case 2:
            var1 = undefined;
            return var1;
case 26:
            var1 = {};
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 4;
            var5 = var8[var3];
            var5 = var6.bind(var7)(var5);
            var10 = var5.intl;
            var9 = var10.string;
            var5 = var8[var3];
            var5 = var6.bind(var7)(var5);
            var5 = var5.t;
            var5 = var5.4CxGXl;
            var5 = var9.bind(var10)(var5);
            var1['titleText'] = var5;
            var5 = 5;
            var5 = var8[var5];
            var9 = var6.bind(var7)(var5);
            var5 = var9.getAssetUriForEmbed;
            var11 = _closure1_slot3;
            var10 = var11.resolveAssetSource;
            var12 = _closure1_slot1;
            var4 = 6;
            var4 = var8[var4];
            var4 = var12.bind(var7)(var4);
            var4 = var10.bind(var11)(var4);
            var4 = var5.bind(var9)(var4);
            var1['titleIcon'] = var4;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var10 = var4.intl;
            var9 = var10.formatToPlainString;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var4 = var4.t;
            var5 = var4.eevFb2;
            var4 = {};
            var11 = 3;
            var13 = var8[var11];
            var13 = var12.bind(var7)(var13);
            var14 = var13.bind(var7)();
            var13 = var14.diff;
            var11 = var8[var11];
            var12 = var12.bind(var7)(var11);
            var11 = var12.unix;
            var12 = var11.bind(var12)(var15);
            var11 = 'days';
            var11 = var13.bind(var14)(var12, var11);
            var4['daysAgo'] = var11;
            var4 = var9.bind(var10)(var5, var4);
            var1['subtitleText'] = var4;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var9 = var4.intl;
            var5 = var9.string;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.5CLb0N;
            var4 = var5.bind(var9)(var4);
            var1['descriptionText'] = var4;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.zKnzws;
            var3 = var4.bind(var5)(var3);
            var1['ctaText'] = var3;
            var1['classificationId'] = var2;
            return var1;
        }
    };
    var3['createSafetyPolicyNoticeEmbed'] = var2;
    return var1;
})();