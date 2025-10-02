// app/modules/calls/CallConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var12 = {};
    var13 = 0;
    var12['STREAM'] = var13;
    var8 = 'STREAM';
    var12[var13] = var8;
    var2 = 1;
    var12['HIDDEN_STREAM'] = var2;
    var1 = 'HIDDEN_STREAM';
    var12[var2] = var1;
    var5 = 2;
    var12['USER'] = var5;
    var6 = 'USER';
    var12[var5] = var6;
    var4 = 3;
    var12['ACTIVITY'] = var4;
    var1 = 'ACTIVITY';
    var12[var4] = var1;
    var _closure1_slot0 = var12;
    var11 = {};
    var11['STREAM'] = var8;
    var11['USER'] = var6;
    var11['ACTIVITY'] = var1;
    var10 = {};
    var1 = 'NONE';
    var10['NONE'] = var1;
    var1 = 'AUTO';
    var10['AUTO'] = var1;
    var9 = {};
    var9['DESKTOP'] = var13;
    var1 = 'DESKTOP';
    var9[var13] = var1;
    var9['MOBILE'] = var2;
    var1 = 'MOBILE';
    var9[var2] = var1;
    var9['XBOX'] = var5;
    var1 = 'XBOX';
    var9[var5] = var1;
    var9['PLAYSTATION'] = var4;
    var1 = 'PLAYSTATION';
    var9[var4] = var1;
    var8 = {};
    var1 = 'Context Menu';
    var8['CONTEXT_MENU'] = var1;
    var1 = 'Three-Dot';
    var8['THREE_DOT'] = var1;
    var1 = 'Caret';
    var8['CARET'] = var1;
    var1 = 'Other Button';
    var8['OTHER_BUTTON'] = var1;
    var6 = {};
    var6['VIDEO'] = var13;
    var1 = 'VIDEO';
    var6[var13] = var1;
    var6['CAMERA_PREVIEW'] = var2;
    var1 = 'CAMERA_PREVIEW';
    var6[var2] = var1;
    var5 = {};
    var2 = var6.VIDEO;
    var1 = 320;
    var5[var2] = var1;
    var1 = var6.CAMERA_PREVIEW;
    var14 = 160;
    var5[var1] = var14;
    var4 = {};
    var2 = var6.VIDEO;
    var1 = 960;
    var4[var2] = var1;
    var2 = var6.CAMERA_PREVIEW;
    var1 = 480;
    var4[var2] = var1;
    var2 = {};
    var15 = var6.VIDEO;
    var1 = 200;
    var2[var15] = var1;
    var1 = var6.CAMERA_PREVIEW;
    var2[var1] = var14;
    var1 = dependencyMap;
    var14 = var1[var13];
    var13 = require;
    var1 = undefined;
    var15 = var13.bind(var1)(var14);
    var14 = var15.fileFinishedImporting;
    var13 = 'modules/calls/CallConstants.tsx';
    var13 = var14.bind(var15)(var13);
    var3['ParticipantTypes'] = var12;
    var3['ContextMenuTileTypes'] = var11;
    var3['ParticipantSelectionTypes'] = var10;
    var3['VoicePlatforms'] = var9;
    var3['CallMenuEntrypoint'] = var8;
    var8 = function isStreamParticipant(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var5 = null;
            var1 = var5 == var4;
            var6 = undefined;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var4.type;
case 2:
            var1 = _closure1_slot0;
            var1 = var1.STREAM;
            var1 = var6 === var1;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var5 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var4.type;
case 6:
            var2 = _closure1_slot0;
            var2 = var2.HIDDEN_STREAM;
            var1 = var3 === var2;
case 4:
            return var1;
        }
    };
    var3['isStreamParticipant'] = var8;
    var8 = function isUserParticipant(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var2 = var1.type;
case 2:
            var1 = _closure1_slot0;
            var1 = var1.USER;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['isUserParticipant'] = var8;
    var7 = function isActivityParticipant(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var2 = var1.type;
case 2:
            var1 = _closure1_slot0;
            var1 = var1.ACTIVITY;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['isActivityParticipant'] = var7;
    var3['PictureInPictureTypes'] = var6;
    var3['DEFAULT_PIP_WIDTH'] = var5;
    var3['MAX_PIP_WIDTH'] = var4;
    var3['MIN_PIP_WIDTH'] = var2;
    var2 = 8;
    var3['EMOJI_PICKER_EMOJI_TO_SHOW_COUNT'] = var2;
    var2 = 550;
    var3['MIN_CALL_WIDTH'] = var2;
    var2 = 230;
    var3['MIN_CALL_HEIGHT'] = var2;
    return var1;
})();