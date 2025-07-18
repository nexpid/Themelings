// app/modules/hub/HubUpsellManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.addPostConnectionCallback;
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.GuildFeatures;
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ContentDismissActionType;
    var _closure1_slot7 = var2;
    var2 = {};
    var7 = function init(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.hasModalOpen;
            var _closure2_slot0 = var3;
            var1 = var1.openModal;
            var _closure2_slot1 = var1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var5 = var4.ProcessArgs;
            var4 = var5.isDisallowPopupsSet;
            var4 = var4.bind(var5)();
            if(var4) { _fun0001_ip = 85; continue _fun0001 }
 69:
            var3 = _closure1_slot3;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.bind(var1)();
                    if(var2) { _fun0002_ip = 405; continue _fun0002 }
 35:
                    var4 = _closure1_slot5;
                    var2 = var4.getCurrentUser;
                    var4 = var2.bind(var4)();
                    var5 = null;
                    var2 = var5 != var4;
                    if(!var2) { _fun0002_ip = 143; continue _fun0002 }
 57:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var6 = 7;
                    var7 = var12[var6];
                    var7 = var11.bind(var1)(var7);
                    var9 = var7.bind(var1)();
                    var8 = var9.diff;
                    var7 = var12[var6];
                    var7 = var11.bind(var1)(var7);
                    var10 = 8;
                    var10 = var12[var10];
                    var11 = var11.bind(var1)(var10);
                    var10 = var11.extractTimestamp;
                    var4 = var4.id;
                    var4 = var10.bind(var11)(var4);
                    var7 = var7.bind(var1)(var4);
                    var4 = 'days';
                    var4 = var8.bind(var9)(var7, var4);
                    var2 = var4 < var6;
 143:
                    var6 = _closure1_slot4;
                    var4 = var6.getGuildsArray;
                    var7 = var4.bind(var6)();
                    var6 = var7.find;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.features;
                        var2 = var3.has;
                        var1 = _closure1_slot6;
                        var1 = var1.HUB;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var4 = var6.bind(var7)(var4);
                    var5 = var5 != var4;
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var6 = 9;
                    var6 = var4[var6];
                    var8 = var9.bind(var1)(var6);
                    var7 = var8.UNSAFE_isDismissibleContentDismissed;
                    var6 = 10;
                    var4 = var4[var6];
                    var4 = var9.bind(var1)(var4);
                    var4 = var4.DismissibleContent;
                    var4 = var4.HUB_BACK_TO_SCHOOL_UPSELL;
                    var4 = var7.bind(var8)(var4);
                    var4 = !var4;
                    if(var2) { _fun0002_ip = 252; continue _fun0002 }
 241:
                    var7 = _closure2_slot0;
                    var2 = var7.bind(var1)();
 252:
                    if(var2) { _fun0002_ip = 258; continue _fun0002 }
 255:
                    var2 = var5;
 258:
                    if(var2) { _fun0002_ip = 264; continue _fun0002 }
 261:
                    var2 = !var4;
 264:
                    var2 = !var2;
                    if(!var2) { _fun0002_ip = 300; continue _fun0002 }
 270:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 11;
                    var4 = var7[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.backToSchoolEnabled;
                    var2 = var4.bind(var5)();
 300:
                    if(!var2) { _fun0002_ip = 405; continue _fun0002 }
 303:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 11;
                    var4 = var2[var4];
                    var7 = var5.bind(var1)(var4);
                    var5 = var7.trackExposure;
                    var4 = {};
                    var8 = '8b792a_1';
                    var4['location'] = var8;
                    var4 = var5.bind(var7)(var4);
                    var4 = _closure2_slot1;
                    var4 = var4.bind(var1)();
                    var5 = _closure1_slot0;
                    var3 = 12;
                    var3 = var2[var3];
                    var4 = var5.bind(var1)(var3);
                    var3 = var4.requestMarkDismissibleContentAsShown;
                    var2 = var2[var6];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.DismissibleContent;
                    var2 = var2.HUB_BACK_TO_SCHOOL_UPSELL;
                    var2 = var3.bind(var4)(var2);
 405:
                    return var1;
                }
            };
            var2 = var3.bind(var1)(var2);
 85:
            return var1;
        }
    };
    var2['init'] = var7;
    var4 = function hideHubUpsell() {
        var3 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 9;
        var2 = var7[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.UNSAFE_markDismissibleContentAsDismissed;
        var2 = 10;
        var2 = var7[var2];
        var2 = var3.bind(var1)(var2);
        var2 = var2.DismissibleContent;
        var3 = var2.HUB_BACK_TO_SCHOOL_UPSELL;
        var2 = {};
        var6 = _closure1_slot7;
        var6 = var6.AUTO;
        var2['dismissAction'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['hideHubUpsell'] = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hub/HubUpsellManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();