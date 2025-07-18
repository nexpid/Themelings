// app/modules/safety_hub/SafetyHubStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot32 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var9 = function handleSafetyHubRequestAgeVerificationResetModalAction(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0002_ip = 34; continue _fun0002 }
 9:
            var4 = '';
            _closure1_slot26 = var4;
            _closure1_slot28 = var1;
            var1 = false;
            _closure1_slot29 = var1;
            var1 = undefined;
            return var1;
 34:
            var5 = "Cannot destructure 'undefined' or 'null'.";
            var6 = var2;
            var1 = throwTypeError(var6, var5);
            var1 = undefined;
            throw var1;
        }
    };
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
    var11 = 0;
    var2 = var6[var11];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
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
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.AgeCheckStatus;
    var _closure1_slot8 = var8;
    var12 = var2.AppealIngestionSignal;
    var _closure1_slot9 = var12;
    var2 = var2.AGE_CHECK_MAX_POLL_ATTEMPTS;
    var _closure1_slot10 = var2;
    var2 = {};
    var _closure1_slot11 = var2;
    var2 = {};
    var _closure1_slot12 = var2;
    var2 = {};
    var10 = 6;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.AccountStandingState;
    var10 = var10.ALL_GOOD;
    var2['state'] = var10;
    var _closure1_slot13 = var2;
    var10 = false;
    var _closure1_slot14 = var10;
    var _closure1_slot15 = var10;
    var2 = null;
    var _closure1_slot16 = var2;
    var _closure1_slot17 = var2;
    var _closure1_slot18 = var10;
    var _closure1_slot19 = var10;
    var13 = new Array(0);
    var _closure1_slot20 = var13;
    var _closure1_slot21 = var10;
    var _closure1_slot22 = var2;
    var12 = var12.DIDNT_VIOLATE_POLICY;
    var _closure1_slot23 = var12;
    var12 = '';
    var _closure1_slot24 = var12;
    var _closure1_slot25 = var12;
    var _closure1_slot26 = var12;
    var _closure1_slot27 = var11;
    var _closure1_slot28 = var2;
    var _closure1_slot29 = var10;
    var8 = var8.NONE;
    var _closure1_slot30 = var8;
    var _closure1_slot31 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function SafetyHubStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot32;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 69; continue _fun0003 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 105; continue _fun0003;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'isFetching';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(22);
        var1[0] = var5;
        var5 = {};
        var7 = 'getClassifications';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var1 = _closure1_slot11;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getClassification';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot11;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getAccountStanding';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getFetchError';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isInitialized';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getClassificationRequestState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot12;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getAppealClassificationId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getIsDsaEligible';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getIsAppealEligible';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot19;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getAppealEligibility';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getAppealSignal';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot23;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getFreeTextAppealReason';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot24;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getIsSubmitting';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getSubmitError';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot22;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getUsername';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot25;
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getAgeVerificationWebviewUrl';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot26;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getAgeVerificationError';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot28;
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getIsLoadingAgeVerification';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot29;
            return var1;
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'getAgeCheckStatus';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot30;
            return var1;
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'getAgeCheckError';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot31;
            return var1;
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'getAgeCheckAttempts';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot27;
            return var1;
        };
        var5['value'] = var6;
        var1[21] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'SafetyHubStore';
    var8['displayName'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var16 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleFetchStart() {
        var1 = true;
        _closure1_slot14 = var1;
        var1 = undefined;
        return var1;
    };
    var2['SAFETY_HUB_FETCH_START'] = var10;
    var10 = function handleFetchSuccess(arg1) {
        var1 = arg1;
        var10 = var1.classifications;
        var7 = var1.accountStanding;
        var6 = var1.isDsaEligible;
        var5 = var1.isAppealEligible;
        var4 = var1.username;
        var3 = var1.appealEligibility;
        var9 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 7;
        var8 = var8[var1];
        var1 = undefined;
        var9 = var9.bind(var1)(var8);
        var8 = 'id';
        var8 = var9.bind(var1)(var10, var8);
        _closure1_slot11 = var8;
        _closure1_slot13 = var7;
        _closure1_slot18 = var6;
        _closure1_slot19 = var5;
        var5 = false;
        _closure1_slot14 = var5;
        var5 = true;
        _closure1_slot15 = var5;
        var5 = null;
        _closure1_slot16 = var5;
        _closure1_slot25 = var4;
        _closure1_slot20 = var3;
        return var1;
    };
    var2['SAFETY_HUB_FETCH_SUCCESS'] = var10;
    var10 = function handleFetchFailure(arg1) {
        var1 = arg1;
        var2 = var1.error;
        var3 = false;
        _closure1_slot14 = var3;
        _closure1_slot15 = var3;
        _closure1_slot16 = var2;
        var1 = undefined;
        return var1;
    };
    var2['SAFETY_HUB_FETCH_FAILURE'] = var10;
    var10 = function handleFetchClassificationStart(arg1) {
        var5 = _closure1_slot12;
        var1 = arg1;
        var4 = var1.classificationId;
        var6 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var6.bind(var1)(var2);
        var2 = var2.ClassificationRequestState;
        var2 = var2.PENDING;
        var5[var4] = var2;
        var2 = true;
        _closure1_slot14 = var2;
        return var1;
    };
    var2['SAFETY_HUB_FETCH_CLASSIFICATION_START'] = var10;
    var10 = function handleFetchClassificationSuccess(arg1) {
        var2 = arg1;
        var1 = var2.classification;
        var6 = var2.accountStanding;
        var5 = var2.isDsaEligible;
        var3 = var2.username;
        var4 = var2.isAppealEligible;
        var8 = _closure1_slot11;
        var7 = var1.id;
        var8[var7] = var1;
        var9 = _closure1_slot12;
        var8 = var1.id;
        var10 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 6;
        var7 = var7[var1];
        var1 = undefined;
        var7 = var10.bind(var1)(var7);
        var7 = var7.ClassificationRequestState;
        var7 = var7.SUCCESS;
        var9[var8] = var7;
        _closure1_slot13 = var6;
        var6 = false;
        _closure1_slot14 = var6;
        var6 = null;
        _closure1_slot16 = var6;
        _closure1_slot18 = var5;
        _closure1_slot19 = var4;
        var4 = true;
        _closure1_slot15 = var4;
        _closure1_slot25 = var3;
        return var1;
    };
    var2['SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS'] = var10;
    var10 = function handleFetchClassificationFailure(arg1) {
        var2 = arg1;
        var1 = var2.error;
        var6 = var2.classificationId;
        var2 = false;
        _closure1_slot14 = var2;
        _closure1_slot16 = var1;
        var5 = _closure1_slot12;
        var7 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 6;
        var4 = var4[var1];
        var1 = undefined;
        var4 = var7.bind(var1)(var4);
        var4 = var4.ClassificationRequestState;
        var4 = var4.FAILED;
        var5[var6] = var4;
        _closure1_slot15 = var2;
        return var1;
    };
    var2['SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE'] = var10;
    var10 = function handleAppealOpen(arg1) {
        var1 = arg1;
        var2 = var1.classificationId;
        _closure1_slot17 = var2;
        var1 = undefined;
        return var1;
    };
    var2['SAFETY_HUB_APPEAL_OPEN'] = var10;
    var10 = function handleAppealClose() {
        var1 = null;
        _closure1_slot17 = var1;
        var1 = _closure1_slot9;
        var1 = var1.DIDNT_VIOLATE_POLICY;
        _closure1_slot23 = var1;
        var1 = '';
        _closure1_slot24 = var1;
        var1 = undefined;
        return var1;
    };
    var2['SAFETY_HUB_APPEAL_CLOSE'] = var10;
    var10 = function handleAppealSignalSelect(arg1) {
        var1 = arg1;
        var2 = var1.signal;
        _closure1_slot23 = var2;
        var1 = undefined;
        return var1;
    };
    var2['SAFETY_HUB_APPEAL_SIGNAL_SELECT'] = var10;
    var10 = function handleAppealSignalCustomInputChange(arg1) {
        var1 = arg1;
        var2 = var1.userInput;
        _closure1_slot24 = var2;
        var1 = undefined;
        return var1;
    };
    var2['SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE'] = var10;
    var10 = function handleSafetyHubRequestReviewStart(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var3 = null;
            if(!(var2 != var3)) { _fun0004_ip = 26; continue _fun0004 }
 9:
            var4 = true;
            _closure1_slot21 = var4;
            _closure1_slot22 = var3;
            var1 = undefined;
            return var1;
 26:
            var5 = "Cannot destructure 'undefined' or 'null'.";
            var6 = var2;
            var1 = throwTypeError(var6, var5);
            var1 = undefined;
            throw var1;
        }
    };
    var2['SAFETY_HUB_REQUEST_REVIEW_START'] = var10;
    var10 = function handleSafetyHubRequestReviewSuccess(arg1) {
        var1 = arg1;
        var3 = var1.classificationId;
        var2 = false;
        _closure1_slot21 = var2;
        var2 = null;
        _closure1_slot22 = var2;
        var2 = _closure1_slot11;
        var3 = var2[var3];
        var2 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 6;
        var4 = var4[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var4 = var4.AppealStatusType;
        var4 = var4.REVIEW_PENDING;
        var2['status'] = var4;
        var3['appeal_status'] = var2;
        return var1;
    };
    var2['SAFETY_HUB_REQUEST_REVIEW_SUCCESS'] = var10;
    var10 = function handleSafetyHubRequestReviewFailure(arg1) {
        var1 = arg1;
        var2 = var1.error;
        var3 = false;
        _closure1_slot21 = var3;
        _closure1_slot22 = var2;
        var1 = undefined;
        return var1;
    };
    var2['SAFETY_HUB_REQUEST_REVIEW_FAILURE'] = var10;
    var10 = function handleSafetyHubRequestAgeVerificationStart(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0005_ip = 34; continue _fun0005 }
 9:
            var4 = '';
            _closure1_slot26 = var4;
            _closure1_slot28 = var1;
            var1 = true;
            _closure1_slot29 = var1;
            var1 = undefined;
            return var1;
 34:
            var5 = "Cannot destructure 'undefined' or 'null'.";
            var6 = var2;
            var1 = throwTypeError(var6, var5);
            var1 = undefined;
            throw var1;
        }
    };
    var2['SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START'] = var10;
    var10 = function handleSafetyHubRequestAgeVerificationSuccess(arg1) {
        var1 = arg1;
        var1 = var1.verificationWebviewUrl;
        _closure1_slot26 = var1;
        var1 = null;
        _closure1_slot28 = var1;
        var1 = false;
        _closure1_slot29 = var1;
        var1 = undefined;
        return var1;
    };
    var2['SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS'] = var10;
    var10 = function handleSafetyHubRequestAgeVerificationFailure(arg1) {
        var1 = arg1;
        var1 = var1.error;
        var3 = '';
        _closure1_slot26 = var3;
        _closure1_slot28 = var1;
        var1 = false;
        _closure1_slot29 = var1;
        var1 = undefined;
        return var1;
    };
    var2['SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE'] = var10;
    var2['SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN'] = var9;
    var2['SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE'] = var9;
    var9 = function handleSafetyHubAutomatedUnderageAppealSubmitSuccessAction(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0006_ip = 125; continue _fun0006 }
 9:
            var1 = _closure1_slot8;
            var1 = var1.LOADING;
            _closure1_slot30 = var1;
            var8 = _closure1_slot11;
            var3 = 6;
            var1 = undefined;
            for(var4 in var8)
 43:
            {
 52:
                var11 = var4;
                var10 = _closure1_slot11;
                var10 = var10[var11];
                var10 = var10.is_coppa;
                if(!var10) { _fun0006_ip = 43; continue _fun0006 }
 72:
                var10 = _closure1_slot11;
                var11 = var10[var11];
                var10 = {};
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var3];
                var12 = var13.bind(var1)(var12);
                var12 = var12.AppealStatusType;
                var12 = var12.REVIEW_PENDING;
                var10['status'] = var12;
                var11['appeal_status'] = var10;
                _fun0006_ip = 43; continue _fun0006;
            }
 123:
            return var1;
 125:
            var14 = "Cannot destructure 'undefined' or 'null'.";
            var15 = var2;
            var1 = throwTypeError(var15, var14);
            var1 = undefined;
            throw var1;
        }
    };
    var2['SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS'] = var9;
    var9 = function handleSafetyHubAgeVerificationStartPoll(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg1;
            var3 = null;
            if(!(var2 != var3)) { _fun0007_ip = 34; continue _fun0007 }
 9:
            var4 = _closure1_slot8;
            var4 = var4.LOADING;
            _closure1_slot30 = var4;
            _closure1_slot31 = var3;
            var1 = undefined;
            return var1;
 34:
            var5 = "Cannot destructure 'undefined' or 'null'.";
            var6 = var2;
            var1 = throwTypeError(var6, var5);
            var1 = undefined;
            throw var1;
        }
    };
    var2['SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL'] = var9;
    var9 = function handleSafetyHubCheckAgeVerificationStart(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0008_ip = 49; continue _fun0008 }
 9:
            var4 = _closure1_slot8;
            var4 = var4.LOADING;
            _closure1_slot30 = var4;
            _closure1_slot31 = var1;
            var4 = _closure1_slot27;
            var1 = 1;
            var1 = var4 + var1;
            _closure1_slot27 = var1;
            var1 = undefined;
            return var1;
 49:
            var5 = "Cannot destructure 'undefined' or 'null'.";
            var6 = var2;
            var1 = throwTypeError(var6, var5);
            var1 = undefined;
            throw var1;
        }
    };
    var2['SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START'] = var9;
    var9 = function handleSafetyHubCheckAgeVerificationCheckSuccess(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var1 = var1.success;
            if(var1) { _fun0009_ip = 51; continue _fun0009 }
 15:
            var3 = _closure1_slot27;
            var1 = _closure1_slot10;
            if(!(!(var3 < var1))) { _fun0009_ip = 39; continue _fun0009 }
 27:
            var1 = _closure1_slot8;
            var1 = var1.FAILURE;
            _fun0009_ip = 49; continue _fun0009;
 39:
            var3 = _closure1_slot8;
            var1 = var3.LOADING;
 49:
            _fun0009_ip = 61; continue _fun0009;
 51:
            var3 = _closure1_slot8;
            var1 = var3.SUCCESS;
 61:
            _closure1_slot30 = var1;
            var1 = null;
            _closure1_slot31 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS'] = var9;
    var9 = function handleSafetyHubCheckAgeVerificationFailure(arg1) {
        var1 = arg1;
        var2 = var1.error;
        var3 = _closure1_slot8;
        var3 = var3.ERROR;
        _closure1_slot30 = var3;
        _closure1_slot31 = var2;
        var1 = undefined;
        return var1;
    };
    var2['SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE'] = var9;
    var4 = function reset() {
        var1 = false;
        _closure1_slot14 = var1;
        var1 = {};
        _closure1_slot11 = var1;
        var2 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 6;
        var4 = var4[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var4 = var4.AccountStandingState;
        var4 = var4.ALL_GOOD;
        var2['state'] = var4;
        _closure1_slot13 = var2;
        var2 = null;
        _closure1_slot17 = var2;
        var2 = _closure1_slot9;
        var2 = var2.DIDNT_VIOLATE_POLICY;
        _closure1_slot23 = var2;
        var2 = '';
        _closure1_slot24 = var2;
        var2 = new Array(0);
        _closure1_slot20 = var2;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var17 = var4;
    var15 = var2;
    var2 = new var17[var8](var16, var15, var14);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safety_hub/SafetyHubStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();