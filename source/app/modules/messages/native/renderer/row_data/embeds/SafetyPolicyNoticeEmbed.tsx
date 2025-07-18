// app/modules/messages/native/renderer/row_data/embeds/SafetyPolicyNoticeEmbed.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
            if(var6) { _fun0001_ip = 47; continue _fun0001 }
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
 47:
            var7 = var3 != var4;
            var6 = undefined;
            if(!var7) { _fun0001_ip = 59; continue _fun0001 }
 56:
            var6 = var4;
 59:
            var7 = var3 == var6;
            var4 = undefined;
            if(var7) { _fun0001_ip = 74; continue _fun0001 }
 68:
            var4 = var6.rawValue;
 74:
            var7 = var3 != var4;
            var6 = undefined;
            if(!var7) { _fun0001_ip = 86; continue _fun0001 }
 83:
            var6 = var4;
 86:
            var7 = var2.fields;
            var4 = var3 == var7;
            var2 = undefined;
            if(var4) { _fun0001_ip = 118; continue _fun0001 }
 101:
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
 118:
            var4 = var3 != var2;
            var1 = undefined;
            if(!var4) { _fun0001_ip = 130; continue _fun0001 }
 127:
            var1 = var2;
 130:
            var2 = var3 == var1;
            var15 = undefined;
            if(var2) { _fun0001_ip = 173; continue _fun0001 }
 139:
            var2 = var1.rawValue;
            var2 = var3 == var2;
            var15 = undefined;
            if(var2) { _fun0001_ip = 173; continue _fun0001 }
 154:
            var2 = global;
            var2 = var2.parseFloat;
            var1 = var1.rawValue;
            var15 = var2.bind(var5)(var1);
 173:
            var2 = var3 == var6;
            var1 = null;
            if(var2) { _fun0001_ip = 504; continue _fun0001 }
 185:
            var2 = var3 == var15;
            var1 = null;
            if(var2) { _fun0001_ip = 504; continue _fun0001 }
 197:
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
 504:
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
    var4 = native4;
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
            if(!(var1 != var4)) { _fun0003_ip = 276; continue _fun0003 }
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
            if(!(var1 != var5)) { _fun0003_ip = 276; continue _fun0003 }
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
            if(!(var6 === var5)) { _fun0003_ip = 276; continue _fun0003 }
 100:
            var2 = var2.embeds;
            var4 = var2[var4];
            var8 = var4.fields;
            var2 = var1 == var8;
            var5 = undefined;
            if(var2) { _fun0003_ip = 142; continue _fun0003 }
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
 142:
            var6 = var1 != var5;
            var2 = undefined;
            if(!var6) { _fun0003_ip = 154; continue _fun0003 }
 151:
            var2 = var5;
 154:
            var6 = var1 == var2;
            var5 = undefined;
            if(var6) { _fun0003_ip = 169; continue _fun0003 }
 163:
            var5 = var2.rawValue;
 169:
            var6 = var1 != var5;
            var2 = undefined;
            if(!var6) { _fun0003_ip = 181; continue _fun0003 }
 178:
            var2 = var5;
 181:
            var6 = var4.fields;
            var5 = var1 == var6;
            var4 = undefined;
            if(var5) { _fun0003_ip = 213; continue _fun0003 }
 196:
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
 213:
            var5 = var1 != var4;
            var3 = undefined;
            if(!var5) { _fun0003_ip = 225; continue _fun0003 }
 222:
            var3 = var4;
 225:
            var4 = var1 == var3;
            var12 = undefined;
            if(var4) { _fun0003_ip = 268; continue _fun0003 }
 234:
            var4 = var3.rawValue;
            var4 = var1 == var4;
            var12 = undefined;
            if(var4) { _fun0003_ip = 268; continue _fun0003 }
 249:
            var4 = global;
            var4 = var4.parseFloat;
            var3 = var3.rawValue;
            var12 = var4.bind(var7)(var3);
 268:
            if(!(var1 != var2)) { _fun0003_ip = 276; continue _fun0003 }
 272:
            if(!(var1 == var12)) { _fun0003_ip = 280; continue _fun0003 }
 276:
            var1 = undefined;
            return var1;
 280:
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