// app/modules/custom_status/setCustomStatus.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function determineEmojiType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = null;
            var4 = var3 == var2;
            var1 = null;
            if(var4) { _fun0001_ip = 37; continue _fun0001 }
 14:
            var2 = var2.id;
            var3 = var3 != var2;
            var2 = 'unicode';
            if(!var3) { _fun0001_ip = 34; continue _fun0001 }
 30:
            var2 = 'custom';
 34:
            var1 = var2;
 37:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
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
    var4 = var4.ClearAfterValues;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/custom_status/setCustomStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function setCustomStatus(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.text;
            var16 = var1.emojiInfo;
            var14 = var1.clearAfter;
            var18 = var1.analyticsContext;
            var5 = var1.createdAtMs;
            var10 = var1.prompt;
            var8 = var1.customStatusLabel;
            var6 = var1.analyticsLocations;
            var1 = var2.trim;
            var11 = var1.bind(var2)();
            var1 = var11.length;
            var7 = 0;
            if(!(!(var1 > var7))) { _fun0002_ip = 121; continue _fun0002 }
 71:
            var1 = null;
            if(!(var1 == var16)) { _fun0002_ip = 121; continue _fun0002 }
 77:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 2;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.CustomStatusSetting;
            var1 = var2.updateSetting;
            var1 = var1.bind(var2)(var3);
            return var1;
 121:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 2;
            var1 = var3[var1];
            var9 = undefined;
            var1 = var2.bind(var9)(var1);
            var3 = var1.CustomStatusSetting;
            var2 = var3.updateSetting;
            var1 = {};
            var4 = var11.length;
            var7 = var4 > var7;
            var13 = '';
            var4 = var13;
            if(!var7) { _fun0002_ip = 182; continue _fun0002 }
 179:
            var4 = var11;
 182:
            var1['text'] = var4;
            var7 = null;
            var12 = var7 != var14;
            var17 = '0';
            var4 = var17;
            if(!var12) { _fun0002_ip = 310; continue _fun0002 }
 204:
            var12 = _closure1_slot3;
            var12 = var12.DONT_CLEAR;
            var4 = var17;
            if(!(var14 !== var12)) { _fun0002_ip = 310; continue _fun0002 }
 221:
            var12 = global;
            var19 = var12.String;
            var20 = _closure1_slot1;
            var23 = _closure1_slot2;
            var12 = 3;
            var12 = var23[var12];
            var12 = var20.bind(var9)(var12);
            var22 = var12.bind(var9)();
            var21 = var22.add;
            var12 = 4;
            var12 = var23[var12];
            var12 = var20.bind(var9)(var12);
            var20 = var12.bind(var9)(var14);
            var12 = 'ms';
            var20 = var21.bind(var22)(var20, var12);
            var12 = var20.toDate;
            var20 = var12.bind(var20)();
            var12 = var20.getTime;
            var12 = var12.bind(var20)();
            var4 = var19.bind(var9)(var12);
 310:
            var1['expiresAtMs'] = var4;
            var12 = var7 != var16;
            var4 = var17;
            if(!var12) { _fun0002_ip = 345; continue _fun0002 }
 325:
            var12 = var16.id;
            var12 = var7 != var12;
            var4 = var17;
            if(!var12) { _fun0002_ip = 345; continue _fun0002 }
 340:
            var4 = var16.id;
 345:
            var1['emojiId'] = var4;
            var12 = var7 != var16;
            var4 = var13;
            if(!var12) { _fun0002_ip = 365; continue _fun0002 }
 360:
            var4 = var16.name;
 365:
            var1['emojiName'] = var4;
            var12 = global;
            var4 = var12.String;
            if(!(var7 == var5)) { _fun0002_ip = 426; continue _fun0002 }
 382:
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var17 = 3;
            var17 = var20[var17];
            var17 = var19.bind(var9)(var17);
            var19 = var17.bind(var9)();
            var17 = var19.toDate;
            var19 = var17.bind(var19)();
            var17 = var19.getTime;
            var5 = var17.bind(var19)();
 426:
            var4 = var4.bind(var9)(var5);
            var1['createdAtMs'] = var4;
            var5 = var7 != var8;
            var4 = undefined;
            if(!var5) { _fun0002_ip = 487; continue _fun0002 }
 445:
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var5 = 5;
            var5 = var19[var5];
            var5 = var17.bind(var9)(var5);
            var19 = var5.StringValue;
            var17 = var19.create;
            var5 = {};
            var5['value'] = var8;
            var4 = var17.bind(var19)(var5);
 487:
            var1['label'] = var4;
            var1 = var2.bind(var3)(var1);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 6;
            var2 = var4[var2];
            var5 = var3.bind(var9)(var2);
            var4 = var5.track;
            var2 = _closure1_slot4;
            var3 = var2.CUSTOM_STATUS_UPDATED;
            var2 = {};
            var19 = var7 != var18;
            var17 = null;
            if(!var19) { _fun0002_ip = 547; continue _fun0002 }
 542:
            var17 = var18.location;
 547:
            var2['location'] = var17;
            var15 = _closure1_slot5;
            var15 = var15.bind(var9)(var16);
            var2['emoji_type'] = var15;
            var11 = var11.length;
            var2['text_len'] = var11;
            var15 = var7 != var14;
            var11 = null;
            if(!var15) { _fun0002_ip = 602; continue _fun0002 }
 586:
            var12 = var12.HermesInternal;
            var12 = var12.concat;
            var11 = var12.bind(var13)(var14);
 602:
            var2['clear_after'] = var11;
            var11 = var7 == var10;
            var9 = undefined;
            if(var11) { _fun0002_ip = 623; continue _fun0002 }
 618:
            var9 = var10.value;
 623:
            var2['prompt_type'] = var9;
            var9 = var7 != var8;
            var7 = null;
            if(!var9) { _fun0002_ip = 640; continue _fun0002 }
 637:
            var7 = var8;
 640:
            var2['label'] = var7;
            var2['location_stack'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();