// app/modules/auth/native/components/PrivacyHint.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function PrivacyPolicyDescription(arg1) {
        var1 = arg1;
        var5 = var1.style;
        var4 = _closure1_slot8;
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 7;
        var1 = var10[var1];
        var3 = undefined;
        var1 = var6.bind(var3)(var1);
        var2 = var1.TextWithIOSLinkWorkaround;
        var1 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-muted'};
        var1['style'] = var5;
        var5 = 8;
        var7 = var10[var5];
        var7 = var6.bind(var3)(var7);
        var8 = var7.intl;
        var7 = var8.format;
        var5 = var10[var5];
        var5 = var6.bind(var3)(var5);
        var5 = var5.t;
        var6 = var5.KI+BSU;
        var5 = {};
        var10 = _closure1_slot7;
        var10 = var10.TERMS;
        var5['termsURL'] = var10;
        var9 = _closure1_slot7;
        var9 = var9.PRIVACY;
        var5['privacyURL'] = var9;
        var5 = var7.bind(var8)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function PrivacyPolicyCheckbox(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.consent;
            var6 = var1.onToggleConsent;
            var5 = var1.asCheckbox;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0001_ip = 29; continue _fun0001 }
 27:
            var5 = false;
 29:
            var1 = _closure1_slot10;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            if(var5) { _fun0001_ip = 61; continue _fun0001 }
 53:
            var7 = var11.radio;
            _fun0001_ip = 67; continue _fun0001;
 61:
            var7 = var11.checkbox;
 67:
            var1['style'] = var7;
            var7 = {};
            var7['checked'] = var9;
            var1['accessibilityState'] = var7;
            var7 = 'checkbox';
            var1['accessibilityRole'] = var7;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var14 = 8;
            var8 = var7[var14];
            var8 = var12.bind(var4)(var8);
            var10 = var8.intl;
            var8 = var10.string;
            var7 = var7[var14];
            var7 = var12.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.Y7Kgvb;
            var7 = var8.bind(var10)(var7);
            var1['accessibilityLabel'] = var7;
            var1['onPress'] = var6;
            var6 = {'top': 11, 'bottom': 11, 'left': 11};
            var1['hitSlop'] = var6;
            var8 = _closure1_slot8;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            if(var5) { _fun0001_ip = 229; continue _fun0001 }
 190:
            var5 = 10;
            var5 = var10[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.FormRow;
            var6 = var5.Radio;
            var5 = {};
            var5['selected'] = var9;
            var6 = var8.bind(var4)(var6, var5);
            _fun0001_ip = 260; continue _fun0001;
 229:
            var5 = 9;
            var5 = var10[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.FormCheckbox;
            var5 = {};
            var5['checked'] = var9;
            var6 = var8.bind(var4)(var7, var5);
 260:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot8;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 7;
            var6 = var9[var6];
            var6 = var10.bind(var4)(var6);
            var7 = var6.TextWithIOSLinkWorkaround;
            var6 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var11 = var11.checkboxLabel;
            var6['style'] = var11;
            var11 = var9[var14];
            var11 = var10.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.format;
            var9 = var9[var14];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            var10 = var9.qMDAPz;
            var9 = {};
            var14 = _closure1_slot7;
            var14 = var14.TERMS;
            var9['termsURL'] = var14;
            var13 = _closure1_slot7;
            var13 = var13.PRIVACY;
            var9['privacyURL'] = var13;
            var9 = var11.bind(var12)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot3 = var7;
    var4 = var4.Pressable;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.usePromoEmailConsentStore;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useRegistrationUIStore;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MarketingURLs;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'column', 'gap': 16};
    var4['multiItem'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'flex-start', 'gap': 8};
    var4['checkbox'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 8};
    var4['radio'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var4['checkboxLabel'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/PrivacyHint.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PrivacyHint(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var12 = var1.consent;
            var2 = var1.consentRequired;
            var11 = var1.onToggleConsent;
            var1 = _closure1_slot10;
            var6 = undefined;
            var7 = var1.bind(var6)();
            var4 = _closure1_slot5;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.required;
                return var1;
            };
            var1 = var4.bind(var6)(var1);
            var4 = _closure1_slot6;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.registrationOptions;
                var2 = var1.email;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var3 = var4.bind(var6)(var3);
            if(!var3) { _fun0002_ip = 74; continue _fun0002 }
 71:
            var3 = var1;
 74:
            if(var2) { _fun0002_ip = 175; continue _fun0002 }
 77:
            if(!var3) { _fun0002_ip = 175; continue _fun0002 }
 80:
            var5 = _closure1_slot9;
            var4 = _closure1_slot3;
            var1 = {};
            var9 = var7.multiItem;
            var1['style'] = var9;
            var13 = _closure1_slot8;
            var10 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 11;
            var9 = var14[var9];
            var10 = var10.bind(var6)(var9);
            var9 = {};
            var10 = var13.bind(var6)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var14 = _closure1_slot8;
            var13 = _closure1_slot11;
            var10 = {};
            var10 = var14.bind(var6)(var13, var10);
            var9[1] = var10;
            var1['children'] = var9;
            var1 = var5.bind(var6)(var4, var1);
            _fun0002_ip = 336; continue _fun0002;
 175:
            if(!var2) { _fun0002_ip = 181; continue _fun0002 }
 178:
            if(var3) { _fun0002_ip = 226; continue _fun0002 }
 181:
            var5 = _closure1_slot8;
            if(var2) { _fun0002_ip = 202; continue _fun0002 }
 188:
            var3 = _closure1_slot11;
            var2 = {};
            var2 = var5.bind(var6)(var3, var2);
            _fun0002_ip = 224; continue _fun0002;
 202:
            var4 = _closure1_slot12;
            var3 = {};
            var3['consent'] = var12;
            var3['onToggleConsent'] = var11;
            var2 = var5.bind(var6)(var4, var3);
 224:
            _fun0002_ip = 333; continue _fun0002;
 226:
            var5 = _closure1_slot9;
            var4 = _closure1_slot3;
            var3 = {};
            var7 = var7.multiItem;
            var3['style'] = var7;
            var10 = _closure1_slot8;
            var9 = _closure1_slot1;
            var13 = _closure1_slot2;
            var7 = 11;
            var7 = var13[var7];
            var9 = var9.bind(var6)(var7);
            var7 = {};
            var9 = var10.bind(var6)(var9, var7);
            var7 = new Array(2);
            var7[0] = var9;
            var10 = _closure1_slot8;
            var9 = _closure1_slot12;
            var8 = {};
            var8['consent'] = var12;
            var8['onToggleConsent'] = var11;
            var11 = true;
            var8['asCheckbox'] = var11;
            var8 = var10.bind(var6)(var9, var8);
            var7[1] = var8;
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 333:
            var1 = var2;
 336:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();