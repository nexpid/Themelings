// app/modules/messages/native/renderer/row_data/embeds/SafetyPolicyNoticeEmbed.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function SafetyPolicyNoticeEmbedInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var2 = var2.embed;
            var8 = var2.fields;
            var3 = null;
            var6 = var3 == var8;
            var5 = undefined;
            var4 = undefined;
            if(var6) { _fun0001_ip = 48; continue _fun0001 }
 30:
            var7 = var8.find;
            var6 = function(arg1) {
                var1 = arg1;
                var2 = var1.rawName;
                var1 = _closure1_slot5;
                var1 = var1.CLASSIFICATION_ID;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var7.bind(var8)(var6);
 48:
            var7 = var3 != var4;
            var6 = undefined;
            if(!var7) { _fun0001_ip = 60; continue _fun0001 }
 57:
            var6 = var4;
 60:
            var7 = var3 == var6;
            var4 = undefined;
            if(var7) { _fun0001_ip = 75; continue _fun0001 }
 69:
            var4 = var6.rawValue;
 75:
            var7 = var3 != var4;
            var6 = undefined;
            if(!var7) { _fun0001_ip = 87; continue _fun0001 }
 84:
            var6 = var4;
 87:
            var7 = var2.fields;
            var4 = var3 == var7;
            var2 = undefined;
            if(var4) { _fun0001_ip = 120; continue _fun0001 }
 102:
            var4 = var7.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.rawName;
                var1 = _closure1_slot5;
                var1 = var1.INCIDENT_TIMESTAMP;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var4.bind(var7)(var1);
 120:
            var4 = var3 != var2;
            var1 = undefined;
            if(!var4) { _fun0001_ip = 132; continue _fun0001 }
 129:
            var1 = var2;
 132:
            var2 = var3 == var1;
            var15 = undefined;
            if(var2) { _fun0001_ip = 175; continue _fun0001 }
 141:
            var2 = var1.rawValue;
            var2 = var3 == var2;
            var15 = undefined;
            if(var2) { _fun0001_ip = 175; continue _fun0001 }
 156:
            var2 = global;
            var2 = var2.parseFloat;
            var1 = var1.rawValue;
            var15 = var2.bind(var5)(var1);
 175:
            var2 = var3 == var6;
            var1 = null;
            if(var2) { _fun0001_ip = 506; continue _fun0001 }
 187:
            var2 = var3 == var15;
            var1 = null;
            if(var2) { _fun0001_ip = 506; continue _fun0001 }
 199:
            var4 = _closure1_slot6;
            var3 = _closure1_slot8;
            var2 = {};
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 6;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var12 = var8.intl;
            var9 = var12.string;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.4CxGXl;
            var8 = var9.bind(var12)(var8);
            var2['titleText'] = var8;
            var8 = 7;
            var8 = var11[var8];
            var12 = var10.bind(var5)(var8);
            var9 = var12.getAssetUriForEmbed;
            var16 = _closure1_slot3;
            var13 = var16.resolveAssetSource;
            var17 = _closure1_slot1;
            var8 = 8;
            var8 = var11[var8];
            var8 = var17.bind(var5)(var8);
            var8 = var13.bind(var16)(var8);
            var8 = var9.bind(var12)(var8);
            var2['titleIcon'] = var8;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var13 = var8.intl;
            var12 = var13.formatToPlainString;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var8 = var8.t;
            var9 = var8.eevFb2;
            var8 = {};
            var14 = _closure1_slot7;
            var14 = var14.bind(var5)(var15);
            var8['daysAgo'] = var14;
            var8 = var12.bind(var13)(var9, var8);
            var2['subtitleText'] = var8;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var12 = var8.intl;
            var9 = var12.string;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.5CLb0N;
            var8 = var9.bind(var12)(var8);
            var2['descriptionText'] = var8;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.zKnzws;
            var7 = var8.bind(var9)(var7);
            var2['ctaText'] = var7;
            var2['classificationId'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 506:
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
    var4 = var4.SafetyHubPolicyNoticeKeys;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = function getDaysAgo(arg1) {
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 5;
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
    var _closure1_slot7 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.makeKeyedDataComponent;
    var4 = 'safetyPolicyNoticeEmbed';
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/SafetyPolicyNoticeEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function SafetyPolicyNoticeEmbed(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var6 = var1.message;
            var1 = var6.embeds;
            var8 = null;
            var2 = var8 == var1;
            var1 = null;
            if(var2) { _fun0002_ip = 137; continue _fun0002 }
 25:
            var2 = var6.embeds;
            var7 = 0;
            var3 = var2[var7];
            var4 = var8 == var3;
            var5 = undefined;
            var2 = undefined;
            if(var4) { _fun0002_ip = 54; continue _fun0002 }
 48:
            var2 = var3.fields;
 54:
            var2 = var8 == var2;
            var1 = null;
            if(var2) { _fun0002_ip = 137; continue _fun0002 }
 63:
            var2 = var6.embeds;
            var2 = var2[var7];
            var3 = var8 == var2;
            var4 = undefined;
            if(var3) { _fun0002_ip = 87; continue _fun0002 }
 82:
            var4 = var2.type;
 87:
            var3 = _closure1_slot4;
            var3 = var3.SAFETY_POLICY_NOTICE;
            var1 = null;
            if(!(var4 === var3)) { _fun0002_ip = 137; continue _fun0002 }
 106:
            var4 = _closure1_slot6;
            var3 = _closure1_slot9;
            var2 = {};
            var6 = var6.embeds;
            var6 = var6[var7];
            var2['embed'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 137:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function createSafetyPolicyNoticeEmbed(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var4 = var2.embeds;
            var1 = null;
            if(!(var1 != var4)) { _fun0003_ip = 278; continue _fun0003 }
 20:
            var5 = var2.embeds;
            var4 = 0;
            var6 = var5[var4];
            var8 = var1 == var6;
            var7 = undefined;
            var5 = undefined;
            if(var8) { _fun0003_ip = 49; continue _fun0003 }
 43:
            var5 = var6.fields;
 49:
            if(!(var1 != var5)) { _fun0003_ip = 278; continue _fun0003 }
 56:
            var5 = var2.embeds;
            var5 = var5[var4];
            var8 = var1 == var5;
            var6 = undefined;
            if(var8) { _fun0003_ip = 80; continue _fun0003 }
 75:
            var6 = var5.type;
 80:
            var5 = _closure1_slot4;
            var5 = var5.SAFETY_POLICY_NOTICE;
            if(!(var6 === var5)) { _fun0003_ip = 278; continue _fun0003 }
 100:
            var2 = var2.embeds;
            var4 = var2[var4];
            var8 = var4.fields;
            var2 = var1 == var8;
            var5 = undefined;
            if(var2) { _fun0003_ip = 143; continue _fun0003 }
 125:
            var6 = var8.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.rawName;
                var1 = _closure1_slot5;
                var1 = var1.CLASSIFICATION_ID;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var6.bind(var8)(var2);
 143:
            var6 = var1 != var5;
            var2 = undefined;
            if(!var6) { _fun0003_ip = 155; continue _fun0003 }
 152:
            var2 = var5;
 155:
            var6 = var1 == var2;
            var5 = undefined;
            if(var6) { _fun0003_ip = 170; continue _fun0003 }
 164:
            var5 = var2.rawValue;
 170:
            var6 = var1 != var5;
            var2 = undefined;
            if(!var6) { _fun0003_ip = 182; continue _fun0003 }
 179:
            var2 = var5;
 182:
            var6 = var4.fields;
            var5 = var1 == var6;
            var4 = undefined;
            if(var5) { _fun0003_ip = 215; continue _fun0003 }
 197:
            var5 = var6.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.rawName;
                var1 = _closure1_slot5;
                var1 = var1.INCIDENT_TIMESTAMP;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var5.bind(var6)(var3);
 215:
            var5 = var1 != var4;
            var3 = undefined;
            if(!var5) { _fun0003_ip = 227; continue _fun0003 }
 224:
            var3 = var4;
 227:
            var4 = var1 == var3;
            var12 = undefined;
            if(var4) { _fun0003_ip = 270; continue _fun0003 }
 236:
            var4 = var3.rawValue;
            var4 = var1 == var4;
            var12 = undefined;
            if(var4) { _fun0003_ip = 270; continue _fun0003 }
 251:
            var4 = global;
            var4 = var4.parseFloat;
            var3 = var3.rawValue;
            var12 = var4.bind(var7)(var3);
 270:
            if(!(var1 != var2)) { _fun0003_ip = 278; continue _fun0003 }
 274:
            if(!(var1 == var12)) { _fun0003_ip = 282; continue _fun0003 }
 278:
            var1 = undefined;
            return var1;
 282:
            var1 = {};
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 6;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var9 = var4.intl;
            var5 = var9.string;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.4CxGXl;
            var4 = var5.bind(var9)(var4);
            var1['titleText'] = var4;
            var4 = 7;
            var4 = var8[var4];
            var9 = var6.bind(var7)(var4);
            var5 = var9.getAssetUriForEmbed;
            var13 = _closure1_slot3;
            var10 = var13.resolveAssetSource;
            var14 = _closure1_slot1;
            var4 = 8;
            var4 = var8[var4];
            var4 = var14.bind(var7)(var4);
            var4 = var10.bind(var13)(var4);
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
            var11 = _closure1_slot7;
            var11 = var11.bind(var7)(var12);
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