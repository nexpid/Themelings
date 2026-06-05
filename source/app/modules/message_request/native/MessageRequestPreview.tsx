// app/modules/message_request/native/MessageRequestPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var17 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var17;
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var17.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var14 = var4.Fonts;
    var8 = var4.AnalyticEvents;
    var _closure1_slot6 = var8;
    var4 = var4.MessageFlags;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 'italic';
    var10['fontStyle'] = var11;
    var15 = 6;
    var11 = var6[var15];
    var18 = var17.bind(var1)(var11);
    var12 = var14.PRIMARY_MEDIUM;
    var13 = 7;
    var11 = var6[var13];
    var11 = var17.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_DEFAULT;
    var16 = 12;
    var20 = var18.bind(var1)(var12, var11, var16);
    var21 = var10;
    var11 = copyDataProperties(var21, var20);
    var12 = 16;
    var11 = 'lineHeight';
    var10[10] = var12;
    var4['systemContent'] = var10;
    var10 = {};
    var15 = var6[var15];
    var15 = var17.bind(var1)(var15);
    var14 = var14.PRIMARY_MEDIUM;
    var13 = var6[var13];
    var13 = var17.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_DEFAULT;
    var20 = var15.bind(var1)(var14, var13, var16);
    var21 = var10;
    var13 = copyDataProperties(var21, var20);
    var10[10] = var12;
    var4['messageContent'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot9 = var4;
    var4 = var7.memo;
    var2 = function MessageRequestPreview(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var14 = var1.channel;
            var _closure2_slot0 = var14;
            var6 = var1.style;
            var1 = _closure1_slot9;
            var4 = undefined;
            var1 = var1.bind(var4)();
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 8;
            var2 = var9[var2];
            var7 = var8.bind(var4)(var2);
            var2 = var7.useMessageRequestPreview;
            var7 = var2.bind(var7)(var14);
            var11 = var7.loaded;
            var2 = var7.error;
            var12 = var7.message;
            var _closure2_slot1 = var12;
            var7 = 9;
            var7 = var9[var7];
            var13 = var8.bind(var4)(var7);
            var10 = var13.useStateFromStoresObject;
            var7 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var7;
            var8 = new Array(1);
            var8[0] = var12;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var2 = _closure2_slot1;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var7 = _closure1_slot5;
                    var6 = var7.isBlockedForMessage;
                    var5 = _closure2_slot1;
                    var2 = var6.bind(var7)(var5);
case 2:
                    var1['isBlocked'] = var2;
                    var2 = _closure2_slot1;
                    var2 = var4 != var2;
                    if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure1_slot5;
                    var4 = var5.isIgnoredForMessage;
                    var3 = _closure2_slot1;
                    var2 = var4.bind(var5)(var3);
case 4:
                    var1['isIgnored'] = var2;
                    return var1;
                }
            };
            var7 = var10.bind(var13)(var9, var7, var8);
            var10 = var7.isBlocked;
            var9 = var7.isIgnored;
            var13 = _closure1_slot3;
            var8 = var13.useEffect;
            var7 = new Array(2);
            var7[0] = var14;
            var7[1] = var12;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.track;
                    var1 = _closure1_slot6;
                    var2 = var1.MESSAGE_REQUEST_PREVIEW_VIEWED;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var7 = var6.isSpam;
                    var1['is_spam'] = var7;
                    var6 = var6.id;
                    var1['channel_id'] = var6;
                    var5 = _closure2_slot1;
                    var5 = var5.author;
                    var5 = var5.id;
                    var1['other_user_id'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var8.bind(var13)(var3, var7);
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = null;
            var2 = false;
            var7 = null;
            if(!var11) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            if(!(var3 != var12)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            if(var10) { _fun0001_ip = 14; continue _fun0001 }
case 12:
            if(!(var3 != var12)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            if(var9) { _fun0001_ip = 17; continue _fun0001 }
case 15:
            var10 = var3 == var12;
            var9 = undefined;
            if(var10) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var9 = var12.content;
case 18:
            if(!(var3 != var9)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var10 = var12.content;
            var9 = '';
            if(!(var9 === var10)) { _fun0001_ip = 22; continue _fun0001 }
case 20:
            if(!(var3 == var12)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 11;
            var10 = var14[var9];
            var10 = var13.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var14[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9["0KfDxM"];
            var7 = var10.bind(var11)(var9);
            var2 = false;
            _fun0001_ip = 10; continue _fun0001;
case 23:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 13;
            var9 = var11[var9];
            var10 = var10.bind(var4)(var9);
            var9 = var10.getMessageStickers;
            var9 = var9.bind(var10)(var12);
            var10 = var9.length;
            var9 = 0;
            if(!(!(var10 > var9))) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var9 = var12.interaction;
            if(!(var3 == var9)) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var10 = var12.hasFlag;
            var9 = _closure1_slot7;
            var9 = var9.IS_VOICE_MESSAGE;
            var9 = var10.bind(var12)(var9);
            if(var9) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var10 = var12.hasFlag;
            var9 = _closure1_slot7;
            var9 = var9.IS_COMPONENTS_V2;
            var9 = var10.bind(var12)(var9);
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 11;
            var11 = var15[var10];
            var11 = var14.bind(var4)(var11);
            var13 = var11.intl;
            var11 = var13.string;
            var10 = var15[var10];
            var10 = var14.bind(var4)(var10);
            var10 = var10.t;
            if(var9) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var9 = var10.LoMGlg;
            var9 = var11.bind(var13)(var9);
            _fun0001_ip = 33; continue _fun0001;
case 31:
            var10 = var10.Xxm5i3;
            var9 = var11.bind(var13)(var10);
case 33:
            _fun0001_ip = 34; continue _fun0001;
case 29:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 11;
            var11 = var15[var10];
            var11 = var14.bind(var4)(var11);
            var13 = var11.intl;
            var11 = var13.string;
            var10 = var15[var10];
            var10 = var14.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10["6bhHrc"];
            var9 = var11.bind(var13)(var10);
case 34:
            _fun0001_ip = 35; continue _fun0001;
case 27:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 11;
            var11 = var15[var10];
            var11 = var14.bind(var4)(var11);
            var13 = var11.intl;
            var11 = var13.string;
            var10 = var15[var10];
            var10 = var14.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10["2v7kfl"];
            var9 = var11.bind(var13)(var10);
case 35:
            _fun0001_ip = 36; continue _fun0001;
case 25:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 11;
            var11 = var15[var10];
            var11 = var14.bind(var4)(var11);
            var13 = var11.intl;
            var11 = var13.string;
            var10 = var15[var10];
            var10 = var14.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.zuI+by;
            var9 = var11.bind(var13)(var10);
case 36:
            var7 = var9;
            var2 = false;
            _fun0001_ip = 10; continue _fun0001;
case 22:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 12;
            var9 = var11[var9];
            var11 = var10.bind(var4)(var9);
            var9 = {'noStyleAndInteraction': true, 'allowGameMentions': true};
            var9 = var11.bind(var4)(var12, var9);
            var9 = var9.content;
            var11 = global;
            var12 = var11.Array;
            var11 = var12.isArray;
            var11 = var11.bind(var12)(var9);
            if(!var11) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var12 = var9.length;
            var11 = 0;
            if(!(var11 !== var12)) { _fun0001_ip = 39; continue _fun0001 }
case 37:
            var3 = var3 == var9;
            var2 = true;
            var7 = var9;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 39:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 11;
            var9 = var12[var3];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var3 = var12[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3["262oPB"];
            var7 = var9.bind(var10)(var3);
            var2 = false;
            _fun0001_ip = 10; continue _fun0001;
case 17:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 11;
            var9 = var12[var3];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var3 = var12[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.uxrh1O;
            var7 = var9.bind(var10)(var3);
            var2 = false;
            _fun0001_ip = 10; continue _fun0001;
case 14:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 11;
            var9 = var12[var3];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var3 = var12[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.WPe+xL;
            var7 = var9.bind(var10)(var3);
            var2 = false;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 11;
            var8 = var11[var3];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var3 = var11[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.BZHld2;
            var7 = var8.bind(var9)(var3);
            var2 = false;
case 10:
            if(var2) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var8 = var1.systemContent;
            _fun0001_ip = 42; continue _fun0001;
case 40:
            var8 = var1.messageContent;
case 42:
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var1['style'] = var6;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 14;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.LegacyText;
            var5 = {'style': null, 'numberOfLines': 3, 'ellipsizeMode': 'tail'};
            var5['style'] = var8;
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/message_request/native/MessageRequestPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();