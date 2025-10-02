// app/modules/now_playing/native/UserActivitySpotify.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var14 = require;
    var6 = metroImportDefault;
    var5 = metroImportAll;
    var3 = exports;
    var15 = dependencyMap;
    var _closure1_slot0 = var14;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var _closure1_slot3 = var15;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot7;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot6;
            var1 = _closure1_slot17;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = new Array(0);
case 5:
            var5 = _closure1_slot7;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 4:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 7: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 8: // try_end0
            _fun0002_ip = 9; continue _fun0002;
case 10: // catch_target0
            CatchBlockStart(arg_register=1);
case 9:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var12 = function canOpenSpotifyUrl() {
        var3 = _closure1_slot9;
        var2 = var3.canOpenURL;
        var6 = _closure1_slot10;
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = '';
        var1 = ':';
        var1 = var5.bind(var4)(var6, var1);
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot18 = var12;
    var11 = function attributeInstall() {
        var3 = _closure1_slot2;
        var4 = _closure1_slot3;
        var1 = 9;
        var2 = var4[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getConstants;
        var2 = var2.bind(var3)();
        var7 = var2.Identifier;
        var3 = _closure1_slot0;
        var2 = 10;
        var2 = var4[var2];
        var2 = var3.bind(var1)(var2);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {};
        var6 = _closure1_slot11;
        var5 = var6.INSTALL_ATTRIBUTION;
        var5 = var5.bind(var6)(var7);
        var2['url'] = var5;
        var5 = true;
        var2['rejectWithError'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot19 = var11;
    var10 = function openUrl(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var9 = arg2;
            var8 = arg3;
            var1 = arg1;
            if(var1) { _fun0003_ip = 5; continue _fun0003 }
case 11:
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 11;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.openURL;
            var6 = _closure1_slot11;
            var5 = var6.WEB_OPEN;
            var1 = 'mobile';
            var1 = var5.bind(var6)(var9, var8, var1);
            var1 = var3.bind(var4)(var1);
            _fun0003_ip = 12; continue _fun0003;
case 5:
            var4 = _closure1_slot9;
            var3 = var4.openURL;
            var7 = _closure1_slot11;
            var6 = var7.PLAYER_OPEN;
            var11 = true;
            var10 = 'mobile';
            var14 = var7;
            var13 = var9;
            var12 = var8;
            var2 = var14[var6](var13, var12, var11, var10, var9);
            var4 = var3.bind(var4)(var2);
            var3 = var4.catch;
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 12:
            return var1;
        }
    };
    var _closure1_slot20 = var10;
    var9 = function openTrack(arg1) {
        var1 = arg1;
        var1 = var1.sync_id;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot18;
        var1 = undefined;
        var5 = var3.bind(var1)();
        var4 = var5.then;
        var3 = function(arg1) {
            var5 = _closure1_slot20;
            var1 = _closure1_slot12;
            var4 = var1.TRACK;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = arg1;
            var1 = var5.bind(var2)(var1, var4, var3);
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        var3 = var4.catch;
        var2 = function() {
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot21 = var9;
    var8 = function openArtist(arg1, arg2, arg3) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = arg3;
        var _closure2_slot2 = var1;
        var3 = _closure1_slot18;
        var1 = undefined;
        var5 = var3.bind(var1)();
        var4 = var5.then;
        var3 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 12;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var4 = var5.getSpotifyMetadataFromActivity;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var3 = var4.bind(var5)(var3, var2);
            var2 = var3.then;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.artist_ids;
                var1 = _closure2_slot2;
                var5 = var2[var1];
                var4 = _closure1_slot20;
                var3 = _closure3_slot0;
                var1 = _closure1_slot12;
                var2 = var1.ARTIST;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        var3 = var4.catch;
        var2 = function() {
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot22 = var8;
    var7 = function openAlbum(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot18;
        var1 = undefined;
        var5 = var3.bind(var1)();
        var4 = var5.then;
        var3 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 12;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var4 = var5.getSpotifyMetadataFromActivity;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var3 = var4.bind(var5)(var3, var2);
            var2 = var3.then;
            var1 = function(arg1) {
                var1 = arg1;
                var5 = var1.album_id;
                var4 = _closure1_slot20;
                var3 = _closure3_slot0;
                var1 = _closure1_slot12;
                var2 = var1.ALBUM;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        var3 = var4.catch;
        var2 = function() {
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot23 = var7;
    var1 = global;
    var16 = var1.Object;
    var13 = var16.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var16)(var3, var1, var4);
    var1 = 0;
    var4 = var15[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var15[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var15[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var15[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var15[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var15[var4];
    var13 = var5.bind(var1)(var4);
    var4 = 6;
    var4 = var15[var4];
    var4 = var14.bind(var1)(var4);
    var5 = var4.Linking;
    var _closure1_slot9 = var5;
    var6 = var4.StyleSheet;
    var4 = 7;
    var4 = var15[var4];
    var4 = var14.bind(var1)(var4);
    var5 = var4.SPOTIFY_APP_PROTOCOL;
    var _closure1_slot10 = var5;
    var5 = var4.SpotifyEndpoints;
    var _closure1_slot11 = var5;
    var4 = var4.SpotifyResourceTypes;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var15[var4];
    var4 = var14.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot13 = var5;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var5 = var6.create;
    var4 = {};
    var16 = {'height': 16, 'marginRight': 8, 'width': 16};
    var4['buttonIcon'] = var16;
    var4 = var5.bind(var6)(var4);
    var _closure1_slot15 = var4;
    var5 = var13.Component;
    var4 = function(arg1) {
        var4 = function SpotifyPlayButton(arg1) {
            var6 = this;
            var11 = 0;
            var7 = copyRestArgs(var11);
            var3 = _closure1_slot4;
            var5 = _closure2_slot0;
            var4 = undefined;
            var3 = var3.bind(var4)(var6, var5);
            var3 = _closure1_slot16;
            var1 = new Array(0);
            var11 = var1;
            var10 = var7;
            var9 = 0;
            var7 = arraySpread(var11, var10, var9);
            var1 = var3.bind(var4)(var6, var5, var1);
            var _closure3_slot0 = var1;
            var2 = function() {
                var1 = _closure3_slot0;
                var1 = var1.props;
                var1 = var1.activity;
                var1 = var1.sync_id;
                var _closure4_slot0 = var1;
                var3 = _closure1_slot18;
                var1 = undefined;
                var5 = var3.bind(var1)();
                var4 = var5.then;
                var3 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = arg1;
                        if(var1) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                        var1 = _closure1_slot19;
                        var4 = undefined;
                        var1 = var1.bind(var4)();
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var1 = 11;
                        var1 = var5[var1];
                        var4 = var3.bind(var4)(var1);
                        var3 = var4.openURL;
                        var1 = _closure1_slot11;
                        var1 = var1.APP_STORE;
                        var1 = var3.bind(var4)(var1);
                        _fun0004_ip = 15; continue _fun0004;
case 13:
                        var4 = _closure1_slot9;
                        var3 = var4.openURL;
                        var7 = _closure1_slot11;
                        var6 = var7.PLAYER_OPEN;
                        var2 = _closure1_slot12;
                        var5 = var2.TRACK;
                        var2 = _closure4_slot0;
                        var2 = var6.bind(var7)(var5, var2);
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.catch;
                        var2 = function() {
                            var1 = undefined;
                            return var1;
                        };
                        var1 = var3.bind(var4)(var2);
case 15:
                        return var1;
                    }
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.catch;
                var2 = function() {
                    var1 = undefined;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['handlePress'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'renderIcon';
        var5['key'] = var1;
        var1 = function value() {
            var4 = _closure1_slot13;
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var8 = 13;
            var1 = var7[var8];
            var3 = undefined;
            var2 = var6.bind(var3)(var1);
            var1 = {};
            var8 = var7[var8];
            var8 = var6.bind(var3)(var8);
            var8 = var8.Sizes;
            var8 = var8.CUSTOM;
            var1['size'] = var8;
            var5 = _closure1_slot15;
            var5 = var5.buttonIcon;
            var1['style'] = var5;
            var5 = 14;
            var5 = var7[var5];
            var5 = var6.bind(var3)(var5);
            var1['source'] = var5;
            var5 = true;
            var1['disableColor'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            var5 = this;
            var1 = var5.props;
            var13 = var1.activity;
            var4 = _closure1_slot13;
            var7 = _closure1_slot1;
            var8 = _closure1_slot3;
            var6 = 15;
            var1 = var8[var6];
            var3 = undefined;
            var2 = var7.bind(var3)(var1);
            var1 = {};
            var10 = var5.renderIcon;
            var1['renderIcon'] = var10;
            var10 = _closure1_slot0;
            var9 = 16;
            var11 = var8[var9];
            var11 = var10.bind(var3)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var9 = var8[var9];
            var9 = var10.bind(var3)(var9);
            var9 = var9.t;
            var10 = var9.LEgD7u;
            var9 = {};
            var13 = var13.name;
            var9['platform'] = var13;
            var9 = var11.bind(var12)(var10, var9);
            var1['text'] = var9;
            var9 = var5.props;
            var9 = var9.style;
            var1['style'] = var9;
            var6 = var8[var6];
            var6 = var7.bind(var3)(var6);
            var6 = var6.Sizes;
            var6 = var6.SMALL;
            var1['size'] = var6;
            var5 = var5.handlePress;
            var1['onPress'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var6 = var4.bind(var1)(var5);
    var5 = var13.PureComponent;
    var4 = function(arg1) {
        var4 = function SpotifyTrack(arg1) {
            var6 = this;
            var11 = 0;
            var7 = copyRestArgs(var11);
            var3 = _closure1_slot4;
            var5 = _closure2_slot0;
            var4 = undefined;
            var3 = var3.bind(var4)(var6, var5);
            var3 = _closure1_slot16;
            var1 = new Array(0);
            var11 = var1;
            var10 = var7;
            var9 = 0;
            var7 = arraySpread(var11, var10, var9);
            var1 = var3.bind(var4)(var6, var5, var1);
            var _closure3_slot0 = var1;
            var2 = function() {
                var3 = _closure1_slot21;
                var1 = _closure3_slot0;
                var1 = var1.props;
                var2 = var1.activity;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1['handleOpenSpotifyTrack'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot8;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot5;
        var5 = {};
        var6 = 'render';
        var5['key'] = var6;
        var1 = function value() {
            var1 = this;
            var _closure3_slot0 = var1;
            var1 = var1.props;
            var5 = var1.text;
            var1 = var1.onPress;
            var _closure3_slot1 = var1;
            var4 = _closure1_slot13;
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 17;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.LegacyText;
            var1 = {};
            var6 = function onPress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure3_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                    var3 = _closure3_slot1;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
case 16:
                    var2 = _closure3_slot0;
                    var1 = var2.handleOpenSpotifyTrack;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPress'] = var6;
            var6 = true;
            var1['suppressHighlighting'] = var6;
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var5 = var4.bind(var1)(var5);
    var16 = var13.PureComponent;
    var4 = function(arg1) {
        var4 = function SpotifyArtists(arg1) {
            var6 = this;
            var11 = 0;
            var7 = copyRestArgs(var11);
            var3 = _closure1_slot4;
            var5 = _closure2_slot0;
            var4 = undefined;
            var3 = var3.bind(var4)(var6, var5);
            var3 = _closure1_slot16;
            var1 = new Array(0);
            var11 = var1;
            var10 = var7;
            var9 = 0;
            var7 = arraySpread(var11, var10, var9);
            var1 = var3.bind(var4)(var6, var5, var1);
            var _closure3_slot0 = var1;
            var2 = function(arg1) {
                var1 = _closure3_slot0;
                var1 = var1.props;
                var5 = _closure1_slot22;
                var4 = var1.activity;
                var3 = var1.userId;
                var1 = undefined;
                var2 = arg1;
                var2 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var1['handleOpenSpotifyArtist'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'renderLink';
        var5['key'] = var1;
        var1 = function value(arg1, arg2, arg3) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = arg2;
                var1 = this;
                var _closure3_slot0 = var1;
                var _closure3_slot1 = var5;
                var1 = var1.props;
                var1 = var1.onPress;
                var _closure3_slot2 = var1;
                var4 = _closure1_slot14;
                var7 = _closure1_slot0;
                var10 = _closure1_slot3;
                var6 = 17;
                var1 = var10[var6];
                var3 = undefined;
                var1 = var7.bind(var3)(var1);
                var2 = var1.LegacyText;
                var1 = {};
                var8 = _closure1_slot13;
                var6 = var10[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.LegacyText;
                var6 = {};
                var9 = function onPress() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var3 = _closure3_slot2;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0007_ip = 16; continue _fun0007 }
case 17:
                        var3 = _closure3_slot2;
                        var2 = undefined;
                        var2 = var3.bind(var2)();
case 16:
                        var3 = _closure3_slot0;
                        var2 = var3.handleOpenSpotifyArtist;
                        var1 = _closure3_slot1;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    }
                };
                var6['onPress'] = var9;
                var9 = true;
                var6['suppressHighlighting'] = var9;
                var9 = arg1;
                var6['children'] = var9;
                var7 = var8.bind(var3)(var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var7 = ', ';
                var8 = arg3;
                if(!var8) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                var7 = '';
case 18:
                var6[1] = var7;
                var1['children'] = var6;
                var1 = var4.bind(var3)(var2, var1, var5);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            var1 = this;
            var _closure3_slot0 = var1;
            var1 = var1.props;
            var3 = var1.artists;
            var2 = var3.split;
            var1 = ';';
            var7 = var2.bind(var3)(var1);
            var2 = var7.length;
            var1 = 1;
            var1 = var2 - var1;
            var _closure3_slot1 = var1;
            var4 = _closure1_slot13;
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 17;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.LegacyText;
            var1 = {};
            var6 = var7.map;
            var5 = function(arg1, arg2) {
                var5 = arg2;
                var4 = _closure3_slot0;
                var3 = var4.renderLink;
                var1 = _closure3_slot1;
                var2 = arg1;
                var1 = var5 === var1;
                var1 = var3.bind(var4)(var2, var5, var1);
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var16);
    var13 = var13.PureComponent;
    var2 = function(arg1) {
        var4 = function SpotifyAlbum(arg1) {
            var6 = this;
            var11 = 0;
            var7 = copyRestArgs(var11);
            var3 = _closure1_slot4;
            var5 = _closure2_slot0;
            var4 = undefined;
            var3 = var3.bind(var4)(var6, var5);
            var3 = _closure1_slot16;
            var1 = new Array(0);
            var11 = var1;
            var10 = var7;
            var9 = 0;
            var7 = arraySpread(var11, var10, var9);
            var1 = var3.bind(var4)(var6, var5, var1);
            var _closure3_slot0 = var1;
            var2 = function() {
                var1 = _closure3_slot0;
                var1 = var1.props;
                var4 = _closure1_slot23;
                var3 = var1.activity;
                var2 = var1.userId;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var1['handleOpenSpotifyAlbum'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot8;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot5;
        var5 = {};
        var6 = 'render';
        var5['key'] = var6;
        var1 = function value() {
            var5 = this;
            var4 = _closure1_slot13;
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 17;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.LegacyText;
            var1 = {};
            var6 = var5.handleOpenSpotifyAlbum;
            var1['onPress'] = var6;
            var6 = true;
            var1['suppressHighlighting'] = var6;
            var5 = var5.props;
            var5 = var5.text;
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var13);
    var13 = 18;
    var13 = var15[var13];
    var15 = var14.bind(var1)(var13);
    var14 = var15.fileFinishedImporting;
    var13 = 'modules/now_playing/native/UserActivitySpotify.tsx';
    var13 = var14.bind(var15)(var13);
    var3['canOpenSpotifyUrl'] = var12;
    var3['attributeInstall'] = var11;
    var3['openUrl'] = var10;
    var3['openTrack'] = var9;
    var3['openArtist'] = var8;
    var3['openAlbum'] = var7;
    var3['SpotifyPlayButton'] = var6;
    var3['SpotifyTrack'] = var5;
    var3['SpotifyArtists'] = var4;
    var3['SpotifyAlbum'] = var2;
    return var1;
})();