// app/modules/premium/referral_program/native/ReferralProgramPerkCard.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var14 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var6;
    var1 = function getHeaderCopy(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 5;
            var3 = var6[var1];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var6[var1];
            var1 = var5.bind(var2)(var1);
            var2 = var1.t;
            var1 = arg1;
            if(var1) { _fun0001_ip = 68; continue _fun0001 }
 55:
            var1 = var2.USo4s7;
            var1 = var3.bind(var4)(var1);
            _fun0001_ip = 81; continue _fun0001;
 68:
            var2 = var2.M47CJS;
            var1 = var3.bind(var4)(var2);
 81:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function getSubheaderCopy(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var10 = arg1;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var7 = undefined;
            var4 = var3.bind(var7)(var1);
            var3 = var4.getArticleURL;
            var1 = _closure1_slot6;
            var1 = var1.REFERRAL_PROGRAM;
            var6 = var3.bind(var4)(var1);
            var1 = arg2;
            if(var1) { _fun0002_ip = 248; continue _fun0002 }
 58:
            var1 = 0;
            if(!(!(var10 > var1))) { _fun0002_ip = 154; continue _fun0002 }
 64:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 5;
            var3 = var11[var1];
            var3 = var9.bind(var7)(var3);
            var5 = var3.intl;
            var4 = var5.format;
            var1 = var11[var1];
            var1 = var9.bind(var7)(var1);
            var1 = var1.t;
            var3 = var1.FjrXCg;
            var1 = {};
            var8 = 7;
            var8 = var11[var8];
            var8 = var9.bind(var7)(var8);
            var8 = var8.MAX_REFERRALS_SENT;
            var1['numFriends'] = var8;
            var1['helpdeskArticle'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0002_ip = 246; continue _fun0002;
 154:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 5;
            var4 = var12[var3];
            var4 = var11.bind(var7)(var4);
            var8 = var4.intl;
            var5 = var8.format;
            var3 = var12[var3];
            var3 = var11.bind(var7)(var3);
            var3 = var3.t;
            var4 = var3.EkWiZm;
            var3 = {};
            var9 = 7;
            var9 = var12[var9];
            var9 = var11.bind(var7)(var9);
            var9 = var9.MAX_REFERRALS_SENT;
            var9 = var9 - var10;
            var3['numFriends'] = var9;
            var3['helpdeskArticle'] = var6;
            var1 = var5.bind(var8)(var4, var3);
 246:
            _fun0002_ip = 313; continue _fun0002;
 248:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.3OYZMT;
            var2 = {};
            var2['helpdeskArticle'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 313:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function UserAvatarProgressBarUnit(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var9 = var1.placement;
            var15 = var1.userRecord;
            var1 = _closure1_slot9;
            var5 = undefined;
            var6 = var1.bind(var5)();
            var1 = null;
            if(!(var1 == var15)) { _fun0003_ip = 297; continue _fun0003 }
 37:
            var3 = _closure1_slot7;
            var13 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 11;
            var1 = var11[var1];
            var2 = var13.bind(var5)(var1);
            var1 = {};
            var4 = var6.emptyReferralSlot;
            var1['style'] = var4;
            var4 = 90;
            var1['angle'] = var4;
            var8 = 12;
            var4 = var11[var8];
            var12 = var13.bind(var5)(var4);
            var7 = 9;
            var4 = var11[var7];
            var4 = var13.bind(var5)(var4);
            var4 = var4.unsafe_rawColors;
            var4 = var4.PREMIUM_TIER_2_PURPLE;
            var14 = var12.bind(var5)(var4);
            var4 = var14.alpha;
            var12 = 0.3;
            var14 = var4.bind(var14)(var12);
            var4 = var14.hex;
            var14 = var4.bind(var14)();
            var4 = new Array(2);
            var4[0] = var14;
            var8 = var11[var8];
            var8 = var13.bind(var5)(var8);
            var7 = var11[var7];
            var7 = var13.bind(var5)(var7);
            var7 = var7.unsafe_rawColors;
            var7 = var7.PREMIUM_TIER_2_PINK;
            var8 = var8.bind(var5)(var7);
            var7 = var8.alpha;
            var8 = var7.bind(var8)(var12);
            var7 = var8.hex;
            var7 = var7.bind(var8)();
            var4[1] = var7;
            var1['colors'] = var4;
            var4 = true;
            var1['useAngle'] = var4;
            var8 = _closure1_slot7;
            var7 = _closure1_slot0;
            var4 = 13;
            var4 = var11[var4];
            var4 = var7.bind(var5)(var4);
            var7 = var4.Text;
            var4 = {};
            var11 = 'heading-md/semibold';
            var4['variant'] = var11;
            var11 = var6.emptyReferralSlotText;
            var4['style'] = var11;
            var4['children'] = var9;
            var4 = var8.bind(var5)(var7, var4);
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0003_ip = 410; continue _fun0003;
 297:
            var4 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var6.avatarContainer;
            var2['style'] = var6;
            var8 = _closure1_slot7;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 10;
            var6 = var11[var9];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var14 = var15.getAvatarSource;
            var13 = false;
            var12 = 64;
            var12 = var14.bind(var15)(var5, var13, var12);
            var6['source'] = var12;
            var10 = _closure1_slot0;
            var9 = var11[var9];
            var9 = var10.bind(var5)(var9);
            var9 = var9.AvatarSizes;
            var9 = var9.XLARGE;
            var6['size'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 410:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function UserAvatarProgressBarConnector(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var9 = var1.numReferralsSent;
            var7 = var1.placement;
            var1 = _closure1_slot9;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 11;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var10 = var8.connector;
            var6 = new Array(2);
            var6[0] = var10;
            var7 = var9 > var7;
            if(!var7) { _fun0004_ip = 81; continue _fun0004 }
 75:
            var7 = var8.connectorHighlighted;
 81:
            var6[1] = var7;
            var1['style'] = var6;
            var6 = 90;
            var1['angle'] = var6;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 12;
            var5 = var9[var7];
            var10 = var8.bind(var4)(var5);
            var6 = 9;
            var5 = var9[var6];
            var5 = var8.bind(var4)(var5);
            var5 = var5.unsafe_rawColors;
            var5 = var5.PREMIUM_TIER_2_PURPLE;
            var10 = var10.bind(var4)(var5);
            var5 = var10.hex;
            var10 = var5.bind(var10)();
            var5 = new Array(2);
            var5[0] = var10;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var6 = var9[var6];
            var6 = var8.bind(var4)(var6);
            var6 = var6.unsafe_rawColors;
            var6 = var6.PREMIUM_TIER_2_PINK;
            var7 = var7.bind(var4)(var6);
            var6 = var7.hex;
            var6 = var6.bind(var7)();
            var5[1] = var6;
            var1['colors'] = var5;
            var5 = true;
            var1['useAngle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function ReferralProgramBar(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var12 = var1.referralSentUsers;
            var1 = _closure1_slot9;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var10 = null;
            var2 = var10 == var12;
            var1 = undefined;
            if(var2) { _fun0005_ip = 38; continue _fun0005 }
 33:
            var1 = var12.length;
 38:
            var2 = var10 != var1;
            var14 = 0;
            var9 = 0;
            if(!var2) { _fun0005_ip = 52; continue _fun0005 }
 49:
            var9 = var1;
 52:
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var5.barContainer;
            var1['style'] = var5;
            var8 = _closure1_slot7;
            var7 = _closure1_slot12;
            var5 = {};
            var16 = 1;
            var5['placement'] = var16;
            var13 = var9 > var14;
            var11 = undefined;
            if(!var13) { _fun0005_ip = 115; continue _fun0005 }
 99:
            var15 = var10 == var12;
            var13 = undefined;
            if(var15) { _fun0005_ip = 112; continue _fun0005 }
 108:
            var13 = var12[var14];
 112:
            var11 = var13;
 115:
            var5['userRecord'] = var11;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(5);
            var5[0] = var7;
            var11 = _closure1_slot7;
            var8 = _closure1_slot13;
            var7 = {};
            var7['numReferralsSent'] = var9;
            var7['placement'] = var16;
            var7 = var11.bind(var4)(var8, var7);
            var5[1] = var7;
            var13 = _closure1_slot7;
            var8 = _closure1_slot12;
            var7 = {};
            var11 = 2;
            var7['placement'] = var11;
            var15 = var9 > var16;
            var14 = undefined;
            if(!var15) { _fun0005_ip = 207; continue _fun0005 }
 191:
            var17 = var10 == var12;
            var15 = undefined;
            if(var17) { _fun0005_ip = 204; continue _fun0005 }
 200:
            var15 = var12[var16];
 204:
            var14 = var15;
 207:
            var7['userRecord'] = var14;
            var7 = var13.bind(var4)(var8, var7);
            var5[2] = var7;
            var13 = _closure1_slot7;
            var8 = _closure1_slot13;
            var7 = {};
            var7['numReferralsSent'] = var9;
            var7['placement'] = var11;
            var7 = var13.bind(var4)(var8, var7);
            var5[3] = var7;
            var8 = _closure1_slot7;
            var7 = _closure1_slot12;
            var6 = {};
            var13 = 3;
            var6['placement'] = var13;
            var13 = var9 > var11;
            var9 = undefined;
            if(!var13) { _fun0005_ip = 295; continue _fun0005 }
 279:
            var13 = var10 == var12;
            var10 = undefined;
            if(var13) { _fun0005_ip = 292; continue _fun0005 }
 288:
            var10 = var12[var11];
 292:
            var9 = var10;
 295:
            var6['userRecord'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[4] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot5 = var7;
    var4 = var4.HelpdeskArticles;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var12 = var4.Colors;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'height': 175, 'backgroundColor': null, 'flexDirection': 'row', 'justifyContent': 'center'};
    var13 = 9;
    var11 = var6[var13];
    var11 = var14.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BG_BASE_PRIMARY;
    var9['backgroundColor'] = var11;
    var11 = 'center';
    var4['barContainer'] = var9;
    var9 = {'height': 64, 'width': 64, 'borderRadius': null, 'justifyContent': 'center', 'alignSelf': 'center'};
    var13 = var6[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9['borderRadius'] = var13;
    var4['emptyReferralSlot'] = var9;
    var9 = {};
    var9['justifyContent'] = var11;
    var4['avatarContainer'] = var9;
    var9 = {};
    var12 = var12.PREMIUM_TIER_2_PINK;
    var9['color'] = var12;
    var9['textAlign'] = var11;
    var4['emptyReferralSlotText'] = var9;
    var9 = {'width': 24, 'height': 4, 'alignSelf': 'center', 'opacity': 0.3};
    var4['connector'] = var9;
    var9 = {};
    var9['opacity'] = var10;
    var4['connectorHighlighted'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/referral_program/native/ReferralProgramPerkCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ReferralProgramPerkCard() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 14;
            var1 = var6[var1];
            var5 = undefined;
            var7 = var4.bind(var5)(var1);
            var2 = var7.useIsEligibleSenderForReferralProgram;
            var1 = 'nitro-home';
            var2 = var2.bind(var7)(var1);
            var1 = 7;
            var1 = var6[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.useReferralProgramBannerDetails;
            var1 = var1.bind(var4)();
            var7 = var1.hasSentAllReferrals;
            var13 = var1.referralSentUsers;
            var12 = var1.refreshAt;
            var1 = null;
            var6 = var1 == var13;
            var4 = undefined;
            if(var6) { _fun0006_ip = 100; continue _fun0006 }
 95:
            var4 = var13.length;
 100:
            var6 = var1 != var4;
            var10 = 0;
            if(!var6) { _fun0006_ip = 112; continue _fun0006 }
 109:
            var10 = var4;
 112:
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 15;
            var4 = var11[var4];
            var6 = var9.bind(var5)(var4);
            var4 = 16;
            var4 = var11[var4];
            var4 = var9.bind(var5)(var4);
            var4 = var4.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR;
            var4 = var6.bind(var5)(var4);
            var11 = var4.analyticsLocations;
            var _closure2_slot0 = var11;
            var9 = _closure1_slot3;
            var6 = var9.useCallback;
            var4 = new Array(1);
            var4[0] = var11;
            var3 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 17;
                var4 = var2[var1];
                var1 = undefined;
                var8 = var5.bind(var1)(var4);
                var7 = var8.track;
                var4 = _closure1_slot5;
                var6 = var4.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED;
                var4 = {};
                var9 = _closure2_slot0;
                var4['location_stack'] = var9;
                var4 = var7.bind(var8)(var6, var4);
                var4 = 18;
                var4 = var2[var4];
                var5 = var5.bind(var1)(var4);
                var4 = var5.openLazy;
                var6 = _closure1_slot0;
                var3 = 20;
                var3 = var2[var3];
                var6 = var6.bind(var1)(var3);
                var3 = 19;
                var3 = var2[var3];
                var2 = var2.paths;
                var3 = var6.bind(var1)(var3, var2);
                var2 = 'referral-program-share-action-sheet';
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var6 = var6.bind(var9)(var3, var4);
            var1 = null;
            if(!var2) { _fun0006_ip = 374; continue _fun0006 }
 203:
            var4 = _closure1_slot7;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 21;
            var2 = var9[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var9 = _closure1_slot10;
            var9 = var9.bind(var5)(var7);
            var2['title'] = var9;
            var9 = _closure1_slot11;
            var9 = var9.bind(var5)(var10, var7);
            var2['description'] = var9;
            var11 = _closure1_slot7;
            var10 = _closure1_slot14;
            var9 = {};
            var9['referralSentUsers'] = var13;
            var9['refreshAt'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var2['headerComponent'] = var9;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 5;
            var9 = var12[var8];
            var9 = var11.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var5)(var8);
            var8 = var8.t;
            if(var7) { _fun0006_ip = 347; continue _fun0006 }
 334:
            var7 = var8.Lm2nFR;
            var7 = var9.bind(var10)(var7);
            _fun0006_ip = 358; continue _fun0006;
 347:
            var8 = var8.SY9tyM;
            var7 = var9.bind(var10)(var8);
 358:
            var2['cta'] = var7;
            var2['buttonOnPress'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 374:
            return var1;
        }
    };
    var3['ReferralProgramPerkCard'] = var2;
    return var1;
})();