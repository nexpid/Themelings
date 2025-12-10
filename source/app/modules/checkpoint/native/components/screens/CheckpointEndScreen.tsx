// app/modules/checkpoint/native/components/screens/CheckpointEndScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var11 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var11;
        var _closure1_slot2 = var6;
        var1 = function CardAnimation(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var14 = var2.user;
                var6 = var2.reducedMotion;
                var5 = var2.step;
                var _closure2_slot0 = var5;
                var8 = _closure1_slot3;
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 13;
                var2 = var9[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var2 = var2.CheckpointColorContext;
                var2 = var8.bind(var4)(var2);
                var8 = 14;
                var8 = var9[var8];
                var10 = var3.bind(var4)(var8);
                var8 = var10.useToken;
                var2 = var2.primaryColor;
                var8 = var8.bind(var10)(var2);
                var2 = 11;
                var2 = var9[var2];
                var10 = var3.bind(var4)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot9;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() {
                    var2 = _closure1_slot9;
                    var1 = var2.getCheckpointData;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2 = var9.bind(var10)(var3, var2);
                var3 = var2.cardId;
                var18 = 0;
                var12 = 0;
                if(!(var4 !== var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var12 = var3;
case 2:
                var3 = var2.powerLevel;
                var15 = 0;
                if(!(var4 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var15 = var3;
case 4:
                var2 = var2.powerLevelPercentile;
                var9 = 0;
                if(!(var4 !== var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var9 = var2;
case 6:
                var3 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var4 = _closure2_slot0;
                        var3 = _closure1_slot11;
                        var3 = var3.END_REWARD;
                        if(!(!(var4 <= var3))) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                        var3 = _closure2_slot0;
                        var1 = _closure1_slot11;
                        var1 = var1.END_CLAIM;
                        if(!(var3 !== var1)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                        var1 = _closure1_slot15;
                        var1 = var1.SUMMARY;
                        _fun0003_ip = 12; continue _fun0003;
case 10:
                        var3 = _closure1_slot15;
                        var1 = var3.CLAIM;
case 12:
                        _fun0003_ip = 13; continue _fun0003;
case 8:
                        var2 = _closure1_slot15;
                        var1 = var2.REWARD;
case 13:
                        return var1;
                    }
                };
                var10 = var3.bind(var4)(var1, var2);
                var3 = _closure1_slot13;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 15;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.CheckpointCardRive;
                var1 = {};
                var5 = _closure1_slot16;
                var5 = var5[var12];
                var1['defaultViewModelInstance'] = var5;
                var5 = {};
                var11 = null;
                var16 = var11 == var14;
                var13 = undefined;
                if(var16) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var17 = var14.id;
                var16 = var17.substring;
                var14 = 4;
                var13 = var16.bind(var17)(var18, var14);
case 14:
                var14 = var11 != var13;
                var11 = '0000';
                if(!var14) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var11 = var13;
case 16:
                var5['id#'] = var11;
                var11 = global;
                var14 = var11.Math;
                var13 = var14.round;
                var15 = var13.bind(var14)(var15);
                var13 = var11.HermesInternal;
                var13 = var13.concat;
                var14 = '';
                var13 = var13.bind(var14)(var15);
                var5['LVL'] = var13;
                var11 = var11.HermesInternal;
                var13 = var11.concat;
                var11 = '/10';
                var11 = var13.bind(var14)(var12, var11);
                var5['Outof'] = var11;
                var11 = _closure1_slot12;
                var11 = var11[var12];
                var5['PersonaName'] = var11;
                var5['AnimationState'] = var10;
                var5['FillColor'] = var8;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 16;
                var7 = var10[var7];
                var8 = var8.bind(var4)(var7);
                var7 = var8.getCheckpointPowerBarUnits;
                var7 = var7.bind(var8)(var9);
                var5['PowerMeter'] = var7;
                var5['reducedMotion'] = var6;
                var1['dataBinding'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot18 = var1;
        var1 = function CardSection(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var7 = var1.step;
                var2 = var1.onNext;
                var _closure2_slot0 = var2;
                var18 = var1.currentUser;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var1 = _closure1_slot17;
                var15 = var1.bind(var4)();
                var _closure2_slot1 = var15;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var6 = 11;
                var1 = var1[var6];
                var5 = var2.bind(var4)(var1);
                var3 = var5.useStateFromStores;
                var1 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() {
                    var2 = _closure1_slot9;
                    var1 = var2.getCheckpointData;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = var3.bind(var5)(var2, var1);
                var2 = var1.messages;
                if(!(var4 === var2)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var3 = {};
                var5 = 0;
                var3['numMessagesSent'] = var5;
                var2 = var3;
case 18:
                var21 = var2.numMessagesSent;
                _closure2_slot2 = var21;
                var2 = var1.voice;
                if(!(var4 === var2)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                var3 = {};
                var5 = 0;
                var3['totalVoiceMinutes'] = var5;
                var2 = var3;
case 20:
                var16 = var2.totalVoiceMinutes;
                var2 = var1.emojis;
                if(!(var4 === var2)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                var3 = {};
                var5 = 0;
                var3['numEmojisSent'] = var5;
                var5 = new Array(0);
                var3['emojis'] = var5;
                var2 = var3;
case 22:
                var13 = var2.numEmojisSent;
                _closure2_slot3 = var13;
                var2 = var2.emojis;
                var3 = var1.guilds;
                if(!(var4 === var3)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                var5 = {};
                var8 = new Array(0);
                var5['guilds'] = var8;
                var3 = var5;
case 24:
                var5 = var3.guilds;
                var1 = var1.applications;
                if(!(var4 === var1)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var3 = {};
                var8 = new Array(0);
                var3['applications'] = var8;
                var1 = var3;
case 26:
                var1 = var1.applications;
                var8 = _closure1_slot1;
                var12 = _closure1_slot2;
                var3 = 17;
                var3 = var12[var3];
                var3 = var8.bind(var4)(var3);
                var3 = var3.bind(var4)();
                var10 = var3.insets;
                var9 = _closure1_slot0;
                var3 = 16;
                var3 = var12[var3];
                var8 = var9.bind(var4)(var3);
                var3 = var8.getDurationAndUnit;
                var3 = var3.bind(var8)(var16);
                var16 = var3.unit;
                _closure2_slot4 = var16;
                var20 = var3.duration;
                _closure2_slot5 = var20;
                var3 = var12[var6];
                var19 = var9.bind(var4)(var3);
                var17 = var19.useStateFromStores;
                var3 = _closure1_slot6;
                var8 = new Array(1);
                var8[0] = var3;
                var3 = function() {
                    var1 = _closure1_slot6;
                    var1 = var1.useReducedMotion;
                    return var1;
                };
                var17 = var17.bind(var19)(var8, var3);
                var8 = _closure1_slot3;
                var3 = 13;
                var3 = var12[var3];
                var3 = var9.bind(var4)(var3);
                var3 = var3.CheckpointColorContext;
                var3 = var8.bind(var4)(var3);
                var8 = 14;
                var8 = var12[var8];
                var9 = var9.bind(var4)(var8);
                var8 = var9.useToken;
                var3 = var3.primaryColor;
                var23 = var8.bind(var9)(var3);
                _closure2_slot6 = var23;
                var3 = var2.length;
                var19 = 0;
                var8 = var3 > var19;
                var3 = null;
                var12 = null;
                if(!var8) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                var12 = var2[var19];
case 28:
                _closure2_slot7 = var12;
                var2 = var5.length;
                var8 = var2 > var19;
                var2 = null;
                if(!var8) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                var5 = var5[var19];
                var2 = var5.guild;
case 30:
                _closure2_slot8 = var2;
                var2 = var1.length;
                var2 = var2 > var19;
                var5 = null;
                if(!var2) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                var1 = var1[var19];
                var5 = var1.game;
case 32:
                _closure2_slot9 = var5;
                var2 = var3 == var12;
                var1 = undefined;
                if(var2) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                var1 = var12.id;
case 34:
                var1 = var3 != var1;
                var8 = undefined;
                if(!var1) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 18;
                var1 = var9[var1];
                var9 = var2.bind(var4)(var1);
                var2 = var9.getEmojiURL;
                var1 = {};
                var22 = var12.id;
                var1['id'] = var22;
                var22 = !var17;
                if(!var22) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                var22 = var12.animated;
case 38:
                var1['animated'] = var22;
                var22 = 20;
                var1['size'] = var22;
                var8 = var2.bind(var9)(var1);
case 36:
                _closure2_slot10 = var8;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var9 = var2.bind(var4)(var1);
                var6 = var9.useStateFromStores;
                var1 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var3 = _closure1_slot7;
                        var2 = var3.getGuild;
                        var5 = _closure2_slot8;
                        var1 = null;
                        var5 = var1 == var5;
                        var1 = undefined;
                        if(var5) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                        var4 = _closure2_slot8;
                        var1 = var4.id;
case 40:
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var6 = var6.bind(var9)(var2, var1);
                _closure2_slot11 = var6;
                var2 = var3 != var5;
                var1 = null;
                if(!var2) { _fun0004_ip = 42; continue _fun0004 }
case 43:
                var2 = var5.icon;
                var2 = var3 != var2;
                var1 = null;
                if(!var2) { _fun0004_ip = 42; continue _fun0004 }
case 44:
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 18;
                var2 = var9[var2];
                var9 = var3.bind(var4)(var2);
                var3 = var9.getApplicationIconSource;
                var2 = {};
                var22 = var5.id;
                var2['id'] = var22;
                var22 = var5.icon;
                var2['icon'] = var22;
                var1 = var3.bind(var9)(var2);
case 42:
                _closure2_slot12 = var1;
                var2 = _closure1_slot11;
                var2 = var2.END_CLAIM;
                var9 = var7 !== var2;
                var3 = _closure1_slot4;
                var22 = var15.title;
                var2 = new Array(15);
                var2[0] = var22;
                var22 = var15.statIcon;
                var2[1] = var22;
                var22 = var15.textEmoji;
                var2[2] = var22;
                var22 = var15.emojiStyles;
                var2[3] = var22;
                var22 = var15.emojiWrapper;
                var2[4] = var22;
                var2[5] = var23;
                var2[6] = var21;
                var2[7] = var20;
                var2[8] = var16;
                var2[9] = var13;
                var2[10] = var12;
                var2[11] = var8;
                var2[12] = var6;
                var2[13] = var5;
                var2[14] = var1;
                var1 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = {};
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 19;
                        var1 = var7[var1];
                        var6 = undefined;
                        var1 = var5.bind(var6)(var1);
                        var1 = var1.ChatIcon;
                        var2['icon'] = var1;
                        var16 = 20;
                        var1 = var7[var16];
                        var1 = var5.bind(var6)(var1);
                        var9 = var1.intl;
                        var4 = var9.string;
                        var3 = _closure1_slot1;
                        var8 = 21;
                        var1 = var7[var8];
                        var1 = var3.bind(var6)(var1);
                        var1 = var1.wWKySP;
                        var1 = var4.bind(var9)(var1);
                        var2['title'] = var1;
                        var4 = _closure1_slot13;
                        var15 = 22;
                        var1 = var7[var15];
                        var3 = var3.bind(var6)(var1);
                        var1 = {'variant': 'heading-xl/medium', 'adjustsFontSizeToFit': true, 'lineClamp': 1};
                        var9 = _closure2_slot2;
                        var1['children'] = var9;
                        var1 = var4.bind(var6)(var3, var1);
                        var2['content'] = var1;
                        var1 = new Array(6);
                        var1[0] = var2;
                        var2 = {};
                        var3 = 23;
                        var3 = var7[var3];
                        var3 = var5.bind(var6)(var3);
                        var3 = var3.MicrophoneIcon;
                        var2['icon'] = var3;
                        var4 = _closure2_slot4;
                        var3 = 24;
                        var3 = var7[var3];
                        var3 = var5.bind(var6)(var3);
                        var3 = var3.TimeUnits;
                        var3 = var3.HOURS;
                        if(!(var4 !== var3)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var4 = var3[var16];
                        var4 = var5.bind(var6)(var4);
                        var5 = var4.intl;
                        var4 = var5.string;
                        var7 = _closure1_slot1;
                        var3 = var3[var8];
                        var3 = var7.bind(var6)(var3);
                        var3 = var3.RmVTph;
                        var3 = var4.bind(var5)(var3);
                        _fun0006_ip = 47; continue _fun0006;
case 45:
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var5 = var4[var16];
                        var5 = var7.bind(var6)(var5);
                        var9 = var5.intl;
                        var7 = var9.format;
                        var5 = _closure1_slot1;
                        var4 = var4[var8];
                        var4 = var5.bind(var6)(var4);
                        var5 = var4.Xu0QsX;
                        var4 = {};
                        var10 = _closure2_slot5;
                        var4['numHours'] = var10;
                        var3 = var7.bind(var9)(var5, var4);
case 47:
                        var2['title'] = var3;
                        var9 = _closure1_slot13;
                        var7 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var4 = var3[var15];
                        var5 = var7.bind(var6)(var4);
                        var4 = {'variant': 'heading-xl/medium', 'adjustsFontSizeToFit': true, 'lineClamp': 1};
                        var10 = _closure2_slot5;
                        var4['children'] = var10;
                        var4 = var9.bind(var6)(var5, var4);
                        var2['content'] = var4;
                        var1[1] = var2;
                        var2 = {};
                        var5 = _closure1_slot0;
                        var4 = 25;
                        var4 = var3[var4];
                        var4 = var5.bind(var6)(var4);
                        var4 = var4.ReactionIcon;
                        var2['icon'] = var4;
                        var4 = var3[var16];
                        var4 = var5.bind(var6)(var4);
                        var10 = var4.intl;
                        var9 = var10.string;
                        var4 = var3[var8];
                        var4 = var7.bind(var6)(var4);
                        var4 = var4.zcbFu1;
                        var4 = var9.bind(var10)(var4);
                        var2['title'] = var4;
                        var10 = _closure1_slot13;
                        var4 = var3[var15];
                        var9 = var7.bind(var6)(var4);
                        var4 = {'variant': 'heading-xl/medium', 'adjustsFontSizeToFit': true, 'lineClamp': 1};
                        var13 = _closure2_slot3;
                        var4['children'] = var13;
                        var4 = var10.bind(var6)(var9, var4);
                        var2['content'] = var4;
                        var1[2] = var2;
                        var2 = {};
                        var4 = 26;
                        var4 = var3[var4];
                        var4 = var5.bind(var6)(var4);
                        var4 = var4.StarIcon;
                        var2['icon'] = var4;
                        var4 = var3[var16];
                        var4 = var5.bind(var6)(var4);
                        var5 = var4.intl;
                        var4 = var5.string;
                        var3 = var3[var8];
                        var3 = var7.bind(var6)(var3);
                        var3 = var3.3sARW7;
                        var3 = var4.bind(var5)(var3);
                        var2['title'] = var3;
                        var5 = _closure1_slot14;
                        var4 = _closure1_slot5;
                        var3 = {};
                        var7 = _closure2_slot1;
                        var9 = var7.title;
                        var7 = new Array(2);
                        var7[0] = var9;
                        var10 = {};
                        var9 = 8;
                        var10['marginTop'] = var9;
                        var7[1] = var10;
                        var3['style'] = var7;
                        var7 = _closure2_slot7;
                        var14 = null;
                        if(!(var14 == var7)) { _fun0006_ip = 48; continue _fun0006 }
case 39:
                        var13 = _closure1_slot13;
                        var10 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var7 = 28;
                        var7 = var17[var7];
                        var7 = var10.bind(var6)(var7);
                        var10 = var7.UnknownGameIcon;
                        var7 = {};
                        var17 = _closure2_slot6;
                        var7['color'] = var17;
                        var17 = 'md';
                        var7['size'] = var17;
                        var10 = var13.bind(var6)(var10, var7);
                        _fun0006_ip = 49; continue _fun0006;
case 48:
                        var17 = _closure1_slot13;
                        var13 = _closure1_slot5;
                        var7 = {};
                        var18 = _closure2_slot1;
                        var19 = var18.emojiWrapper;
                        var18 = new Array(2);
                        var18[0] = var19;
                        var19 = {};
                        var20 = _closure2_slot6;
                        var19['borderColor'] = var20;
                        var18[1] = var19;
                        var7['style'] = var18;
                        var20 = _closure1_slot13;
                        var19 = _closure1_slot1;
                        var21 = _closure1_slot2;
                        var18 = 27;
                        var18 = var21[var18];
                        var19 = var19.bind(var6)(var18);
                        var18 = {};
                        var21 = _closure2_slot7;
                        var21 = var21.id;
                        var22 = var14 == var21;
                        var21 = '';
                        if(!var22) { _fun0006_ip = 50; continue _fun0006 }
case 42:
                        var22 = _closure2_slot7;
                        var21 = var22.name;
case 50:
                        var18['name'] = var21;
                        var21 = _closure2_slot10;
                        var18['src'] = var21;
                        var21 = _closure2_slot1;
                        var22 = var21.emojiStyles;
                        var18['style'] = var22;
                        var22 = var21.emojiStyles;
                        var18['fastImageStyle'] = var22;
                        var21 = var21.textEmoji;
                        var18['textEmojiStyle'] = var21;
                        var18 = var20.bind(var6)(var19, var18);
                        var7['children'] = var18;
                        var10 = var17.bind(var6)(var13, var7);
case 49:
                        var7 = new Array(2);
                        var7[0] = var10;
                        var18 = _closure1_slot13;
                        var13 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var10 = var10[var15];
                        var17 = var13.bind(var6)(var10);
                        var10 = {};
                        var13 = 'text-sm/medium';
                        var10['variant'] = var13;
                        var19 = _closure2_slot7;
                        if(!(var14 != var19)) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                        var19 = _closure2_slot7;
                        var19 = var19.id;
                        if(!(var14 != var19)) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                        var19 = _closure2_slot7;
                        var21 = var19.name;
                        var19 = global;
                        var19 = var19.HermesInternal;
                        var20 = var19.concat;
                        var19 = ':';
                        var19 = var20.bind(var19)(var21, var19);
                        _fun0006_ip = 55; continue _fun0006;
case 53:
                        var21 = _closure1_slot1;
                        var22 = _closure1_slot2;
                        var20 = 29;
                        var20 = var22[var20];
                        var22 = var21.bind(var6)(var20);
                        var21 = var22.convertSurrogateToName;
                        var20 = _closure2_slot7;
                        var20 = var20.name;
                        var19 = var21.bind(var22)(var20);
case 55:
                        _fun0006_ip = 56; continue _fun0006;
case 51:
                        var23 = _closure1_slot0;
                        var20 = _closure1_slot2;
                        var21 = var20[var16];
                        var21 = var23.bind(var6)(var21);
                        var22 = var21.intl;
                        var21 = var22.string;
                        var20 = var20[var16];
                        var20 = var23.bind(var6)(var20);
                        var20 = var20.t;
                        var20 = var20.PoWNfe;
                        var19 = var21.bind(var22)(var20);
case 56:
                        var10['children'] = var19;
                        var10 = var18.bind(var6)(var17, var10);
                        var7[1] = var10;
                        var3['children'] = var7;
                        var3 = var5.bind(var6)(var4, var3);
                        var2['content'] = var3;
                        var1[3] = var2;
                        var2 = {};
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var4 = 30;
                        var4 = var3[var4];
                        var4 = var5.bind(var6)(var4);
                        var4 = var4.GameControllerIcon;
                        var2['icon'] = var4;
                        var4 = var3[var16];
                        var4 = var5.bind(var6)(var4);
                        var5 = var4.intl;
                        var4 = var5.string;
                        var7 = _closure1_slot1;
                        var3 = var3[var8];
                        var3 = var7.bind(var6)(var3);
                        var3 = var3.RbT4Zq;
                        var3 = var4.bind(var5)(var3);
                        var2['title'] = var3;
                        var5 = _closure1_slot14;
                        var4 = _closure1_slot5;
                        var3 = {};
                        var7 = _closure2_slot1;
                        var10 = var7.title;
                        var7 = new Array(2);
                        var7[0] = var10;
                        var10 = {};
                        var10['marginTop'] = var9;
                        var7[1] = var10;
                        var3['style'] = var7;
                        var7 = _closure2_slot12;
                        if(!(var14 == var7)) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                        var17 = _closure1_slot13;
                        var10 = _closure1_slot0;
                        var18 = _closure1_slot2;
                        var7 = 28;
                        var7 = var18[var7];
                        var7 = var10.bind(var6)(var7);
                        var10 = var7.UnknownGameIcon;
                        var7 = {};
                        var18 = _closure2_slot6;
                        var7['color'] = var18;
                        var18 = 'md';
                        var7['size'] = var18;
                        var10 = var17.bind(var6)(var10, var7);
                        _fun0006_ip = 59; continue _fun0006;
case 57:
                        var18 = _closure1_slot13;
                        var17 = _closure1_slot1;
                        var19 = _closure1_slot2;
                        var7 = 31;
                        var7 = var19[var7];
                        var17 = var17.bind(var6)(var7);
                        var7 = {};
                        var19 = _closure2_slot12;
                        var7['source'] = var19;
                        var19 = _closure2_slot1;
                        var19 = var19.statIcon;
                        var7['style'] = var19;
                        var10 = var18.bind(var6)(var17, var7);
case 59:
                        var7 = new Array(2);
                        var7[0] = var10;
                        var18 = _closure1_slot13;
                        var17 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var10 = var10[var15];
                        var17 = var17.bind(var6)(var10);
                        var10 = {};
                        var10['variant'] = var13;
                        var19 = _closure2_slot9;
                        if(!(var14 == var19)) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                        var22 = _closure1_slot0;
                        var19 = _closure1_slot2;
                        var20 = var19[var16];
                        var20 = var22.bind(var6)(var20);
                        var21 = var20.intl;
                        var20 = var21.string;
                        var19 = var19[var16];
                        var19 = var22.bind(var6)(var19);
                        var19 = var19.t;
                        var19 = var19.PoWNfe;
                        var19 = var20.bind(var21)(var19);
                        _fun0006_ip = 62; continue _fun0006;
case 60:
                        var20 = _closure2_slot9;
                        var19 = var20.name;
case 62:
                        var10['children'] = var19;
                        var10 = var18.bind(var6)(var17, var10);
                        var7[1] = var10;
                        var3['children'] = var7;
                        var3 = var5.bind(var6)(var4, var3);
                        var2['content'] = var3;
                        var1[4] = var2;
                        var2 = {};
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var4 = 32;
                        var4 = var3[var4];
                        var4 = var5.bind(var6)(var4);
                        var4 = var4.ServerIcon;
                        var2['icon'] = var4;
                        var4 = var3[var16];
                        var4 = var5.bind(var6)(var4);
                        var5 = var4.intl;
                        var4 = var5.string;
                        var7 = _closure1_slot1;
                        var3 = var3[var8];
                        var3 = var7.bind(var6)(var3);
                        var3 = var3.8XPMJj;
                        var3 = var4.bind(var5)(var3);
                        var2['title'] = var3;
                        var5 = _closure1_slot14;
                        var4 = _closure1_slot5;
                        var3 = {};
                        var7 = _closure2_slot1;
                        var8 = var7.title;
                        var7 = new Array(2);
                        var7[0] = var8;
                        var8 = {};
                        var8['marginTop'] = var9;
                        var7[1] = var8;
                        var3['style'] = var7;
                        var7 = _closure2_slot11;
                        if(!(var14 == var7)) { _fun0006_ip = 63; continue _fun0006 }
case 64:
                        var9 = _closure1_slot13;
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 28;
                        var7 = var10[var7];
                        var7 = var8.bind(var6)(var7);
                        var8 = var7.UnknownGameIcon;
                        var7 = {};
                        var10 = _closure2_slot6;
                        var7['color'] = var10;
                        var10 = 'md';
                        var7['size'] = var10;
                        var8 = var9.bind(var6)(var8, var7);
                        _fun0006_ip = 65; continue _fun0006;
case 63:
                        var10 = _closure1_slot13;
                        var9 = _closure1_slot1;
                        var19 = _closure1_slot2;
                        var17 = 33;
                        var7 = var19[var17];
                        var9 = var9.bind(var6)(var7);
                        var7 = {};
                        var18 = _closure2_slot11;
                        var7['guild'] = var18;
                        var18 = _closure1_slot0;
                        var17 = var19[var17];
                        var17 = var18.bind(var6)(var17);
                        var17 = var17.GuildIconSizes;
                        var17 = var17.XSMALL;
                        var7['size'] = var17;
                        var17 = _closure2_slot1;
                        var17 = var17.statIcon;
                        var7['style'] = var17;
                        var8 = var10.bind(var6)(var9, var7);
case 65:
                        var7 = new Array(2);
                        var7[0] = var8;
                        var10 = _closure1_slot13;
                        var9 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var8 = var8[var15];
                        var9 = var9.bind(var6)(var8);
                        var8 = {};
                        var8['variant'] = var13;
                        var13 = _closure2_slot11;
                        if(!(var14 == var13)) { _fun0006_ip = 66; continue _fun0006 }
case 67:
                        var15 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var13 = var11[var16];
                        var13 = var15.bind(var6)(var13);
                        var14 = var13.intl;
                        var13 = var14.string;
                        var11 = var11[var16];
                        var11 = var15.bind(var6)(var11);
                        var11 = var11.t;
                        var11 = var11.PoWNfe;
                        var11 = var13.bind(var14)(var11);
                        _fun0006_ip = 68; continue _fun0006;
case 66:
                        var12 = _closure2_slot11;
                        var11 = var12.name;
case 68:
                        var8['children'] = var11;
                        var8 = var10.bind(var6)(var9, var8);
                        var7[1] = var8;
                        var3['children'] = var7;
                        var3 = var5.bind(var6)(var4, var3);
                        var2['content'] = var3;
                        var1[5] = var2;
                        return var1;
                    }
                };
                var16 = var3.bind(var4)(var1, var2);
                var3 = _closure1_slot14;
                var2 = _closure1_slot5;
                var1 = {};
                var6 = var15.cardContainer;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var8 = 0;
                if(!var9) { _fun0004_ip = 69; continue _fun0004 }
case 70:
                var13 = var10.bottom;
                var20 = _closure1_slot1;
                var21 = _closure1_slot2;
                var12 = 9;
                var12 = var21[var12];
                var12 = var20.bind(var4)(var12);
                var12 = var12.spacing;
                var12 = var12.PX_96;
                var8 = var13 + var12;
case 69:
                var6['paddingBottom'] = var8;
                var21 = var10.right;
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var8 = 9;
                var20 = var13[var8];
                var20 = var12.bind(var4)(var20);
                var20 = var20.spacing;
                var20 = var20.PX_24;
                var20 = var21 + var20;
                var6['paddingRight'] = var20;
                var10 = var10.left;
                var8 = var13[var8];
                var8 = var12.bind(var4)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_24;
                var8 = var10 + var8;
                var6['paddingLeft'] = var8;
                var13 = 'auto';
                var8 = var13;
                if(!var9) { _fun0004_ip = 71; continue _fun0004 }
case 72:
                var8 = '100%';
case 71:
                var6['height'] = var8;
                var5[1] = var6;
                var1['style'] = var5;
                var5 = _closure1_slot11;
                var5 = var5.END_REWARD;
                var6 = var7 === var5;
                if(!var6) { _fun0004_ip = 73; continue _fun0004 }
case 74:
                var9 = _closure1_slot14;
                var8 = _closure1_slot5;
                var5 = {};
                var10 = var15.cardContainerContent;
                var5['style'] = var10;
                var24 = _closure1_slot14;
                var21 = _closure1_slot5;
                var10 = {};
                var12 = var15.title;
                var10['style'] = var12;
                var25 = _closure1_slot13;
                var30 = _closure1_slot0;
                var22 = _closure1_slot2;
                var12 = 34;
                var12 = var22[var12];
                var12 = var30.bind(var4)(var12);
                var20 = var12.ExperimentalCheckpointIcon;
                var12 = {};
                var26 = 'xs';
                var12['size'] = var26;
                var26 = {};
                var26['tintColor'] = var23;
                var12['style'] = var26;
                var12 = var25.bind(var4)(var20, var12);
                var25 = new Array(2);
                var25[0] = var12;
                var28 = _closure1_slot13;
                var20 = _closure1_slot1;
                var12 = 22;
                var26 = var22[var12];
                var27 = var20.bind(var4)(var26);
                var26 = {'variant': 'eyebrow', 'adjustsFontSizeToFit': true, 'lineClamp': 2};
                var29 = 20;
                var29 = var22[var29];
                var29 = var30.bind(var4)(var29);
                var31 = var29.intl;
                var30 = var31.string;
                var29 = 21;
                var29 = var22[var29];
                var29 = var20.bind(var4)(var29);
                var29 = var29.ir6nEQ;
                var29 = var30.bind(var31)(var29);
                var26['children'] = var29;
                var26 = var28.bind(var4)(var27, var26);
                var25[1] = var26;
                var10['children'] = var25;
                var21 = var24.bind(var4)(var21, var10);
                var10 = new Array(2);
                var10[0] = var21;
                var21 = _closure1_slot13;
                var12 = var22[var12];
                var20 = var20.bind(var4)(var12);
                var12 = {'variant': 'display-lg', 'style': null, 'adjustsFontSizeToFit': true, 'lineClamp': 2, 'children': 'DECO'};
                var22 = var15.display;
                var12['style'] = var22;
                var12 = var21.bind(var4)(var20, var12);
                var10[1] = var12;
                var5['children'] = var10;
                var6 = var9.bind(var4)(var8, var5);
case 73:
                var5 = new Array(4);
                var5[0] = var6;
                var9 = _closure1_slot13;
                var8 = _closure1_slot5;
                var6 = {};
                var12 = var15.riveContainer;
                var10 = new Array(2);
                var10[0] = var12;
                var12 = {};
                var20 = _closure1_slot11;
                var20 = var20.END_SUMMARY;
                if(!(var7 === var20)) { _fun0004_ip = 75; continue _fun0004 }
case 76:
                var13 = '50%';
case 75:
                var12['maxHeight'] = var13;
                var13 = _closure1_slot11;
                var20 = var13.END_SUMMARY;
                var13 = '-10%';
                if(!(var7 === var20)) { _fun0004_ip = 77; continue _fun0004 }
case 78:
                var13 = 0;
case 77:
                var12['marginTop'] = var13;
                var10[1] = var12;
                var6['style'] = var10;
                var13 = _closure1_slot13;
                var12 = _closure1_slot18;
                var10 = {};
                var10['user'] = var18;
                var10['reducedMotion'] = var17;
                var10['step'] = var7;
                var10 = var13.bind(var4)(var12, var10);
                var6['children'] = var10;
                var6 = var9.bind(var4)(var8, var6);
                var5[1] = var6;
                var6 = _closure1_slot11;
                var6 = var6.END_REWARD;
                var6 = var7 === var6;
                if(!var6) { _fun0004_ip = 79; continue _fun0004 }
case 80:
                var10 = _closure1_slot13;
                var13 = _closure1_slot1;
                var22 = _closure1_slot2;
                var8 = 35;
                var8 = var22[var8];
                var9 = var13.bind(var4)(var8);
                var8 = {};
                var12 = function onPress() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var3 = _closure2_slot0;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0007_ip = 81; continue _fun0007 }
case 82:
                        var2 = _closure2_slot0;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 81:
                        var1 = undefined;
                        return var1;
                    }
                };
                var8['onPress'] = var12;
                var12 = {};
                var17 = '50%';
                var12['minWidth'] = var17;
                var8['style'] = var12;
                var17 = _closure1_slot13;
                var12 = 22;
                var12 = var22[var12];
                var13 = var13.bind(var4)(var12);
                var12 = {};
                var18 = 'eyebrow';
                var12['variant'] = var18;
                var18 = var15.buttonCTA;
                var12['style'] = var18;
                var21 = _closure1_slot0;
                var18 = 20;
                var19 = var22[var18];
                var19 = var21.bind(var4)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var22[var18];
                var18 = var21.bind(var4)(var18);
                var18 = var18.t;
                var18 = var18.dcztdU;
                var18 = var19.bind(var20)(var18);
                var12['children'] = var18;
                var12 = var17.bind(var4)(var13, var12);
                var8['children'] = var12;
                var6 = var10.bind(var4)(var9, var8);
case 79:
                var5[2] = var6;
                var6 = _closure1_slot11;
                var6 = var6.END_SUMMARY;
                var6 = var7 === var6;
                if(!var6) { _fun0004_ip = 83; continue _fun0004 }
case 84:
                var9 = _closure1_slot14;
                var8 = _closure1_slot5;
                var7 = {};
                var12 = var15.cardContainerContent;
                var10 = new Array(3);
                var10[0] = var12;
                var12 = var15.cardContainerFooter;
                var10[1] = var12;
                var12 = {};
                var13 = 'flex-start';
                var12['alignItems'] = var13;
                var10[2] = var12;
                var7['style'] = var10;
                var17 = _closure1_slot14;
                var13 = _closure1_slot5;
                var10 = {};
                var12 = var15.title;
                var10['style'] = var12;
                var19 = _closure1_slot13;
                var20 = _closure1_slot0;
                var22 = _closure1_slot2;
                var12 = 34;
                var12 = var22[var12];
                var12 = var20.bind(var4)(var12);
                var18 = var12.ExperimentalCheckpointIcon;
                var12 = {};
                var21 = 'xs';
                var12['size'] = var21;
                var21 = {};
                var21['tintColor'] = var23;
                var12['style'] = var21;
                var12 = var19.bind(var4)(var18, var12);
                var23 = new Array(2);
                var23[0] = var12;
                var26 = _closure1_slot13;
                var21 = _closure1_slot1;
                var12 = 22;
                var18 = var22[var12];
                var25 = var21.bind(var4)(var18);
                var24 = {'variant': 'eyebrow', 'adjustsFontSizeToFit': true, 'lineClamp': 2};
                var19 = 20;
                var18 = var22[var19];
                var18 = var20.bind(var4)(var18);
                var29 = var18.intl;
                var28 = var29.string;
                var18 = 21;
                var27 = var22[var18];
                var27 = var21.bind(var4)(var27);
                var27 = var27.ir6nEQ;
                var27 = var28.bind(var29)(var27);
                var24['children'] = var27;
                var24 = var26.bind(var4)(var25, var24);
                var23[1] = var24;
                var10['children'] = var23;
                var13 = var17.bind(var4)(var13, var10);
                var10 = new Array(3);
                var10[0] = var13;
                var17 = _closure1_slot13;
                var12 = var22[var12];
                var13 = var21.bind(var4)(var12);
                var12 = {'variant': 'display-lg', 'style': null, 'adjustsFontSizeToFit': true, 'lineClamp': 2};
                var23 = var15.display;
                var12['style'] = var23;
                var19 = var22[var19];
                var19 = var20.bind(var4)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var22[var18];
                var18 = var21.bind(var4)(var18);
                var18 = var18.y4M1na;
                var18 = var19.bind(var20)(var18);
                var12['children'] = var18;
                var12 = var17.bind(var4)(var13, var12);
                var10[1] = var12;
                var13 = _closure1_slot13;
                var12 = _closure1_slot5;
                var11 = {};
                var15 = var15.stats;
                var11['style'] = var15;
                var15 = var16.map;
                var14 = function(arg1, arg2) {
                    var5 = _closure1_slot13;
                    var4 = _closure1_slot20;
                    var3 = {};
                    var7 = arg1;
                    var8 = var3;
                    var1 = copyDataProperties(var8, var7);
                    var2 = undefined;
                    var1 = arg2;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                };
                var14 = var15.bind(var16)(var14);
                var11['children'] = var14;
                var11 = var13.bind(var4)(var12, var11);
                var10[2] = var11;
                var7['children'] = var10;
                var6 = var9.bind(var4)(var8, var7);
case 83:
                var5[3] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot19 = var1;
        var1 = function CheckpointStat(arg1) {
            var1 = arg1;
            var12 = var1.icon;
            var13 = var1.title;
            var6 = var1.content;
            var1 = _closure1_slot17;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var2 = _closure1_slot3;
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 13;
            var1 = var14[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.CheckpointColorContext;
            var1 = var2.bind(var4)(var1);
            var2 = 14;
            var2 = var14[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useToken;
            var1 = var1.primaryColor;
            var16 = var2.bind(var3)(var1);
            var3 = _closure1_slot14;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var9.statContainer;
            var1['style'] = var5;
            var8 = _closure1_slot14;
            var7 = _closure1_slot5;
            var5 = {};
            var9 = var9.title;
            var5['style'] = var9;
            var11 = _closure1_slot13;
            var9 = {};
            var15 = 'xs';
            var9['size'] = var15;
            var15 = {};
            var15['tintColor'] = var16;
            var9['style'] = var15;
            var11 = var11.bind(var4)(var12, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot13;
            var11 = _closure1_slot1;
            var10 = 22;
            var10 = var14[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {'variant': 'eyebrow', 'adjustsFontSizeToFit': true, 'lineClamp': 2, 'textBreakStrategy': 'highQuality', 'lineBreakStrategyIOS': 'standard'};
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot20 = var1;
        var1 = function ContentSection(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var4 = var1.step;
                var14 = var1.currentUser;
                var1 = _closure1_slot17;
                var5 = undefined;
                var23 = var1.bind(var5)();
                var6 = _closure1_slot3;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var1 = var2.bind(var5)(var1);
                var1 = var1.CheckpointColorContext;
                var1 = var6.bind(var5)(var1);
                var7 = _closure1_slot1;
                var6 = 17;
                var6 = var3[var6];
                var6 = var7.bind(var5)(var6);
                var6 = var6.bind(var5)();
                var8 = var6.insets;
                var6 = 14;
                var6 = var3[var6];
                var7 = var2.bind(var5)(var6);
                var6 = var7.useToken;
                var1 = var1.backgroundOverlayColor;
                var9 = var6.bind(var7)(var1);
                var1 = 11;
                var1 = var3[var1];
                var6 = var2.bind(var5)(var1);
                var3 = var6.useStateFromStores;
                var1 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() {
                    var2 = _closure1_slot9;
                    var1 = var2.getCheckpointData;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = var3.bind(var6)(var2, var1);
                var13 = var1.avatarDecoration;
                var1 = _closure1_slot11;
                var2 = var1.END_CLAIM;
                var3 = null;
                var1 = null;
                if(!(var4 === var2)) { _fun0008_ip = 85; continue _fun0008 }
case 86:
                var2 = var3 == var14;
                var1 = null;
                if(var2) { _fun0008_ip = 85; continue _fun0008 }
case 87:
                var4 = _closure1_slot13;
                var3 = _closure1_slot5;
                var2 = {};
                var7 = var23.contentContainer;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = {};
                var7['backgroundColor'] = var9;
                var9 = var8.bottom;
                var11 = _closure1_slot1;
                var16 = _closure1_slot2;
                var8 = 9;
                var8 = var16[var8];
                var8 = var11.bind(var5)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_96;
                var8 = var9 + var8;
                var7['paddingBottom'] = var8;
                var6[1] = var7;
                var2['style'] = var6;
                var8 = _closure1_slot14;
                var7 = _closure1_slot5;
                var6 = {};
                var9 = var23.content;
                var6['style'] = var9;
                var17 = _closure1_slot14;
                var12 = _closure1_slot5;
                var9 = {};
                var21 = _closure1_slot13;
                var19 = 22;
                var15 = var16[var19];
                var20 = var11.bind(var5)(var15);
                var18 = {'variant': 'eyebrow', 'style': null, 'adjustsFontSizeToFit': true, 'lineClamp': 2};
                var15 = var23.title;
                var18['style'] = var15;
                var15 = _closure1_slot0;
                var26 = 20;
                var22 = var16[var26];
                var22 = var15.bind(var5)(var22);
                var27 = var22.intl;
                var25 = var27.string;
                var24 = 21;
                var22 = var16[var24];
                var22 = var11.bind(var5)(var22);
                var22 = var22.vKovUV;
                var22 = var25.bind(var27)(var22);
                var18['children'] = var22;
                var20 = var21.bind(var5)(var20, var18);
                var18 = new Array(4);
                var18[0] = var20;
                var22 = _closure1_slot13;
                var20 = var16[var19];
                var21 = var11.bind(var5)(var20);
                var20 = {'variant': 'heading-lg/medium', 'adjustsFontSizeToFit': true, 'lineClamp': 3};
                var25 = var16[var26];
                var25 = var15.bind(var5)(var25);
                var27 = var25.intl;
                var25 = var27.string;
                var24 = var16[var24];
                var24 = var11.bind(var5)(var24);
                var24 = var24.94azAy;
                var24 = var25.bind(var27)(var24);
                var20['children'] = var24;
                var20 = var22.bind(var5)(var21, var20);
                var18[1] = var20;
                var22 = _closure1_slot13;
                var20 = 36;
                var20 = var16[var20];
                var21 = var11.bind(var5)(var20);
                var20 = {};
                var23 = var23.button;
                var20['style'] = var23;
                var20 = var22.bind(var5)(var21, var20);
                var18[2] = var20;
                var21 = _closure1_slot13;
                var19 = var16[var19];
                var20 = var11.bind(var5)(var19);
                var19 = {'variant': 'heading-sm/medium', 'adjustsFontSizeToFit': true, 'lineClamp': 1};
                var22 = var16[var26];
                var22 = var15.bind(var5)(var22);
                var25 = var22.intl;
                var24 = var25.format;
                var22 = var16[var26];
                var22 = var15.bind(var5)(var22);
                var22 = var22.t;
                var23 = var22.eZSTa5;
                var22 = {};
                var27 = global;
                var29 = var27.Date;
                var27 = var29.prototype;
                var28 = Object.create(var27, {constructor: {value: var29}});
                var31 = '2026-01-15';
                var32 = var28;
                var27 = new var32[var29](var31, var30);
                var29 = var27 instanceof Object ? var27 : var28;
                var28 = var29.toLocaleDateString;
                var26 = var16[var26];
                var26 = var15.bind(var5)(var26);
                var26 = var26.intl;
                var27 = var26.currentLocale;
                var26 = {'month': 'long', 'day': 'numeric', 'year': 'numeric', 'timeZone': 'UTC'};
                var26 = var28.bind(var29)(var27, var26);
                var22['date'] = var26;
                var22 = var24.bind(var25)(var23, var22);
                var19['children'] = var22;
                var19 = var21.bind(var5)(var20, var19);
                var18[3] = var19;
                var9['children'] = var18;
                var12 = var17.bind(var5)(var12, var9);
                var9 = new Array(2);
                var9[0] = var12;
                var12 = _closure1_slot13;
                var10 = 37;
                var10 = var16[var10];
                var11 = var11.bind(var5)(var10);
                var10 = {};
                var10['user'] = var14;
                var14 = 38;
                var14 = var16[var14];
                var14 = var15.bind(var5)(var14);
                var14 = var14.AvatarSizes;
                var14 = var14.EDIT_AVATAR_DECORATION;
                var10['size'] = var14;
                var10['pendingAvatarDecoration'] = var13;
                var10 = var12.bind(var5)(var11, var10);
                var9[1] = var10;
                var6['children'] = var9;
                var6 = var8.bind(var5)(var7, var6);
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 85:
                return var1;
            }
        };
        var _closure1_slot21 = var1;
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
        var7 = var4.useContext;
        var _closure1_slot3 = var7;
        var4 = var4.useMemo;
        var _closure1_slot4 = var4;
        var12 = 1;
        var4 = var6[var12];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot5 = var4;
        var10 = 2;
        var4 = var6[var10];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot6 = var4;
        var9 = 3;
        var4 = var6[var9];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot7 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot8 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot9 = var4;
        var4 = 6;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.CheckpointPersonas;
        var8 = var4.CheckpointSlides;
        var _closure1_slot10 = var8;
        var8 = var4.CheckpointSteps;
        var _closure1_slot11 = var8;
        var4 = var4.PersonaNames;
        var _closure1_slot12 = var4;
        var4 = 7;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.jsx;
        var _closure1_slot13 = var8;
        var4 = var4.jsxs;
        var _closure1_slot14 = var4;
        var4 = {};
        var4['REWARD'] = var12;
        var8 = 'REWARD';
        var4[var12] = var8;
        var4['CLAIM'] = var10;
        var8 = 'CLAIM';
        var4[var10] = var8;
        var4['SUMMARY'] = var9;
        var8 = 'SUMMARY';
        var4[var9] = var8;
        var _closure1_slot15 = var4;
        var4 = {};
        var9 = var7.ZERO;
        var8 = 'Bonsai';
        var4[var9] = var8;
        var9 = var7.ONE;
        var8 = 'Donut';
        var4[var9] = var8;
        var9 = var7.TWO;
        var8 = 'Capybara';
        var4[var9] = var8;
        var9 = var7.THREE;
        var8 = 'Disco';
        var4[var9] = var8;
        var9 = var7.FOUR;
        var8 = 'Origami';
        var4[var9] = var8;
        var9 = var7.FIVE;
        var8 = 'Snail';
        var4[var9] = var8;
        var9 = var7.SIX;
        var8 = 'Duck';
        var4[var9] = var8;
        var9 = var7.SEVEN;
        var8 = 'Banana';
        var4[var9] = var8;
        var9 = var7.EIGHT;
        var8 = 'Cat';
        var4[var9] = var8;
        var8 = var7.NINE;
        var7 = 'Cassette';
        var4[var8] = var7;
        var _closure1_slot16 = var4;
        var4 = 8;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var13 = '100%';
        var9 = {'height': '100%', 'width': '100%', 'display': 'flex'};
        var4['container'] = var9;
        var12 = 'center';
        var9 = {'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center', 'width': '100%', 'flexGrow': 1};
        var4['cardContainer'] = var9;
        var9 = {'width': '100%', 'flexShrink': 0};
        var4['contentContainer'] = var9;
        var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'gap': 8};
        var4['title'] = var9;
        var9 = {'fontWeight': 800, 'flexWrap': 'wrap'};
        var4['titleText'] = var9;
        var9 = {};
        var10 = 48;
        var9['lineHeight'] = var10;
        var10 = 9;
        var14 = var6[var10];
        var14 = var11.bind(var1)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_4;
        var9['marginTop'] = var14;
        var14 = var6[var10];
        var14 = var11.bind(var1)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_24;
        var9['marginBottom'] = var14;
        var14 = 'uppercase';
        var9['textTransform'] = var14;
        var4['display'] = var9;
        var15 = 16;
        var16 = 20;
        var9 = {'fontWeight': 800, 'fontSize': 16, 'lineHeight': 20, 'textAlign': 'center'};
        var4['buttonCTA'] = var9;
        var9 = {'flexShrink': 0, 'width': '100%', 'display': 'flex', 'alignItems': 'center'};
        var4['cardContainerContent'] = var9;
        var9 = {'flexGrow': 1, 'width': '100%'};
        var4['riveContainer'] = var9;
        var9 = {};
        var9['width'] = var13;
        var4['cardContainerFooter'] = var9;
        var9 = {'paddingHorizontal': null, 'paddingTop': null, 'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-between'};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_24;
        var9['paddingHorizontal'] = var13;
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_32;
        var9['paddingTop'] = var13;
        var4['content'] = var9;
        var9 = {};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_16;
        var9['marginTop'] = var13;
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_12;
        var9['marginBottom'] = var13;
        var4['button'] = var9;
        var9 = {'display': 'flex', 'flexDirection': 'row', 'flexWrap': 'wrap', 'marginTop': 4294967280};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_16;
        var9['columnGap'] = var13;
        var4['stats'] = var9;
        var9 = {'flexBasis': '40%', 'flexGrow': 1};
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_12;
        var9['marginBottom'] = var13;
        var4['statContainer'] = var9;
        var9 = {'width': 24, 'height': 24};
        var14 = 24;
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.radii;
        var13 = var13.none;
        var9['borderRadius'] = var13;
        var4['statIcon'] = var9;
        var9 = {};
        var13 = 10;
        var17 = var6[var13];
        var18 = var5.bind(var1)(var17);
        var17 = var18.isIOS;
        var17 = var17.bind(var18)();
        if(!var17) { _fun0001_ip = 88; continue _fun0001 }
case 89:
        var15 = var16;
case 88:
        var9['fontSize'] = var15;
        var13 = var6[var13];
        var15 = var5.bind(var1)(var13);
        var13 = var15.isIOS;
        var15 = var13.bind(var15)();
        var13 = undefined;
        if(!var15) { _fun0001_ip = 90; continue _fun0001 }
case 91:
        var13 = var14;
case 90:
        var9['lineHeight'] = var13;
        var9['textAlign'] = var12;
        var10 = var6[var10];
        var10 = var11.bind(var1)(var10);
        var10 = var10.colors;
        var10 = var10.INTERACTIVE_TEXT_DEFAULT;
        var9['color'] = var10;
        var4['textEmoji'] = var9;
        var9 = {'width': 20, 'height': 20};
        var4['emojiStyles'] = var9;
        var9 = {'borderWidth': 1, 'display': 'flex', 'padding': 1};
        var4['emojiWrapper'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot17 = var4;
        var4 = 39;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/checkpoint/native/components/screens/CheckpointEndScreen.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function CheckpointEndScreen(arg1) {
            var1 = arg1;
            var14 = var1.step;
            var13 = var1.onNext;
            var1 = _closure1_slot17;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 11;
            var1 = var5[var1];
            var6 = var2.bind(var4)(var1);
            var3 = var6.useStateFromStores;
            var1 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var3.bind(var6)(var2, var1);
            var3 = _closure1_slot13;
            var2 = _closure1_slot1;
            var1 = 12;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var5 = _closure1_slot10;
            var5 = var5.END;
            var1['slide'] = var5;
            var5 = true;
            var1['allowFullScreen'] = var5;
            var7 = _closure1_slot14;
            var6 = _closure1_slot5;
            var5 = {};
            var8 = var8.container;
            var5['style'] = var8;
            var11 = _closure1_slot13;
            var10 = _closure1_slot19;
            var8 = {};
            var8['step'] = var14;
            var8['onNext'] = var13;
            var8['currentUser'] = var12;
            var10 = var11.bind(var4)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            var11 = _closure1_slot13;
            var10 = _closure1_slot21;
            var9 = {};
            var9['step'] = var14;
            var9['onNext'] = var13;
            var9['currentUser'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var3['default'] = var2;
        return var1;
    }
})();