// app/modules/polls/native/PollVotesActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var6;
    var1 = function PollEmoji(arg1) {
        var1 = arg1;
        var8 = var1.style;
        var6 = var1.emoji;
        var _closure2_slot0 = var6;
        var3 = _closure1_slot16;
        var4 = undefined;
        var5 = var3.bind(var4)();
        var7 = _closure1_slot0;
        var9 = _closure1_slot2;
        var3 = 12;
        var3 = var9[var3];
        var10 = var7.bind(var4)(var3);
        var7 = var10.useStateFromStores;
        var11 = _closure1_slot10;
        var3 = new Array(1);
        var3[0] = var11;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = null;
                if(!(var1 == var2)) { _fun0001_ip = 22; continue _fun0001 }
 18:
                var2 = undefined;
                return var2;
 22:
                var2 = _closure2_slot0;
                var4 = var2.animated;
                if(var4) { _fun0001_ip = 90; continue _fun0001 }
 35:
                var6 = _closure1_slot10;
                var3 = var6.getCustomEmojiById;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var3 = var3.bind(var6)(var2);
                var6 = var1 == var3;
                var2 = undefined;
                if(var6) { _fun0001_ip = 77; continue _fun0001 }
 71:
                var2 = var3.animated;
 77:
                var1 = var1 != var2;
                if(!var1) { _fun0001_ip = 87; continue _fun0001 }
 84:
                var1 = var2;
 87:
                var4 = var1;
 90:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getEmojiURL;
                var1 = {};
                var5 = _closure2_slot0;
                var5 = var5.id;
                var1['id'] = var5;
                var1['animated'] = var4;
                var4 = 16;
                var1['size'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var7 = var7.bind(var10)(var3, var2);
        var3 = _closure1_slot14;
        var2 = _closure1_slot1;
        var1 = 14;
        var1 = var9[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['style'] = var8;
        var1['src'] = var7;
        var6 = var6.name;
        var1['name'] = var6;
        var6 = var5.emojiText;
        var1['textEmojiStyle'] = var6;
        var5 = var5.emojiImage;
        var1['fastImageStyle'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function PollVotesHeader(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var14 = var1.message;
            var _closure2_slot0 = var14;
            var2 = var1.selectedAnswerId;
            var _closure2_slot1 = var2;
            var1 = var1.setSelectedAnswerId;
            var _closure2_slot2 = var1;
            var1 = _closure1_slot16;
            var5 = undefined;
            var16 = var1.bind(var5)();
            var6 = _closure1_slot5;
            var4 = var6.useMemo;
            var1 = var14.reactions;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getTotalVotes;
                var1 = _closure2_slot0;
                var1 = var1.reactions;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var24 = var4.bind(var6)(var1, var3);
            var4 = _closure1_slot5;
            var3 = var4.useRef;
            var1 = null;
            var17 = var3.bind(var4)(var1);
            var _closure2_slot3 = var17;
            var4 = _closure1_slot5;
            var3 = var4.useRef;
            var3 = var3.bind(var4)(var1);
            var _closure2_slot4 = var3;
            var6 = _closure1_slot5;
            var4 = var6.useRef;
            var3 = false;
            var3 = var4.bind(var6)(var3);
            var _closure2_slot5 = var3;
            var6 = _closure1_slot5;
            var4 = var6.useEffect;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = global;
                var4 = var1.setTimeout;
                var3 = _closure1_slot4;
                var1 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 497; continue _fun0003 }
 12:
                            var3 = undefined;
                            var _closure5_slot0 = var3;
                            var _closure5_slot1 = var3;
                            var2 = _closure2_slot3;
                            var7 = var2.current;
                            _closure5_slot0 = var7;
                            var2 = _closure2_slot4;
                            var2 = var2.current;
                            _closure5_slot1 = var2;
                            var4 = null;
                            if(!(var4 != var7)) { _fun0003_ip = 491; continue _fun0003 }
 60:
                            if(!(var4 != var2)) { _fun0003_ip = 491; continue _fun0003 }
 67:
                            var2 = global;
                            var9 = var2.Promise;
                            var7 = var9.prototype;
                            var8 = Object.create(var7, {constructor: {value: var9}});
                            var19 = function(arg1) {
                                var2 = arg1;
                                var _closure6_slot0 = var2;
                                var3 = _closure5_slot0;
                                var2 = var3.measure;
                                var1 = function(arg1, arg2, arg3, arg4, arg5) {
                                    var3 = _closure6_slot0;
                                    var2 = {};
                                    var1 = arg3;
                                    var2['scrollWidth'] = var1;
                                    var1 = arg5;
                                    var2['scrollPageX'] = var1;
                                    var1 = undefined;
                                    var1 = var3.bind(var1)(var2);
                                    return var1;
                                };
                                var1 = var2.bind(var3)(var1);
                                var1 = undefined;
                                return var1;
                            };
                            var20 = var8;
                            var7 = new var20[var9](var19, var18);
                            var10 = var7 instanceof Object ? var7 : var8;
                            var9 = var2.Promise;
                            var7 = var9.prototype;
                            var8 = Object.create(var7, {constructor: {value: var9}});
                            var19 = function(arg1) {
                                var2 = arg1;
                                var _closure6_slot0 = var2;
                                var3 = _closure5_slot1;
                                var2 = var3.measure;
                                var1 = function(arg1, arg2, arg3, arg4, arg5) {
                                    var3 = _closure6_slot0;
                                    var2 = {};
                                    var1 = arg3;
                                    var2['width'] = var1;
                                    var1 = arg5;
                                    var2['pageX'] = var1;
                                    var1 = undefined;
                                    var1 = var3.bind(var1)(var2);
                                    return var1;
                                };
                                var1 = var2.bind(var3)(var1);
                                var1 = undefined;
                                return var1;
                            };
                            var20 = var8;
                            var7 = new var20[var9](var19, var18);
                            var9 = var7 instanceof Object ? var7 : var8;
                            var8 = var2.Promise;
                            var7 = var8.prototype;
                            var7 = Object.create(var7, {constructor: {value: var8}});
                            var19 = function(arg1) {
                                var2 = arg1;
                                var _closure6_slot0 = var2;
                                var4 = _closure5_slot1;
                                var3 = var4.measureLayout;
                                var2 = _closure5_slot0;
                                var1 = function(arg1) {
                                    var3 = _closure6_slot0;
                                    var2 = {};
                                    var1 = arg1;
                                    var2['x'] = var1;
                                    var1 = undefined;
                                    var1 = var3.bind(var1)(var2);
                                    return var1;
                                };
                                var1 = var3.bind(var4)(var2, var1);
                                var1 = undefined;
                                return var1;
                            };
                            var20 = var7;
                            var6 = new var20[var8](var19, var18);
                            var8 = var6 instanceof Object ? var6 : var7;
                            var7 = var2.Promise;
                            var6 = var7.all;
                            var2 = new Array(3);
                            var2[0] = var10;
                            var2[1] = var9;
                            var2[2] = var8;
                            var2 = var6.bind(var7)(var2);
                            SaveGenerator(address=205);
 203:
                            return var2;
 205:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(var6) { _fun0003_ip = 494; continue _fun0003 }
 214:
                            var8 = _closure1_slot3;
                            var6 = 3;
                            var10 = var8.bind(var3)(var2, var6);
                            var8 = 0;
                            var6 = var10[var8];
                            var13 = var6.scrollWidth;
                            var6 = var6.scrollPageX;
                            var9 = 1;
                            var9 = var10[var9];
                            var12 = var9.width;
                            var9 = var9.pageX;
                            var16 = 2;
                            var10 = var10[var16];
                            var10 = var10.x;
                            var7 = _closure1_slot9;
                            var7 = var7.useReducedMotion;
                            var7 = !var7;
                            var11 = _closure2_slot5;
                            var11 = var11.current;
                            if(var11) { _fun0003_ip = 373; continue _fun0003 }
 303:
                            var11 = _closure2_slot3;
                            var15 = var11.current;
                            if(!(var4 != var15)) { _fun0003_ip = 358; continue _fun0003 }
 316:
                            var14 = var15.scrollTo;
                            var11 = {};
                            var17 = var12 / var16;
                            var17 = var10 + var17;
                            var16 = var13 / var16;
                            var16 = var17 - var16;
                            var11['x'] = var16;
                            var11['y'] = var8;
                            var11['animated'] = var7;
                            var11 = var14.bind(var15)(var11);
 358:
                            var14 = _closure2_slot5;
                            var11 = true;
                            var14['current'] = var11;
                            return var3;
 373:
                            if(!(!(var9 < var6))) { _fun0003_ip = 445; continue _fun0003 }
 377:
                            var9 = var9 + var12;
                            var6 = var6 + var13;
                            if(!(var9 > var6)) { _fun0003_ip = 491; continue _fun0003 }
 389:
                            var6 = _closure2_slot3;
                            var11 = var6.current;
                            if(!(var4 != var11)) { _fun0003_ip = 491; continue _fun0003 }
 402:
                            var9 = var11.scrollTo;
                            var6 = {};
                            var12 = var10 + var12;
                            var13 = var12 - var13;
                            var12 = 16;
                            var12 = var13 + var12;
                            var6['x'] = var12;
                            var6['y'] = var8;
                            var6['animated'] = var7;
                            var6 = var9.bind(var11)(var6);
                            _fun0003_ip = 491; continue _fun0003;
 445:
                            var5 = _closure2_slot3;
                            var6 = var5.current;
                            if(!(var4 != var6)) { _fun0003_ip = 491; continue _fun0003 }
 458:
                            var5 = var6.scrollTo;
                            var4 = {};
                            var9 = 16;
                            var9 = var10 - var9;
                            var4['x'] = var9;
                            var4['y'] = var8;
                            var4['animated'] = var7;
                            var4 = var5.bind(var6)(var4);
 491:
                            return var3;
 494:
                            return var2;
 497:
                            return var1;
                        }
                    };
                    return var1;
                };
                var3 = var3.bind(var1)(var2);
                var2 = 0;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var2 = var4.bind(var6)(var2, var3);
            var6 = _closure1_slot5;
            var4 = var6.useMemo;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.Gesture;
                var1 = var2.Native;
                var3 = var1.bind(var2)();
                var2 = var3.disallowInterruption;
                var1 = true;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = new Array(0);
            var11 = var4.bind(var6)(var3, var2);
            var2 = var14.poll;
            var2 = var1 == var2;
            if(var2) { _fun0002_ip = 629; continue _fun0002 }
 213:
            var4 = _closure1_slot15;
            var3 = _closure1_slot7;
            var2 = {};
            var9 = _closure1_slot14;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var7 = 17;
            var6 = var19[var7];
            var6 = var18.bind(var5)(var6);
            var8 = var6.Text;
            var6 = {'style': null, 'variant': 'redesign/heading-18/bold', 'color': 'header-primary', 'accessibilityRole': 'header'};
            var12 = var16.headerText;
            var6['style'] = var12;
            var12 = var14.poll;
            var12 = var12.question;
            var12 = var12.text;
            var6['children'] = var12;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(3);
            var6[0] = var8;
            var9 = _closure1_slot14;
            var7 = var19[var7];
            var7 = var18.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            var12 = var16.subheaderText;
            var7['style'] = var12;
            var15 = 15;
            var12 = var19[var15];
            var12 = var18.bind(var5)(var12);
            var22 = var12.intl;
            var21 = var22.format;
            var12 = var19[var15];
            var12 = var18.bind(var5)(var12);
            var12 = var12.t;
            var20 = var12.XRkuoa;
            var12 = {};
            var23 = var24.toLocaleString;
            var23 = var23.bind(var24)();
            var12['count'] = var23;
            var12 = var21.bind(var22)(var20, var12);
            var7['children'] = var12;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var9 = _closure1_slot14;
            var7 = 19;
            var7 = var19[var7];
            var7 = var18.bind(var5)(var7);
            var8 = var7.GestureDetector;
            var7 = {};
            var7['gesture'] = var11;
            var12 = _closure1_slot14;
            var11 = _closure1_slot8;
            var10 = {'ref': null, 'style': null, 'contentContainerStyle': null, 'horizontal': true, 'showsHorizontalScrollIndicator': false, 'accessibilityRole': 'tablist'};
            var10['ref'] = var17;
            var17 = var16.answerScroll;
            var10['style'] = var17;
            var16 = var16.answerScrollContainer;
            var10['contentContainerStyle'] = var16;
            var16 = var19[var15];
            var16 = var18.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.qbir+/;
            var15 = var16.bind(var17)(var15);
            var10['accessibilityLabel'] = var15;
            var14 = var14.poll;
            var15 = var14.answers;
            var14 = var15.map;
            var13 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var3 = _closure2_slot1;
                    var7 = global;
                    var4 = var7.String;
                    var2 = var1.answer_id;
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var9 = var3 === var2;
                    var4 = _closure1_slot14;
                    var3 = _closure1_slot17;
                    var2 = {};
                    var10 = undefined;
                    if(!var9) { _fun0004_ip = 57; continue _fun0004 }
 53:
                    var10 = _closure2_slot4;
 57:
                    var2['ref'] = var10;
                    var2['answer'] = var1;
                    var2['selected'] = var9;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 20;
                    var8 = var10[var8];
                    var10 = var9.bind(var5)(var8);
                    var9 = var10.reactionForId;
                    var8 = _closure2_slot0;
                    var8 = var8.reactions;
                    var11 = var7.String;
                    var7 = var1.answer_id;
                    var7 = var11.bind(var5)(var7);
                    var7 = var9.bind(var10)(var8, var7);
                    var2['reaction'] = var7;
                    var6 = _closure2_slot2;
                    var2['setSelectedAnswerId'] = var6;
                    var1 = var1.answer_id;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                }
            };
            var13 = var14.bind(var15)(var13);
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 629:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function VotersList(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var14 = var1.channelId;
            var _closure2_slot0 = var14;
            var13 = var1.messageId;
            var _closure2_slot1 = var13;
            var15 = var1.reaction;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var1 = _closure1_slot16;
            var11 = var1.bind(var4)();
            var7 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 21;
            var1 = var3[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var1.analyticsLocations;
            var _closure2_slot2 = var1;
            var6 = 22;
            var6 = var3[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['channelId'] = var14;
            var6['messageId'] = var13;
            var6['reaction'] = var15;
            var6 = var7.bind(var4)(var6);
            var10 = var6.reactors;
            var _closure2_slot3 = var10;
            var12 = var6.hasMore;
            var6 = _closure1_slot0;
            var7 = 23;
            var7 = var3[var7];
            var9 = var6.bind(var4)(var7);
            var8 = var9.useReactorsOnScrollNative;
            var7 = {};
            var7['channelId'] = var14;
            var7['messageId'] = var13;
            var7['reactionSelected'] = var15;
            var7['reactors'] = var10;
            var7['reactorsHasMore'] = var12;
            var12 = 24;
            var12 = var3[var12];
            var12 = var6.bind(var4)(var12);
            var12 = var12.ReactionTypes;
            var12 = var12.VOTE;
            var7['reactionType'] = var12;
            var8 = var8.bind(var9)(var7);
            var7 = 12;
            var7 = var3[var7];
            var15 = var6.bind(var4)(var7);
            var12 = var15.useStateFromStores;
            var7 = _closure1_slot11;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = var12.bind(var15)(var9, var7);
            var _closure2_slot4 = var15;
            var12 = _closure1_slot5;
            var9 = var12.useCallback;
            var7 = new Array(5);
            var7[0] = var15;
            var15 = var10.length;
            var7[1] = var15;
            var7[2] = var14;
            var7[3] = var13;
            var7[4] = var1;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = arg1;
                    var13 = var1.item;
                    var _closure3_slot0 = var13;
                    var14 = var1.index;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 25;
                    var1 = var3[var1];
                    var4 = undefined;
                    var7 = var2.bind(var4)(var1);
                    var3 = var7.getNickname;
                    var1 = _closure2_slot4;
                    var6 = null;
                    var1 = var6 == var1;
                    var2 = undefined;
                    if(var1) { _fun0006_ip = 77; continue _fun0006 }
 68:
                    var1 = _closure2_slot4;
                    var2 = var1.guild_id;
 77:
                    var1 = _closure2_slot4;
                    var8 = var6 == var1;
                    var1 = undefined;
                    if(var8) { _fun0006_ip = 99; continue _fun0006 }
 90:
                    var8 = _closure2_slot4;
                    var1 = var8.id;
 99:
                    var8 = var3.bind(var7)(var2, var1, var13);
                    if(!(var6 == var8)) { _fun0006_ip = 141; continue _fun0006 }
 110:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 26;
                    var1 = var3[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.getGlobalName;
                    var8 = var1.bind(var2)(var13);
 141:
                    var11 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 26;
                    var1 = var9[var1];
                    var2 = var11.bind(var4)(var1);
                    var1 = var2.getUserTag;
                    var7 = var1.bind(var2)(var13);
                    var3 = _closure1_slot13;
                    var2 = var3.getUser;
                    var1 = var13.id;
                    var15 = var2.bind(var3)(var1);
                    var3 = _closure1_slot14;
                    var2 = _closure1_slot0;
                    var1 = 27;
                    var1 = var9[var1];
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.TableRow;
                    var1 = {};
                    var12 = 0;
                    var12 = var12 === var14;
                    var1['start'] = var12;
                    var12 = _closure2_slot3;
                    var16 = var12.length;
                    var12 = 1;
                    var12 = var16 - var12;
                    var12 = var12 === var14;
                    var1['end'] = var12;
                    var12 = _closure1_slot14;
                    var16 = 28;
                    var9 = var9[var16];
                    var11 = var11.bind(var4)(var9);
                    var9 = {};
                    var14 = _closure2_slot4;
                    var18 = var6 == var14;
                    var14 = undefined;
                    if(var18) { _fun0006_ip = 294; continue _fun0006 }
 285:
                    var17 = _closure2_slot4;
                    var14 = var17.guild_id;
 294:
                    var9['guildId'] = var14;
                    var14 = var13;
                    if(!(var6 != var15)) { _fun0006_ip = 308; continue _fun0006 }
 305:
                    var14 = var15;
 308:
                    var9['user'] = var14;
                    var15 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var14 = var14[var16];
                    var14 = var15.bind(var4)(var14);
                    var14 = var14.AvatarSizes;
                    var14 = var14.SMALL;
                    var9['size'] = var14;
                    var9 = var12.bind(var4)(var11, var9);
                    var1['icon'] = var9;
                    var9 = var8;
                    if(!(var6 == var9)) { _fun0006_ip = 398; continue _fun0006 }
 362:
                    var12 = _closure1_slot14;
                    var11 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var10 = 29;
                    var10 = var14[var10];
                    var11 = var11.bind(var4)(var10);
                    var10 = {};
                    var10['user'] = var13;
                    var9 = var12.bind(var4)(var11, var10);
 398:
                    var1['label'] = var9;
                    var8 = var6 != var8;
                    var6 = null;
                    if(!var8) { _fun0006_ip = 414; continue _fun0006 }
 411:
                    var6 = var7;
 414:
                    var1['subLabel'] = var6;
                    var5 = function onPress() {
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 30;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var4 = _closure3_slot0;
                        var5 = var4.id;
                        var1['userId'] = var5;
                        var1['localUser'] = var4;
                        var5 = _closure2_slot2;
                        var1['sourceAnalyticsLocations'] = var5;
                        var5 = _closure2_slot0;
                        var1['channelId'] = var5;
                        var4 = _closure2_slot1;
                        var1['messageId'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['onPress'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var9 = var9.bind(var12)(var1, var7);
            var1 = 31;
            var3 = var3[var1];
            var7 = var6.bind(var4)(var3);
            var6 = var7.useSharedValue;
            var13 = var10.length;
            var3 = 1;
            var12 = 0;
            if(!(var12 === var13)) { _fun0005_ip = 339; continue _fun0005 }
 337:
            var3 = 0;
 339:
            var14 = var6.bind(var7)(var3);
            _closure2_slot5 = var14;
            var12 = _closure1_slot5;
            var7 = var12.useEffect;
            var6 = new Array(2);
            var6[0] = var14;
            var3 = var10.length;
            var6[1] = var3;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot3;
                    var2 = var2.length;
                    var4 = 0;
                    if(!(var4 === var2)) { _fun0007_ip = 34; continue _fun0007 }
 18:
                    var3 = _closure2_slot5;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var4);
                    _fun0007_ip = 96; continue _fun0007;
 34:
                    var3 = _closure2_slot5;
                    var2 = var3.set;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 32;
                    var4 = var4[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.withTiming;
                    var4 = {};
                    var1 = 200;
                    var4['duration'] = var1;
                    var1 = 1;
                    var1 = var5.bind(var6)(var1, var4);
                    var1 = var2.bind(var3)(var1);
 96:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var12)(var3, var6);
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = var12[var1];
            var7 = var6.bind(var4)(var3);
            var3 = var7.useAnimatedStyle;
            var2 = function b() {
                var1 = {'flex': 1, 'opacity': null, 'marginBottom': 32};
                var3 = _closure2_slot5;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['opacity'] = var2;
                return var1;
            };
            var13 = {};
            var13['opacity'] = var14;
            var2['__closure'] = var13;
            var13 = 8593850252158.0;
            var2['__workletHash'] = var13;
            var13 = _closure1_slot18;
            var2['__initData'] = var13;
            var7 = var3.bind(var7)(var2);
            var3 = _closure1_slot14;
            var2 = _closure1_slot1;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var1['style'] = var7;
            var7 = _closure1_slot14;
            var5 = 33;
            var5 = var12[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheetFlashList;
            var5 = {};
            var11 = var11.list;
            var5['contentContainerStyle'] = var11;
            var5['data'] = var10;
            var5['renderItem'] = var9;
            var5['onScroll'] = var8;
            var8 = 79;
            var5['estimatedItemSize'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function NoResults() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = _closure1_slot16;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 34;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var12 = var1.bind(var4)();
            var3 = _closure1_slot15;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var10.noResultsContainer;
            var1['style'] = var5;
            var8 = _closure1_slot14;
            var6 = _closure1_slot6;
            var5 = {};
            var9 = var10.noResultsImage;
            var5['style'] = var9;
            var11 = _closure1_slot0;
            var9 = 35;
            var9 = var13[var9];
            var11 = var11.bind(var4)(var9);
            var9 = var11.isThemeDark;
            var9 = var9.bind(var11)(var12);
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            if(var9) { _fun0008_ip = 129; continue _fun0008 }
 115:
            var9 = 37;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            _fun0008_ip = 141; continue _fun0008;
 129:
            var11 = 36;
            var11 = var13[var11];
            var9 = var12.bind(var4)(var11);
 141:
            var5['source'] = var9;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var14 = _closure1_slot14;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 17;
            var8 = var13[var6];
            var8 = var12.bind(var4)(var8);
            var11 = var8.Text;
            var8 = {'style': null, 'variant': 'heading-md/bold', 'color': 'header-primary'};
            var9 = var10.noResultsTitle;
            var8['style'] = var9;
            var9 = 15;
            var15 = var13[var9];
            var15 = var12.bind(var4)(var15);
            var17 = var15.intl;
            var16 = var17.string;
            var15 = var13[var9];
            var15 = var12.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.vhQK3t;
            var15 = var16.bind(var17)(var15);
            var8['children'] = var15;
            var8 = var14.bind(var4)(var11, var8);
            var5[1] = var8;
            var8 = _closure1_slot14;
            var6 = var13[var6];
            var6 = var12.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'variant': 'text-sm/semibold', 'color': 'header-secondary'};
            var10 = var10.noResultsSubtitle;
            var6['style'] = var10;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.bwytdn;
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
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
    var4 = var15.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot5 = var8;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Image;
    var _closure1_slot6 = var7;
    var7 = var4.View;
    var _closure1_slot7 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var13 = 8;
    var4 = var6[var13];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot14 = var7;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var11 = 16;
    var10 = {'textAlign': 'center', 'paddingHorizontal': 16};
    var4['headerText'] = var10;
    var10 = {'textAlign': 'center', 'marginTop': 2, 'paddingHorizontal': 16};
    var4['subheaderText'] = var10;
    var10 = {};
    var14 = 24;
    var10['marginTop'] = var14;
    var4['answerScroll'] = var10;
    var10 = {'gap': 4, 'paddingHorizontal': 16};
    var4['answerScrollContainer'] = var10;
    var10 = {'marginTop': 16, 'marginHorizontal': 16, 'marginBottom': 8};
    var4['answerName'] = var10;
    var10 = {};
    var10['paddingHorizontal'] = var11;
    var4['list'] = var10;
    var10 = {'padding': 8, 'flexDirection': 'row', 'alignItems': 'center', 'borderRadius': null, 'maxWidth': 200};
    var14 = 11;
    var16 = var6[var14];
    var16 = var15.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.xs;
    var10['borderRadius'] = var16;
    var4['answerButton'] = var10;
    var10 = {};
    var14 = var6[var14];
    var14 = var15.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MODIFIER_ACCENT;
    var10['backgroundColor'] = var14;
    var4['answerSelected'] = var10;
    var10 = {};
    var10['marginRight'] = var13;
    var4['answerEmoji'] = var10;
    var10 = {};
    var10['flexShrink'] = var12;
    var4['answerText'] = var10;
    var10 = {};
    var10['fontSize'] = var11;
    var4['emojiText'] = var10;
    var10 = {'height': 16, 'width': 16, 'flexShrink': 0};
    var4['emojiImage'] = var10;
    var10 = {'flexDirection': 'column', 'alignItems': 'center', 'paddingHorizontal': 16};
    var4['noResultsContainer'] = var10;
    var10 = {'marginTop': 32, 'width': 138};
    var4['noResultsImage'] = var10;
    var10 = {'marginTop': 16, 'textAlign': 'center'};
    var4['noResultsTitle'] = var10;
    var10 = {'marginTop': 4, 'textAlign': 'center'};
    var4['noResultsSubtitle'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot16 = var4;
    var7 = var8.forwardRef;
    var4 = function(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var2 = arg1;
            var13 = var2.answer;
            var _closure2_slot0 = var13;
            var3 = var2.reaction;
            var11 = var2.selected;
            var8 = var2.setSelectedAnswerId;
            var _closure2_slot1 = var8;
            var2 = _closure1_slot16;
            var4 = undefined;
            var14 = var2.bind(var4)();
            var7 = null;
            var5 = var7 == var3;
            var2 = undefined;
            if(var5) { _fun0009_ip = 82; continue _fun0009 }
 61:
            var3 = var3.count_details;
            var5 = var7 == var3;
            var2 = undefined;
            if(var5) { _fun0009_ip = 82; continue _fun0009 }
 76:
            var2 = var3.vote;
 82:
            var3 = var7 != var2;
            var10 = 0;
            if(!var3) { _fun0009_ip = 94; continue _fun0009 }
 91:
            var10 = var2;
 94:
            var5 = _closure1_slot5;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var8;
            var8 = var13.answer_id;
            var2[1] = var8;
            var1 = function() {
                var3 = _closure2_slot1;
                var2 = global;
                var4 = var2.String;
                var1 = _closure2_slot0;
                var2 = var1.answer_id;
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = var3.bind(var5)(var1, var2);
            var9 = 'text-normal';
            if(!var11) { _fun0009_ip = 149; continue _fun0009 }
 143:
            var9 = 'interactive-active';
 149:
            var2 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 15;
            var3 = var12[var1];
            var3 = var2.bind(var4)(var3);
            var15 = var3.intl;
            var5 = var15.formatToPlainString;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var3 = var1.wqBc7O;
            var1 = {};
            var1['numVotes'] = var10;
            var16 = var13.poll_media;
            var16 = var16.text;
            var1['option'] = var16;
            var5 = var5.bind(var15)(var3, var1);
            var3 = _closure1_slot15;
            var1 = 16;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableHighlight;
            var1 = {};
            var12 = arg2;
            var1['ref'] = var12;
            var1['onPress'] = var8;
            var12 = var14.answerButton;
            var8 = new Array(2);
            var8[0] = var12;
            var12 = undefined;
            if(!var11) { _fun0009_ip = 292; continue _fun0009 }
 286:
            var12 = var14.answerSelected;
 292:
            var8[1] = var12;
            var1['style'] = var8;
            var8 = 'tab';
            var1['accessibilityRole'] = var8;
            var8 = {};
            var8['selected'] = var11;
            var1['accessibilityState'] = var8;
            var1['accessibilityLabel'] = var5;
            var5 = var13.poll_media;
            var5 = var5.emoji;
            var5 = var7 != var5;
            var8 = null;
            if(!var5) { _fun0009_ip = 388; continue _fun0009 }
 345:
            var12 = _closure1_slot14;
            var11 = _closure1_slot19;
            var5 = {};
            var15 = var14.answerEmoji;
            var5['style'] = var15;
            var15 = var13.poll_media;
            var15 = var15.emoji;
            var5['emoji'] = var15;
            var8 = var12.bind(var4)(var11, var5);
 388:
            var5 = new Array(3);
            var5[0] = var8;
            var8 = var13.poll_media;
            var8 = var8.text;
            var8 = var7 != var8;
            var7 = null;
            if(!var8) { _fun0009_ip = 498; continue _fun0009 }
 416:
            var12 = _closure1_slot14;
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = 17;
            var8 = var15[var8];
            var8 = var11.bind(var4)(var8);
            var11 = var8.Text;
            var8 = {};
            var14 = var14.answerText;
            var8['style'] = var14;
            var14 = 'text-sm/semibold';
            var8['variant'] = var14;
            var8['color'] = var9;
            var14 = 1;
            var8['lineClamp'] = var14;
            var13 = var13.poll_media;
            var13 = var13.text;
            var8['children'] = var13;
            var7 = var12.bind(var4)(var11, var8);
 498:
            var5[1] = var7;
            var8 = _closure1_slot15;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 17;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-sm/semibold', 'color': null, 'lineClamp': 1};
            var6['color'] = var9;
            var9 = var10.toLocaleString;
            var10 = var9.bind(var10)();
            var9 = [' ', '('];
            var9[2] = var10;
            var10 = ')';
            var9[3] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot17 = var4;
    var4 = {};
    var7 = 'function PollVotesActionSheetTsx1(){const{opacity}=this.__closure;return{flex:1,opacity:opacity.get(),marginBottom:32};}';
    var4['code'] = var7;
    var _closure1_slot18 = var4;
    var4 = 41;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/polls/native/PollVotesActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PollVotesActionSheet(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var15 = var1.channelId;
            var _closure2_slot0 = var15;
            var14 = var1.messageId;
            var _closure2_slot1 = var14;
            var8 = var1.initialAnswerId;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var1 = _closure1_slot16;
            var19 = var1.bind(var4)();
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 21;
            var3 = var7[var1];
            var5 = var6.bind(var4)(var3);
            var3 = 38;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.POLL_VOTES;
            var3 = var5.bind(var4)(var3);
            var5 = var3.analyticsLocations;
            var6 = _closure1_slot5;
            var3 = var6.useState;
            var8 = var3.bind(var6)(var8);
            var6 = _closure1_slot3;
            var3 = 2;
            var6 = var6.bind(var4)(var8, var3);
            var11 = 0;
            var23 = var6[var11];
            var _closure2_slot2 = var23;
            var3 = 1;
            var22 = var6[var3];
            var6 = _closure1_slot0;
            var3 = 12;
            var3 = var7[var3];
            var8 = var6.bind(var4)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot12;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var4 = _closure1_slot12;
                var3 = var4.getMessage;
                var2 = _closure2_slot0;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var24 = var7.bind(var8)(var6, var3);
            var _closure2_slot3 = var24;
            var12 = null;
            var3 = var12 != var24;
            if(!var3) { _fun0010_ip = 208; continue _fun0010 }
 198:
            var6 = var24.poll;
            var3 = var12 != var6;
 208:
            _closure2_slot4 = var3;
            var9 = _closure1_slot5;
            var8 = var9.useEffect;
            var7 = new Array(1);
            var7[0] = var3;
            var6 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = _closure2_slot4;
                    if(var1) { _fun0011_ip = 52; continue _fun0011 }
 10:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 39;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var1 = 'PollVotesActionSheet';
                    var1 = var2.bind(var3)(var1);
 52:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var8.bind(var9)(var6, var7);
            var9 = _closure1_slot5;
            var8 = var9.useMemo;
            var7 = var12 == var24;
            var6 = undefined;
            if(var7) { _fun0010_ip = 266; continue _fun0010 }
 260:
            var6 = var24.reactions;
 266:
            var7 = new Array(2);
            var7[0] = var6;
            var7[1] = var23;
            var6 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var2 = _closure2_slot3;
                    var3 = null;
                    var5 = var3 == var2;
                    var4 = undefined;
                    var2 = undefined;
                    if(var5) { _fun0012_ip = 30; continue _fun0012 }
 20:
                    var5 = _closure2_slot3;
                    var2 = var5.reactions;
 30:
                    if(!(var3 == var2)) { _fun0012_ip = 36; continue _fun0012 }
 34:
                    return var4;
 36:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 20;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.reactionForId;
                    var2 = _closure2_slot3;
                    var2 = var2.reactions;
                    var1 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var13 = var8.bind(var9)(var6, var7);
            if(var3) { _fun0010_ip = 296; continue _fun0010 }
 294:
            return var12;
 296:
            var3 = var12 == var24;
            var18 = undefined;
            if(var3) { _fun0010_ip = 343; continue _fun0010 }
 305:
            var3 = var24.poll;
            var6 = var12 == var3;
            var18 = undefined;
            if(var6) { _fun0010_ip = 343; continue _fun0010 }
 320:
            var6 = var3.answers;
            var3 = var6.find;
            var2 = function(arg1) {
                var1 = global;
                var3 = var1.String;
                var1 = arg1;
                var2 = var1.answer_id;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = _closure2_slot2;
                var1 = var2 === var1;
                return var1;
            };
            var18 = var3.bind(var6)(var2);
 343:
            var3 = var12 == var13;
            var2 = undefined;
            if(var3) { _fun0010_ip = 373; continue _fun0010 }
 352:
            var3 = var13.count_details;
            var6 = var12 == var3;
            var2 = undefined;
            if(var6) { _fun0010_ip = 373; continue _fun0010 }
 367:
            var2 = var3.vote;
 373:
            var3 = var12 != var2;
            var9 = 0;
            if(!var3) { _fun0010_ip = 385; continue _fun0010 }
 382:
            var9 = var2;
 385:
            var3 = _closure1_slot14;
            var16 = _closure1_slot0;
            var20 = _closure1_slot2;
            var1 = var20[var1];
            var1 = var16.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var5;
            var7 = _closure1_slot15;
            var5 = 40;
            var5 = var20[var5];
            var5 = var16.bind(var4)(var5);
            var6 = var5.BottomSheet;
            var5 = {};
            var8 = true;
            var5['scrollable'] = var8;
            var21 = _closure1_slot14;
            var17 = _closure1_slot20;
            var8 = {};
            var8['message'] = var24;
            var8['selectedAnswerId'] = var23;
            var8['setSelectedAnswerId'] = var22;
            var8 = var21.bind(var4)(var17, var8);
            var5['header'] = var8;
            var17 = _closure1_slot15;
            var8 = 17;
            var8 = var20[var8];
            var8 = var16.bind(var4)(var8);
            var16 = var8.Text;
            var8 = {'style': null, 'variant': 'text-sm/semibold', 'color': 'header-secondary'};
            var19 = var19.answerName;
            var8['style'] = var19;
            var20 = var12 == var18;
            var19 = undefined;
            if(var20) { _fun0010_ip = 550; continue _fun0010 }
 539:
            var18 = var18.poll_media;
            var19 = var18.text;
 550:
            var18 = new Array(3);
            var18[0] = var19;
            var19 = ' - ';
            var18[1] = var19;
            var20 = _closure1_slot0;
            var23 = _closure1_slot2;
            var19 = 15;
            var21 = var23[var19];
            var21 = var20.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.format;
            var19 = var23[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.t;
            var20 = var19.SG/Cy8;
            var19 = {};
            var23 = var9.toLocaleString;
            var23 = var23.bind(var9)();
            var19['count'] = var23;
            var19 = var21.bind(var22)(var20, var19);
            var18[2] = var19;
            var8['children'] = var18;
            var16 = var17.bind(var4)(var16, var8);
            var8 = new Array(2);
            var8[0] = var16;
            if(!(var12 != var13)) { _fun0010_ip = 672; continue _fun0010 }
 668:
            if(!(!(var9 > var11))) { _fun0010_ip = 690; continue _fun0010 }
 672:
            var12 = _closure1_slot14;
            var11 = _closure1_slot22;
            var9 = {};
            var9 = var12.bind(var4)(var11, var9);
            _fun0010_ip = 719; continue _fun0010;
 690:
            var12 = _closure1_slot14;
            var11 = _closure1_slot21;
            var10 = {};
            var10['channelId'] = var15;
            var10['messageId'] = var14;
            var10['reaction'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 719:
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();