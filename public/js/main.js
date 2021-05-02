/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/app/app.tsx":
/*!************************************!*\
  !*** ./src/components/app/app.tsx ***!
  \************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);

Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var react_hot_loader_1 = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
var movie_details_1 = __webpack_require__(/*! ../movie-details/movie-details */ "./src/components/movie-details/movie-details.tsx");
var search_movies_page_1 = __webpack_require__(/*! ../search-movies-page/search-movies-page */ "./src/components/search-movies-page/search-movies-page.tsx");
var custom_alert_1 = __webpack_require__(/*! ../custom-alert/custom-alert */ "./src/components/custom-alert/custom-alert.tsx");
var custom_loader_1 = __webpack_require__(/*! ../custom-loader/custom-loader */ "./src/components/custom-loader/custom-loader.tsx");
var error_page_1 = __webpack_require__(/*! ../error-page/error-page */ "./src/components/error-page/error-page.tsx");
var App = function (_a) {
    var Router = _a.Router, location = _a.location, context = _a.context;
    return React.createElement(React.Fragment, null,
        React.createElement(custom_alert_1.CustomAlert, null),
        React.createElement(custom_loader_1.CustomLoader, null),
        React.createElement(Router, { location: location, context: context },
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/" },
                    React.createElement(search_movies_page_1.default, null)),
                React.createElement(react_router_dom_1.Route, { path: "/search" },
                    React.createElement(search_movies_page_1.default, null)),
                React.createElement(react_router_dom_1.Route, { path: "/film/:id" },
                    React.createElement(movie_details_1.default, null)),
                React.createElement(react_router_dom_1.Route, { path: "*" },
                    React.createElement(error_page_1.ErrorPage, null)))));
};
exports.default = react_hot_loader_1.hot(module)(App);


/***/ }),

/***/ "./src/components/custom-alert/custom-alert.tsx":
/*!******************************************************!*\
  !*** ./src/components/custom-alert/custom-alert.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomAlert = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var lab_1 = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var selectors_1 = __webpack_require__(/*! ../../redux/selectors */ "./src/redux/selectors.ts");
var actions_1 = __webpack_require__(/*! ../../redux/actions */ "./src/redux/actions.ts");
__webpack_require__(/*! ./custom-alert.scss */ "./src/components/custom-alert/custom-alert.scss");
var CustomAlert = function () {
    var alertMessage = react_redux_1.useSelector(selectors_1.selectAlertMessage);
    var alertType = react_redux_1.useSelector(selectors_1.selectAlertType);
    var dispatch = react_redux_1.useDispatch();
    var handleAlertClose = function () {
        dispatch(actions_1.setAlert({
            type: null,
            message: null
        }));
    };
    return (alertMessage
        ? React.createElement(lab_1.Alert, { severity: alertType, className: "custom-alert", onClose: handleAlertClose }, alertMessage)
        : null);
};
exports.CustomAlert = CustomAlert;


/***/ }),

/***/ "./src/components/custom-loader/custom-loader.tsx":
/*!********************************************************!*\
  !*** ./src/components/custom-loader/custom-loader.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomLoader = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var selectors_1 = __webpack_require__(/*! ../../redux/selectors */ "./src/redux/selectors.ts");
__webpack_require__(/*! ./custom-loader.scss */ "./src/components/custom-loader/custom-loader.scss");
var CustomLoader = function () {
    var isLoading = react_redux_1.useSelector(selectors_1.selectIsLoading);
    return isLoading
        ? React.createElement("div", { className: "spinner-container" },
            React.createElement("div", { className: "spinner-box" },
                React.createElement("div", { className: "configure-border-1" },
                    React.createElement("div", { className: "configure-core" })),
                React.createElement("div", { className: "configure-border-2" },
                    React.createElement("div", { className: "configure-core" }))))
        : null;
};
exports.CustomLoader = CustomLoader;


/***/ }),

/***/ "./src/components/delete-movie-confirm/delete-movie-confirm.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/delete-movie-confirm/delete-movie-confirm.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
__webpack_require__(/*! ./delete-movie-confirm.scss */ "./src/components/delete-movie-confirm/delete-movie-confirm.scss");
var DeleteMovieConfirm = function (props) {
    return React.createElement("div", { className: "delete-movie-confirm" },
        React.createElement("h1", null, "DELETE MOVIE"),
        React.createElement("p", null, "Are you sure you want to delete this movie?"),
        React.createElement("button", { className: "button-primary delete-movie__btn", onClick: function () { return props.onConfirm(); } }, "CONFIRM"));
};
exports.default = DeleteMovieConfirm;


/***/ }),

/***/ "./src/components/error-boundary/error-boundary.tsx":
/*!**********************************************************!*\
  !*** ./src/components/error-boundary/error-boundary.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
__webpack_require__(/*! ./error-boundary.scss */ "./src/components/error-boundary/error-boundary.scss");
var ErrorBoundary = (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hasError: false
        };
        return _this;
    }
    ErrorBoundary.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    ErrorBoundary.prototype.render = function () {
        if (this.state.hasError) {
            return (React.createElement("div", { className: "error-message" },
                React.createElement("h1", null, "Something went wrong.")));
        }
        return this.props.children;
    };
    return ErrorBoundary;
}(React.Component));
exports.default = ErrorBoundary;


/***/ }),

/***/ "./src/components/error-page/error-page.tsx":
/*!**************************************************!*\
  !*** ./src/components/error-page/error-page.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErrorPage = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var use_router_1 = __webpack_require__(/*! ../../hooks/use-router */ "./src/hooks/use-router.ts");
var footer_1 = __webpack_require__(/*! ../footer/footer */ "./src/components/footer/footer.tsx");
var logo_1 = __webpack_require__(/*! ../logo/logo */ "./src/components/logo/logo.tsx");
__webpack_require__(/*! ./error-page.scss */ "./src/components/error-page/error-page.scss");
var ErrorPage = function () {
    var router = use_router_1.default();
    var onClickBack = function () {
        router.history.push('/');
    };
    return (React.createElement("div", { className: "app-container" },
        React.createElement("div", { className: "app-container__inner" },
            React.createElement("div", { className: "error-header" },
                React.createElement(logo_1.default, null)),
            React.createElement("div", { className: "error-main" },
                React.createElement("h1", null, "Page Not Found"),
                React.createElement("p", { className: "error-type" }, "404"),
                React.createElement("button", { className: "button-secondary", onClick: onClickBack }, "GO BACK TO HOME"))),
        React.createElement(footer_1.default, null)));
};
exports.ErrorPage = ErrorPage;


/***/ }),

/***/ "./src/components/filter-bar/filter-bar.tsx":
/*!**************************************************!*\
  !*** ./src/components/filter-bar/filter-bar.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var MenuItem_1 = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var movies_list_1 = __webpack_require__(/*! ../../models/enums/movies-list */ "./src/models/enums/movies-list.ts");
var actions_1 = __webpack_require__(/*! ../../redux/actions */ "./src/redux/actions.ts");
var selectors_1 = __webpack_require__(/*! ../../redux/selectors */ "./src/redux/selectors.ts");
__webpack_require__(/*! ./filter-bar.scss */ "./src/components/filter-bar/filter-bar.scss");
var FilterBar = function (props) {
    var dispatch = react_redux_1.useDispatch();
    var filter = react_redux_1.useSelector(selectors_1.selectFilterParam);
    var sortOrder = react_redux_1.useSelector(selectors_1.selectSortOrderParam) || movies_list_1.SortingDirectionEnum.desc;
    var defaultSortBy = props.notEmpty ? movies_list_1.SortingFieldsEnum.rating : '';
    var filterKey = filter && movies_list_1.FILTER_FIELDS[filter] && movies_list_1.FILTER_FIELDS[filter].key || props.notEmpty ? movies_list_1.FILTER_FIELDS[movies_list_1.FilterFieldEnum.all].key : '';
    var _a = react_1.useState(filterKey || ''), activeTabId = _a[0], setActiveTabId = _a[1];
    var _b = react_1.useState(sortOrder), sortDirection = _b[0], setSortDirection = _b[1];
    var onClickFilterItem = function (event) {
        var target = event.target;
        var targetId = target && target.id;
        var name = target.name;
        setActiveTabId(targetId);
        var filterName = name === movies_list_1.FilterFieldEnum.all ? '' : name;
        if (props.onFilterChange) {
            props.onFilterChange(filterName);
            return;
        }
        dispatch(actions_1.setFilter(filterName));
    };
    var onClickToggleSortDirection = function () {
        setSortDirection(function (prevSortDirection) { return prevSortDirection === movies_list_1.SortingDirectionEnum.asc
            ? movies_list_1.SortingDirectionEnum.desc
            : movies_list_1.SortingDirectionEnum.asc; });
    };
    react_1.useEffect(function () {
        if (sortDirection && sortDirection !== sortOrder) {
            dispatch(actions_1.setSortOrder(sortDirection));
        }
    }, [sortDirection]);
    var handleSortSelection = function (event) {
        var target = event.target;
        var value = target.value;
        dispatch(actions_1.setSortBy(value));
    };
    return (React.createElement("div", { className: "filter-tab" },
        React.createElement("div", { className: "filter-tab__filters" }, Object.values(movies_list_1.FILTER_FIELDS).map(function (filter) {
            return React.createElement("button", { className: "filter-tab__item button-dark " + (filter.key === activeTabId ? 'active' : ''), key: filter.key, id: filter.key, name: filter.name, onClick: onClickFilterItem }, filter.name.toUpperCase());
        })),
        React.createElement("div", { className: "filter-tab__sort" },
            React.createElement("p", { className: "filter-tab__sort_lbl" }, "SORT BY"),
            React.createElement(core_1.Select, { className: "filter-tab__sort_btn button-dark", defaultValue: defaultSortBy, displayEmpty: true, onChange: handleSortSelection },
                React.createElement(MenuItem_1.default, { value: "", className: "button-dark", disabled: true }, "Select..."),
                Object.values(movies_list_1.SORTING_FIELDS).map(function (sorter) {
                    return React.createElement(MenuItem_1.default, { value: sorter.name, className: "button-dark", key: sorter.key }, sorter.label.toUpperCase());
                })),
            React.createElement("button", { className: "filter-tab__sort_btn button-dark filter-tab__sort_direction", onClick: onClickToggleSortDirection },
                React.createElement("div", { className: "filter-tab__sort_direction_" + sortOrder })))));
};
exports.default = FilterBar;


/***/ }),

/***/ "./src/components/footer/footer.tsx":
/*!******************************************!*\
  !*** ./src/components/footer/footer.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var logo_1 = __webpack_require__(/*! ../logo/logo */ "./src/components/logo/logo.tsx");
__webpack_require__(/*! ./footer.scss */ "./src/components/footer/footer.scss");
function Footer() {
    return (React.createElement("footer", { className: "footer" },
        React.createElement(logo_1.default, null)));
}
exports.default = Footer;


/***/ }),

/***/ "./src/components/header/header.tsx":
/*!******************************************!*\
  !*** ./src/components/header/header.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
__webpack_require__(/*! ./header.scss */ "./src/components/header/header.scss");
function Header(props) {
    return (React.createElement("header", { className: "header" }, props.children));
}
exports.default = Header;


/***/ }),

/***/ "./src/components/input-text-field/input-text-field.tsx":
/*!**************************************************************!*\
  !*** ./src/components/input-text-field/input-text-field.tsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputTextField = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var formik_1 = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
__webpack_require__(/*! ./input-text-field.scss */ "./src/components/input-text-field/input-text-field.scss");
var InputTextField = function (_a) {
    var label = _a.label, disabled = _a.disabled, props = __rest(_a, ["label", "disabled"]);
    var _b = formik_1.useField(props), field = _b[0], meta = _b[1], helpers = _b[2];
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { htmlFor: props.name, className: "form-label" }, label),
        React.createElement("input", __assign({ className: "form-input" + (!disabled && meta.touched && meta.error ? ' invalid-field' : '') + (disabled ? ' disabled' : '') }, field, props)),
        meta.touched && meta.error && !disabled ?
            React.createElement("div", { className: "validation-error-diplay" }, meta.error)
            : null));
};
exports.InputTextField = InputTextField;


/***/ }),

/***/ "./src/components/logo/logo.tsx":
/*!**************************************!*\
  !*** ./src/components/logo/logo.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
__webpack_require__(/*! ./logo.scss */ "./src/components/logo/logo.scss");
function Logo() {
    return (React.createElement("p", { className: "logo" },
        React.createElement("span", { className: "logo__span" }, "netflix"),
        "roulette"));
}
exports.default = Logo;


/***/ }),

/***/ "./src/components/main/main.tsx":
/*!**************************************!*\
  !*** ./src/components/main/main.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
__webpack_require__(/*! ./main.scss */ "./src/components/main/main.scss");
var Main = function (props) {
    return React.createElement("main", { className: "main-container" }, props.children);
};
exports.default = Main;


/***/ }),

/***/ "./src/components/modal/modal.tsx":
/*!****************************************!*\
  !*** ./src/components/modal/modal.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Close_1 = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
var footer_1 = __webpack_require__(/*! ../footer/footer */ "./src/components/footer/footer.tsx");
var logo_1 = __webpack_require__(/*! ../logo/logo */ "./src/components/logo/logo.tsx");
__webpack_require__(/*! ./modal.scss */ "./src/components/modal/modal.scss");
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleCloseClick = function () {
            _this.props.onModalClose();
        };
        return _this;
    }
    Modal.prototype.render = function () {
        return (React.createElement("div", { className: "modal-container" },
            React.createElement("div", { className: "modal-header" },
                React.createElement(logo_1.default, null)),
            React.createElement("div", { className: "modal" },
                React.createElement("button", { className: "button-dark modal__close_btn", onClick: this.handleCloseClick },
                    React.createElement(Close_1.default, { fontSize: "large" })),
                React.createElement("div", { className: "modal__children_container" }, this.props.children)),
            React.createElement("div", { className: "spacer" }),
            React.createElement(footer_1.default, null)));
    };
    return Modal;
}(React.Component));
exports.default = Modal;


/***/ }),

/***/ "./src/components/movie-card/movie-card.tsx":
/*!**************************************************!*\
  !*** ./src/components/movie-card/movie-card.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Close_1 = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
var MoreVert_1 = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
__webpack_require__(/*! ./movie-card.scss */ "./src/components/movie-card/movie-card.scss");
var modal_1 = __webpack_require__(/*! ../modal/modal */ "./src/components/modal/modal.tsx");
var movie_details_form_1 = __webpack_require__(/*! ../movie-details-form/movie-details-form */ "./src/components/movie-details-form/movie-details-form.tsx");
var delete_movie_confirm_1 = __webpack_require__(/*! ../delete-movie-confirm/delete-movie-confirm */ "./src/components/delete-movie-confirm/delete-movie-confirm.tsx");
var use_toggle_1 = __webpack_require__(/*! ../../hooks/use-toggle */ "./src/hooks/use-toggle.ts");
var initial_movie_record_1 = __webpack_require__(/*! ../../models/initial-movie-record */ "./src/models/initial-movie-record.ts");
var use_router_1 = __webpack_require__(/*! ../../hooks/use-router */ "./src/hooks/use-router.ts");
var actions_1 = __webpack_require__(/*! ../../redux/actions */ "./src/redux/actions.ts");
var DEFAULT_SRC = '../../assets/images/no-image.png';
var MovieCard = function (props) {
    var dispatch = react_redux_1.useDispatch();
    var movie = react_1.useState(initial_movie_record_1.InitialMovieRecord.mapMovieRecordToInitialValues(props.movie))[0];
    var _a = use_toggle_1.default(), isMenuVisible = _a[0], toggleIsMenuVisible = _a[1];
    var _b = use_toggle_1.default(), isModalVisible = _b[0], toggleIsModalVisible = _b[1];
    var _c = react_1.useState(false), shouldDeleteMovie = _c[0], setShouldDeleteMovie = _c[1];
    var router = use_router_1.default();
    var onClickMenuBtn = function (e) {
        toggleIsMenuVisible();
        e.stopPropagation();
    };
    var onClickCloseMenuBtn = function (e) {
        toggleIsMenuVisible();
        e.stopPropagation();
    };
    var onClickEditMenuBtn = function (e) {
        e.stopPropagation();
        toggleIsMenuVisible();
        toggleIsModalVisible();
    };
    var onClickDeleteMenuBtn = function (e) {
        e.stopPropagation();
        toggleIsMenuVisible();
        toggleIsModalVisible();
        setShouldDeleteMovie(true);
    };
    var handleMovieDelete = function () {
        toggleIsModalVisible();
        setShouldDeleteMovie(false);
        props.onDeleteMovie(movie.id);
    };
    var handleFormSubmit = function (movieRecord) {
        if (!movieRecord) {
            return;
        }
        toggleIsModalVisible();
        props.onUpdateMovie(initial_movie_record_1.InitialMovieRecord.mapInitialValuesToMovieRecord(props.movie, movieRecord));
    };
    var handleMovieCardClick = function (e) {
        var target = e.target;
        if (isModalVisible || target.id === 'menu-button') {
            return;
        }
        dispatch(actions_1.setQueryParams(null));
        router.push("/film/" + movie.id);
    };
    var addDefaultSrc = function (event) {
        event.target.src = DEFAULT_SRC;
    };
    return (React.createElement("div", { className: "movie-card", key: movie.id, onClick: handleMovieCardClick },
        React.createElement("img", { className: "movie-image", src: movie.poster_path || DEFAULT_SRC, alt: "poster", onError: addDefaultSrc }),
        React.createElement("div", { className: "movie-info" },
            React.createElement("p", { className: "movie-title" }, movie.title),
            React.createElement("p", null, movie.genres.sort().join(', ')),
            React.createElement("p", { className: "movie-release-date" }, movie.release_date.getFullYear())),
        React.createElement("button", { className: "menu-button", id: "menu-button", onClick: onClickMenuBtn },
            React.createElement(MoreVert_1.default, { fontSize: "large" })),
        isMenuVisible
            && React.createElement("div", { className: "menu-display" },
                React.createElement("button", { className: "menu-display__close button-dark", onClick: onClickCloseMenuBtn },
                    React.createElement(Close_1.default, { fontSize: "small" })),
                React.createElement("button", { className: "button-dark", onClick: onClickEditMenuBtn }, "Edit"),
                React.createElement("button", { className: "button-dark", onClick: onClickDeleteMenuBtn }, "Delete")),
        isModalVisible
            && React.createElement(modal_1.default, { onModalClose: toggleIsModalVisible }, shouldDeleteMovie
                ? React.createElement(delete_movie_confirm_1.default, { onConfirm: handleMovieDelete })
                : React.createElement(movie_details_form_1.default, { movieRecord: movie, isEdit: true, onFormSubmit: handleFormSubmit }))));
};
exports.default = MovieCard;
MovieCard.defaultProps = {
    movie: {
        'id': 111111,
        'title': 'No Title Provided',
        'tagline': 'No tagline provided',
        'vote_average': 0,
        'vote_count': 0,
        'release_date': '01-01-2021',
        'poster_path': '',
        'overview': 'No overview provided',
        'budget': 0,
        'revenue': 0,
        'genres': ['No genre'],
        'runtime': 0
    }
};


/***/ }),

/***/ "./src/components/movie-details-form/movie-details-form.tsx":
/*!******************************************************************!*\
  !*** ./src/components/movie-details-form/movie-details-form.tsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
__webpack_require__(/*! ./movie-details-form.scss */ "./src/components/movie-details-form/movie-details-form.scss");
var date_fns_1 = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
var pickers_1 = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
var MenuItem_1 = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
var ListItemText_1 = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
var Select_1 = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
var Checkbox_1 = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
var core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var formik_1 = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
var Yup = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
var movie_genre_1 = __webpack_require__(/*! ../../models/enums/movie-genre */ "./src/models/enums/movie-genre.ts");
var input_text_field_1 = __webpack_require__(/*! ../input-text-field/input-text-field */ "./src/components/input-text-field/input-text-field.tsx");
var ITEM_HEIGHT = 48;
var ITEM_PADDING_TOP = 8;
var MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
var MOVIE_SCHEMA = Yup.object().shape({
    id: Yup.number(),
    title: Yup.string()
        .required('Title is required'),
    poster_path: Yup.string()
        .url('Invalid URL')
        .required('URL is required'),
    release_date: Yup
        .date()
        .nullable()
        .required('Release Date is required'),
    overview: Yup.string()
        .required('Overview is required'),
    genres: Yup.array()
        .defined()
        .min(1, 'Choose at least one genre')
        .required(),
    runtime: Yup.number()
        .integer('Runtime must be an integer')
        .min(0, 'Runtime must not be less than 0')
        .required('Runtime is required')
});
var MovieDetailsForm = function (props) {
    var initialValues = __assign({}, props.movieRecord);
    return initialValues &&
        React.createElement("div", { className: "movie-details" },
            React.createElement("h1", null, (props.isEdit ? 'EDIT' : 'ADD') + " MOVIE"),
            React.createElement(formik_1.Formik, { initialValues: initialValues, validationSchema: MOVIE_SCHEMA, onSubmit: function (values) {
                    props.onFormSubmit(values);
                }, validateOnMount: true }, function (_a) {
                var handleSubmit = _a.handleSubmit, handleReset = _a.handleReset, handleChange = _a.handleChange, setFieldTouched = _a.setFieldTouched, isValid = _a.isValid, errors = _a.errors, touched = _a.touched, values = _a.values;
                return React.createElement(formik_1.Form, { className: "movie-details__form", onSubmit: handleSubmit, autoComplete: "off" },
                    props.isEdit && React.createElement(input_text_field_1.InputTextField, { name: "title", type: "text", value: values.id, disabled: true, label: "ID" }),
                    React.createElement(input_text_field_1.InputTextField, { name: "title", type: "text", value: values.title, placeholder: "Title here", onChange: handleChange, label: "TITLE" }),
                    React.createElement("label", { htmlFor: "release_date", className: "form-label" }, "RELEASE DATE"),
                    React.createElement(pickers_1.MuiPickersUtilsProvider, { utils: date_fns_1.default },
                        React.createElement(pickers_1.KeyboardDatePicker, { name: "release_date", disableToolbar: true, variant: "inline", format: "MM/dd/yyyy", margin: "normal", id: "date-picker-inline", value: values.release_date, onChange: function (e) { return handleChange({ target: {
                                    value: e,
                                    name: 'release_date'
                                } }); }, KeyboardButtonProps: {
                                'aria-label': 'change date',
                            }, placeholder: "Select Date", className: "" + (errors.release_date ? 'invalid-field' : '') })),
                    errors.release_date && React.createElement("p", { className: "validation-error-diplay" }, errors.release_date),
                    React.createElement(input_text_field_1.InputTextField, { name: "poster_path", type: "text", value: values.poster_path, placeholder: "Movie URL here", onChange: handleChange, label: "MOVIE URL" }),
                    React.createElement("label", { htmlFor: "genres", className: "form-label" }, "GENRE"),
                    React.createElement(Select_1.default, { id: "genres", name: "genres", multiple: true, displayEmpty: true, value: values.genres, onChange: function (e) {
                            setFieldTouched('genres', true);
                            handleChange(e);
                        }, onBlur: function () { return setFieldTouched('genres', true); }, input: React.createElement(core_1.Input, { className: "form-input " + (errors.genres && touched.genres ? ' invalid-field' : '') }), renderValue: function (selected) {
                            if (selected.length === 0) {
                                return React.createElement("em", null, "Select Genre");
                            }
                            return selected.join(', ');
                        }, MenuProps: MenuProps, inputProps: { 'aria-label': 'Without label' } }, movie_genre_1.MOVIE_GENRES_LIST.map(function (genre) {
                        return React.createElement(MenuItem_1.default, { key: genre, value: genre },
                            React.createElement(Checkbox_1.default, { checked: values.genres.indexOf(genre) > -1 }),
                            React.createElement(ListItemText_1.default, { primary: genre }));
                    })),
                    errors.genres && touched.genres && React.createElement("p", { className: "validation-error-diplay" }, errors.genres),
                    React.createElement("label", { htmlFor: "overview", className: "form-label" }, "OVERVIEW"),
                    React.createElement(core_1.TextareaAutosize, { className: "form-input " + (errors.overview && touched.overview ? ' invalid-field' : ''), name: "overview", value: values.overview, placeholder: "Overview here", onChange: function (e) {
                            setFieldTouched('overview', true);
                            handleChange(e);
                        }, onBlur: function () { return setFieldTouched('overview', true); } }),
                    errors.overview && touched.overview && React.createElement("p", { className: "validation-error-diplay" }, errors.overview),
                    React.createElement(input_text_field_1.InputTextField, { name: "runtime", type: "number", value: values.runtime, placeholder: "Runtime here", onChange: handleChange, label: "RUNTIME" }),
                    React.createElement("div", { className: "movie-details__btns" },
                        React.createElement("button", { className: "button-secondary", type: "reset", onClick: handleReset }, "RESET"),
                        React.createElement("button", { className: "button-primary" + (!isValid ? ' button-invalid' : ''), type: "submit" }, "SUBMIT")));
            }));
};
exports.default = MovieDetailsForm;


/***/ }),

/***/ "./src/components/movie-details/movie-details.tsx":
/*!********************************************************!*\
  !*** ./src/components/movie-details/movie-details.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var use_router_1 = __webpack_require__(/*! ../../hooks/use-router */ "./src/hooks/use-router.ts");
var movies_list_1 = __webpack_require__(/*! ../../models/enums/movies-list */ "./src/models/enums/movies-list.ts");
var movie_query_params_1 = __webpack_require__(/*! ../../models/movie-query-params */ "./src/models/movie-query-params.ts");
var actions_1 = __webpack_require__(/*! ../../redux/actions */ "./src/redux/actions.ts");
var selectors_1 = __webpack_require__(/*! ../../redux/selectors */ "./src/redux/selectors.ts");
var thunk_1 = __webpack_require__(/*! ../../redux/thunk */ "./src/redux/thunk.ts");
var error_boundary_1 = __webpack_require__(/*! ../error-boundary/error-boundary */ "./src/components/error-boundary/error-boundary.tsx");
var filter_bar_1 = __webpack_require__(/*! ../filter-bar/filter-bar */ "./src/components/filter-bar/filter-bar.tsx");
var footer_1 = __webpack_require__(/*! ../footer/footer */ "./src/components/footer/footer.tsx");
var header_1 = __webpack_require__(/*! ../header/header */ "./src/components/header/header.tsx");
var main_1 = __webpack_require__(/*! ../main/main */ "./src/components/main/main.tsx");
var movie_info_header_1 = __webpack_require__(/*! ../movie-info-header/movie-info-header */ "./src/components/movie-info-header/movie-info-header.tsx");
var movies_list_2 = __webpack_require__(/*! ../movies-list/movies-list */ "./src/components/movies-list/movies-list.tsx");
function MovieDetails() {
    var router = use_router_1.default();
    var dispatch = react_redux_1.useDispatch();
    var movieId = router.query.id;
    var selectedMovie = react_redux_1.useSelector(selectors_1.selectMovie);
    var selectedMovieId = react_redux_1.useSelector(selectors_1.selectMovieId);
    var movieNotFound = react_redux_1.useSelector(selectors_1.selectMovieNotFound);
    var movieQueryParams = react_redux_1.useSelector(selectors_1.selectMovieQueryParams);
    React.useEffect(function () {
        if (!movieId) {
            return;
        }
        dispatch(actions_1.setQueryParams(new movie_query_params_1.MovieQueryParamsDict({
            sortBy: movies_list_1.SortingFieldsEnum.rating,
            sortOrder: movies_list_1.SortingDirectionEnum.desc,
            search: '',
            searchBy: 'genres',
            filter: movies_list_1.FilterFieldEnum.all,
            offset: '',
            limit: '24'
        })));
        dispatch(thunk_1.getMovieThunk(movieId));
    }, [movieId]);
    React.useEffect(function () {
        if (!movieNotFound) {
            return;
        }
        dispatch(actions_1.setMovieNotFound(false));
        dispatch(actions_1.setQueryParams(null));
        router.history.push('/error');
    }, [movieNotFound]);
    React.useEffect(function () {
        if (!selectedMovieId) {
            return;
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        dispatch(actions_1.setFilter(selectedMovie.genres.join(', ') || ''));
    }, [selectedMovieId]);
    React.useEffect(function () {
        if (movieQueryParams) {
            dispatch(thunk_1.getMoviesThunk(movieQueryParams));
        }
    }, [movieQueryParams]);
    var onFilterChange = function (filter) {
        var filteredGenres = [];
        if (selectedMovie && selectedMovie.genres) {
            if (filter) {
                filteredGenres = Array.from(new Set(__spreadArrays(selectedMovie.genres, filter.split(', '))));
            }
            else {
                filteredGenres = __spreadArrays(selectedMovie.genres);
            }
        }
        dispatch(actions_1.setFilter(filteredGenres.join(', ')));
    };
    var onSearchClick = function () {
        dispatch(actions_1.setMovies([]));
        dispatch(actions_1.setQueryParams(null));
        router.history.push('/');
    };
    return (React.createElement("div", { className: "app-container" },
        React.createElement(error_boundary_1.default, null,
            React.createElement("div", { className: "app-container__inner" },
                React.createElement(header_1.default, null, selectedMovie && React.createElement(movie_info_header_1.default, { movie: selectedMovie, onSearchClick: onSearchClick })),
                React.createElement(main_1.default, null,
                    React.createElement(filter_bar_1.default, { onFilterChange: onFilterChange, notEmpty: true }),
                    React.createElement(movies_list_2.default, null)))),
        React.createElement(footer_1.default, null)));
}
exports.default = MovieDetails;
;


/***/ }),

/***/ "./src/components/movie-info-header/movie-info-header.tsx":
/*!****************************************************************!*\
  !*** ./src/components/movie-info-header/movie-info-header.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Search_1 = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
var logo_1 = __webpack_require__(/*! ../logo/logo */ "./src/components/logo/logo.tsx");
__webpack_require__(/*! ./movie-info-header.scss */ "./src/components/movie-info-header/movie-info-header.scss");
var DEFAULT_SRC = '../../assets/images/no-image.png';
var MovieInfoHeader = function (_a) {
    var movie = _a.movie, onSearchClick = _a.onSearchClick;
    var addDefaultSrc = function (event) {
        event.target.src = DEFAULT_SRC;
    };
    return movie &&
        React.createElement("div", { className: "movie-info-header" },
            React.createElement("div", { className: "movie-info-header__top" },
                React.createElement(logo_1.default, null),
                React.createElement("button", { className: "search-button", onClick: onSearchClick },
                    React.createElement(Search_1.default, { className: "search-button__icon" }))),
            React.createElement("div", { className: "movie-info-header__container" },
                React.createElement("img", { src: movie.poster_path || DEFAULT_SRC, alt: movie.title + " poster", className: "movie-info__poster", onError: function (e) { return addDefaultSrc(e); } }),
                React.createElement("div", { className: "movie-info" },
                    React.createElement("div", { className: "movie-info__title" },
                        React.createElement("h1", { className: "movie-info__movie_title" }, movie.title),
                        React.createElement("div", { className: "movie-info__rating" }, movie.vote_average)),
                    React.createElement("p", null, movie.genres.sort().join(', ')),
                    React.createElement("div", { className: "movie-info__line" },
                        React.createElement("p", null, new Date(movie.release_date).getFullYear()),
                        React.createElement("p", null, movie.runtime + " min")),
                    React.createElement("p", null, movie.overview))));
};
exports.default = MovieInfoHeader;


/***/ }),

/***/ "./src/components/movies-list/movies-list.tsx":
/*!****************************************************!*\
  !*** ./src/components/movies-list/movies-list.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
__webpack_require__(/*! ./movies-list.scss */ "./src/components/movies-list/movies-list.scss");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var movie_card_1 = __webpack_require__(/*! ../movie-card/movie-card */ "./src/components/movie-card/movie-card.tsx");
var selectors_1 = __webpack_require__(/*! ../../redux/selectors */ "./src/redux/selectors.ts");
var thunk_1 = __webpack_require__(/*! ../../redux/thunk */ "./src/redux/thunk.ts");
function MoviesList() {
    var dispatch = react_redux_1.useDispatch();
    var moviesList = react_redux_1.useSelector(selectors_1.selectMovies);
    var movieQueryParams = react_redux_1.useSelector(selectors_1.selectMovieQueryParams);
    var handleDeleteMovie = function (id) {
        dispatch(thunk_1.deleteMovieThunk(id, movieQueryParams));
    };
    var handleUpdateMovie = function (movie) {
        dispatch(thunk_1.updateMovieThunk(movie, movieQueryParams));
    };
    return (Array.isArray(moviesList) && moviesList.length !== 0
        ? React.createElement(React.Fragment, null,
            React.createElement("p", { className: "movies-total" },
                React.createElement("span", { className: "movies-total__count" }, moviesList.length),
                " movies found."),
            React.createElement("div", { className: "movies-list" }, moviesList.map(function (movie) { return React.createElement(movie_card_1.default, { movie: movie, key: movie.id, onUpdateMovie: handleUpdateMovie, onDeleteMovie: handleDeleteMovie }); })))
        : React.createElement("div", { className: "movies-not-found-message" },
            React.createElement("p", null, "No Movies Found")));
}
exports.default = MoviesList;


/***/ }),

/***/ "./src/components/search-header/search-header.tsx":
/*!********************************************************!*\
  !*** ./src/components/search-header/search-header.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var logo_1 = __webpack_require__(/*! ../logo/logo */ "./src/components/logo/logo.tsx");
__webpack_require__(/*! ./search-header.scss */ "./src/components/search-header/search-header.scss");
var modal_1 = __webpack_require__(/*! ../modal/modal */ "./src/components/modal/modal.tsx");
var movie_details_form_1 = __webpack_require__(/*! ../movie-details-form/movie-details-form */ "./src/components/movie-details-form/movie-details-form.tsx");
var movie_1 = __webpack_require__(/*! ../../models/movie */ "./src/models/movie.ts");
var use_toggle_1 = __webpack_require__(/*! ../../hooks/use-toggle */ "./src/hooks/use-toggle.ts");
var initial_movie_record_1 = __webpack_require__(/*! ../../models/initial-movie-record */ "./src/models/initial-movie-record.ts");
function SearchHeader(props) {
    var _a = use_toggle_1.default(), isModalVisible = _a[0], toggleIsModalVisible = _a[1];
    var _b = React.useState(null), movie = _b[0], setMovie = _b[1];
    var onModalClose = function () {
        toggleIsModalVisible();
    };
    var handleAddClick = function () {
        setMovie(new initial_movie_record_1.InitialMovieRecord());
        toggleIsModalVisible();
    };
    var handleFormSubmit = function (movieRecord) {
        props.onAddMovie(new movie_1.MovieRecord(movieRecord));
        toggleIsModalVisible();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "search-header" },
            React.createElement("div", { className: "search-header__top" },
                React.createElement(logo_1.default, null),
                React.createElement("button", { className: "add-movie-btn", onClick: handleAddClick }, "+ ADD MOVIE")),
            React.createElement("h1", { className: "search-header__title" }, "FIND YOUR MOVIE"),
            props.children),
        isModalVisible
            && React.createElement(modal_1.default, { onModalClose: onModalClose },
                React.createElement(movie_details_form_1.default, { movieRecord: movie, isEdit: false, onFormSubmit: handleFormSubmit }))));
}
exports.default = SearchHeader;


/***/ }),

/***/ "./src/components/search-movies-page/search-movies-page.tsx":
/*!******************************************************************!*\
  !*** ./src/components/search-movies-page/search-movies-page.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var footer_1 = __webpack_require__(/*! ../footer/footer */ "./src/components/footer/footer.tsx");
var header_1 = __webpack_require__(/*! ../header/header */ "./src/components/header/header.tsx");
var search_header_1 = __webpack_require__(/*! ../search-header/search-header */ "./src/components/search-header/search-header.tsx");
var main_1 = __webpack_require__(/*! ../main/main */ "./src/components/main/main.tsx");
var error_boundary_1 = __webpack_require__(/*! ../error-boundary/error-boundary */ "./src/components/error-boundary/error-boundary.tsx");
var search_panel_1 = __webpack_require__(/*! ../search-panel/search-panel */ "./src/components/search-panel/search-panel.tsx");
var movies_list_1 = __webpack_require__(/*! ../movies-list/movies-list */ "./src/components/movies-list/movies-list.tsx");
var filter_bar_1 = __webpack_require__(/*! ../filter-bar/filter-bar */ "./src/components/filter-bar/filter-bar.tsx");
var thunk_1 = __webpack_require__(/*! ../../redux/thunk */ "./src/redux/thunk.ts");
var use_router_1 = __webpack_require__(/*! ../../hooks/use-router */ "./src/hooks/use-router.ts");
var movie_query_params_1 = __webpack_require__(/*! ../../models/movie-query-params */ "./src/models/movie-query-params.ts");
var actions_1 = __webpack_require__(/*! ../../redux/actions */ "./src/redux/actions.ts");
var selectors_1 = __webpack_require__(/*! ../../redux/selectors */ "./src/redux/selectors.ts");
var SearchMoviesPage = function () {
    var dispatch = react_redux_1.useDispatch();
    var router = use_router_1.default();
    var params = router.query;
    var searchParam = params.search;
    var movieQueryParams = react_redux_1.useSelector(selectors_1.selectMovieQueryParams);
    var _a = React.useState(true), initialLoad = _a[0], setInitialLoad = _a[1];
    React.useEffect(function () {
        var queryParams = new movie_query_params_1.MovieQueryParamsDict(params);
        dispatch(actions_1.setQueryParams(queryParams));
        if (Object.keys(params).length > 0) {
            dispatch(thunk_1.getMoviesThunk(queryParams));
        }
    }, [params]);
    React.useEffect(function () {
        if (movieQueryParams && Object.keys(movieQueryParams).length > 0) {
            if (initialLoad) {
                setInitialLoad(false);
            }
            else {
                dispatch(thunk_1.getMoviesThunk(movieQueryParams));
            }
        }
    }, [movieQueryParams]);
    var handleSearchValueChange = function (filter) {
        dispatch(actions_1.setSearch(filter));
        router.history.push({
            pathname: '/search',
            search: "?search=" + filter
        });
    };
    var handleAddMovie = function (movieRecord) {
        dispatch(thunk_1.addMovieThunk(movieRecord));
    };
    return (React.createElement("div", { className: "app-container" },
        React.createElement(error_boundary_1.default, null,
            React.createElement("div", { className: "app-container__inner" },
                React.createElement(header_1.default, null,
                    React.createElement(search_header_1.default, { onAddMovie: handleAddMovie },
                        React.createElement(search_panel_1.default, { onSearchValueChange: handleSearchValueChange, initialValue: searchParam || '' }))),
                React.createElement(main_1.default, null,
                    React.createElement(filter_bar_1.default, null),
                    React.createElement(movies_list_1.default, null)))),
        React.createElement(footer_1.default, null)));
};
exports.default = SearchMoviesPage;


/***/ }),

/***/ "./src/components/search-panel/search-panel.tsx":
/*!******************************************************!*\
  !*** ./src/components/search-panel/search-panel.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
__webpack_require__(/*! ./search-panel.scss */ "./src/components/search-panel/search-panel.scss");
function SearchPanel(props) {
    var searchValue = props.initialValue || '';
    var handleSearchValueChange = function (e) {
        var target = e.target;
        var value = target.value;
        searchValue = value;
    };
    var handleSearchValueSubmit = function (e) {
        props.onSearchValueChange(searchValue);
    };
    var handleSearchKeyPress = function (e) {
        var key = e.key;
        if (key === 'Enter') {
            props.onSearchValueChange(searchValue);
        }
    };
    return (React.createElement("div", { className: "search-panel" },
        React.createElement("input", { type: "text", className: "search-panel__input", defaultValue: searchValue, placeholder: "What do you want to watch?", onChange: function (e) { return handleSearchValueChange(e); }, onKeyPress: function (e) { return handleSearchKeyPress(e); } }),
        React.createElement("button", { className: "button-primary", onClick: function (e) { return handleSearchValueSubmit(e); } }, "SEARCH")));
}
exports.default = SearchPanel;


/***/ }),

/***/ "./src/hooks/use-router.ts":
/*!*********************************!*\
  !*** ./src/hooks/use-router.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
function useRouter() {
    var params = react_router_dom_1.useParams();
    var location = react_router_dom_1.useLocation();
    var history = react_router_dom_1.useHistory();
    var match = react_router_dom_1.useRouteMatch();
    return react_1.useMemo(function () { return ({
        push: history.push,
        replace: history.replace,
        pathname: location.pathname,
        query: __assign(__assign({}, queryString.parse(location.search)), params),
        match: match,
        location: location,
        history: history
    }); }, [params, match, location, history]);
}
exports.default = useRouter;


/***/ }),

/***/ "./src/hooks/use-toggle.ts":
/*!*********************************!*\
  !*** ./src/hooks/use-toggle.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function useToggle(initialValue) {
    if (initialValue === void 0) { initialValue = false; }
    return react_1.useReducer(function (state) { return !state; }, initialValue);
}
exports.default = useToggle;
;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/@hot-loader/react-dom/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var app_1 = __webpack_require__(/*! ./components/app/app */ "./src/components/app/app.tsx");
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
__webpack_require__(/*! ./assets/images/logo.png */ "./src/assets/images/logo.png");
__webpack_require__(/*! ./assets/images/no-image.png */ "./src/assets/images/no-image.png");
__webpack_require__(/*! ./assets/fonts/fonts.scss */ "./src/assets/fonts/fonts.scss");
var store_1 = __webpack_require__(/*! ./redux/store */ "./src/redux/store.ts");
function importAll(r) {
    r.keys().forEach(r);
}
importAll(__webpack_require__("./src/assets/images sync recursive \\.jpg$"));
ReactDOM.hydrate(React.createElement(react_redux_1.Provider, { store: store_1.default },
    React.createElement(app_1.default, { Router: react_router_dom_1.BrowserRouter })), document.getElementById('output'));


/***/ }),

/***/ "./src/models/enums/movie-genre.ts":
/*!*****************************************!*\
  !*** ./src/models/enums/movie-genre.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MOVIE_GENRES_LIST = exports.MovieGenreEnum = void 0;
var MovieGenreEnum;
(function (MovieGenreEnum) {
    MovieGenreEnum["drama"] = "Drama";
    MovieGenreEnum["actionAndAdventure"] = "Action & Adventure";
    MovieGenreEnum["comedy"] = "Comedy";
    MovieGenreEnum["thriller"] = "Thriller";
    MovieGenreEnum["oscarWinning"] = "Ocar winning Movie";
    MovieGenreEnum["documentary"] = "Documentary";
    MovieGenreEnum["horror"] = "Horror";
    MovieGenreEnum["crime"] = "Crime";
    MovieGenreEnum["adventure"] = "Adventure";
    MovieGenreEnum["action"] = "Action";
    MovieGenreEnum["fantasy"] = "Fantasy";
    MovieGenreEnum["scienceFiction"] = "Science Fiction";
    MovieGenreEnum["family"] = "Family";
    MovieGenreEnum["animation"] = "Animation";
    MovieGenreEnum["mystery"] = "Mystery";
    MovieGenreEnum["music"] = "Music";
    MovieGenreEnum["romance"] = "Romance";
})(MovieGenreEnum = exports.MovieGenreEnum || (exports.MovieGenreEnum = {}));
exports.MOVIE_GENRES_LIST = [
    MovieGenreEnum.action,
    MovieGenreEnum.adventure,
    MovieGenreEnum.animation,
    MovieGenreEnum.comedy,
    MovieGenreEnum.crime,
    MovieGenreEnum.thriller,
    MovieGenreEnum.drama,
    MovieGenreEnum.family,
    MovieGenreEnum.fantasy,
    MovieGenreEnum.horror,
    MovieGenreEnum.music,
    MovieGenreEnum.mystery,
    MovieGenreEnum.romance,
    MovieGenreEnum.scienceFiction,
    MovieGenreEnum.documentary
];


/***/ }),

/***/ "./src/models/enums/movies-list.ts":
/*!*****************************************!*\
  !*** ./src/models/enums/movies-list.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SORTING_FIELDS = exports.FILTER_FIELDS = exports.SortingDirectionEnum = exports.FilterFieldEnum = exports.SortingFieldsEnum = void 0;
var SortingFieldsEnum;
(function (SortingFieldsEnum) {
    SortingFieldsEnum["title"] = "title";
    SortingFieldsEnum["rating"] = "vote_average";
    SortingFieldsEnum["releaseDate"] = "release_date";
})(SortingFieldsEnum = exports.SortingFieldsEnum || (exports.SortingFieldsEnum = {}));
var FilterFieldEnum;
(function (FilterFieldEnum) {
    FilterFieldEnum["all"] = "All";
    FilterFieldEnum["documentary"] = "Documentary";
    FilterFieldEnum["comedy"] = "Comedy";
    FilterFieldEnum["horror"] = "Horror";
    FilterFieldEnum["crime"] = "Crime";
})(FilterFieldEnum = exports.FilterFieldEnum || (exports.FilterFieldEnum = {}));
var SortingDirectionEnum;
(function (SortingDirectionEnum) {
    SortingDirectionEnum["desc"] = "desc";
    SortingDirectionEnum["asc"] = "asc";
})(SortingDirectionEnum = exports.SortingDirectionEnum || (exports.SortingDirectionEnum = {}));
exports.FILTER_FIELDS = (_a = {},
    _a[FilterFieldEnum.all] = {
        key: 'filterKey0',
        name: FilterFieldEnum.all
    },
    _a[FilterFieldEnum.documentary] = {
        key: 'filterKey1',
        name: FilterFieldEnum.documentary
    },
    _a[FilterFieldEnum.comedy] = {
        key: 'filterKey2',
        name: FilterFieldEnum.comedy
    },
    _a[FilterFieldEnum.horror] = {
        key: 'filterKey3',
        name: FilterFieldEnum.horror
    },
    _a[FilterFieldEnum.crime] = {
        key: 'filterKey4',
        name: FilterFieldEnum.crime
    },
    _a);
exports.SORTING_FIELDS = (_b = {},
    _b[SortingFieldsEnum.title] = {
        key: 'sortingField0',
        name: SortingFieldsEnum.title,
        label: SortingFieldsEnum.title
    },
    _b[SortingFieldsEnum.rating] = {
        key: 'sortingField1',
        name: SortingFieldsEnum.rating,
        label: 'rating'
    },
    _b[SortingFieldsEnum.releaseDate] = {
        key: 'sortingField2',
        name: SortingFieldsEnum.releaseDate,
        label: 'release date'
    },
    _b);


/***/ }),

/***/ "./src/models/initial-movie-record.ts":
/*!********************************************!*\
  !*** ./src/models/initial-movie-record.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InitialMovieRecord = void 0;
var InitialMovieRecord = (function () {
    function InitialMovieRecord() {
        this.title = '';
        this.release_date = new Date();
        this.poster_path = '';
        this.genres = [];
        this.overview = '';
        this.runtime = 0;
    }
    InitialMovieRecord.mapMovieRecordToInitialValues = function (record) {
        var initialRecord = new InitialMovieRecord();
        initialRecord.genres = record.genres;
        initialRecord.overview = record.overview;
        if (record.id) {
            initialRecord.id = record.id;
        }
        else {
            delete initialRecord.id;
        }
        initialRecord.poster_path = record.poster_path;
        initialRecord.release_date = new Date(record.release_date);
        initialRecord.runtime = record.runtime;
        initialRecord.title = record.title;
        return initialRecord;
    };
    InitialMovieRecord.mapInitialValuesToMovieRecord = function (record, initialRecord) {
        record.genres = initialRecord.genres;
        record.overview = initialRecord.overview;
        record.poster_path = initialRecord.poster_path;
        record.release_date = initialRecord.release_date.toISOString();
        record.runtime = initialRecord.runtime;
        record.title = initialRecord.title;
        return record;
    };
    return InitialMovieRecord;
}());
exports.InitialMovieRecord = InitialMovieRecord;


/***/ }),

/***/ "./src/models/movie-query-params.ts":
/*!******************************************!*\
  !*** ./src/models/movie-query-params.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MovieQueryParamsDict = void 0;
var movies_list_1 = __webpack_require__(/*! ./enums/movies-list */ "./src/models/enums/movies-list.ts");
var MovieQueryParamsDict = (function () {
    function MovieQueryParamsDict(params) {
        if (params === void 0) { params = {
            sortBy: '',
            sortOrder: movies_list_1.SortingDirectionEnum.desc,
            search: '',
            searchBy: 'title',
            filter: '',
            offset: '',
            limit: '24'
        }; }
        if (!params) {
            return this;
        }
        this.sortBy = params.sortBy || '';
        this.sortOrder = params.sortOrder || movies_list_1.SortingDirectionEnum.desc;
        this.search = params.search || '';
        this.searchBy = params.searchBy || 'title';
        this.filter = params.filter || '';
        this.offset = params.offset || '';
        this.limit = params.limit || '24';
    }
    MovieQueryParamsDict.toQueryString = function (params) {
        if (params === void 0) { params = {}; }
        var searchParams = new URLSearchParams();
        Object.entries(params).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (typeof value !== 'function' && value) {
                searchParams.set(key, value);
            }
        });
        return searchParams.toString();
    };
    MovieQueryParamsDict.toSearchQueryString = function (params) {
        if (params === void 0) { params = {}; }
        var searchParams = new URLSearchParams();
        if (params.search) {
            searchParams.set('search', params.search);
            return searchParams.toString();
        }
        return '';
    };
    return MovieQueryParamsDict;
}());
exports.MovieQueryParamsDict = MovieQueryParamsDict;


/***/ }),

/***/ "./src/models/movie.ts":
/*!*****************************!*\
  !*** ./src/models/movie.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MovieRecord = void 0;
var MovieRecord = (function () {
    function MovieRecord(values) {
        this.title = '';
        this.release_date = new Date().toISOString();
        this.poster_path = '';
        this.genres = [];
        this.overview = 'No overview provided';
        this.runtime = 0;
        if (values) {
            this.title = values.title;
            this.genres = values.genres;
            this.overview = values.overview;
            this.poster_path = values.poster_path;
            this.release_date = values.release_date.toISOString();
            this.runtime = values.runtime;
        }
    }
    return MovieRecord;
}());
exports.MovieRecord = MovieRecord;


/***/ }),

/***/ "./src/redux/action-types.ts":
/*!***********************************!*\
  !*** ./src/redux/action-types.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionTypes = void 0;
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["ADD_MOVIE"] = "ADD_MOVIE";
    ActionTypes["DELETE_MOVIE"] = "DELETE_MOVIE";
    ActionTypes["UPDATE_MOVIE"] = "UPDATE_MOVIE";
    ActionTypes["LOAD_MOVIES"] = "LOAD_MOVIES";
    ActionTypes["SET_MOVIES"] = "SET_MOVIES";
    ActionTypes["GET_MOVIE"] = "GET_MOVIE";
    ActionTypes["SET_MOVIE"] = "SET_MOVIE";
    ActionTypes["SET_ALERT"] = "ADD_ALERT";
    ActionTypes["SET_LOADING"] = "SET_LOADING";
    ActionTypes["SET_MOVIE_NOT_FOUND"] = "SET_MOVIE_NOT_FOUND";
    ActionTypes["SET_FILTER"] = "SET_FILTER";
    ActionTypes["SET_SORT_ORDER"] = "SET_SORT_ORDER";
    ActionTypes["SET_SEARCH"] = "SET_SEARCH";
    ActionTypes["SET_SORT_BY"] = "SET_SORT_BY";
    ActionTypes["SET_QUERY_PARAMS"] = "SET_QUERY_PARAMS";
})(ActionTypes = exports.ActionTypes || (exports.ActionTypes = {}));


/***/ }),

/***/ "./src/redux/actions.ts":
/*!******************************!*\
  !*** ./src/redux/actions.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setQueryParams = exports.setSearch = exports.setSortBy = exports.setSortOrder = exports.setFilter = exports.setAlert = exports.setLoading = exports.setMovies = exports.setMovieNotFound = exports.setMovie = void 0;
var action_types_1 = __webpack_require__(/*! ./action-types */ "./src/redux/action-types.ts");
var setMovie = function (movie) { return ({
    type: action_types_1.ActionTypes.SET_MOVIE,
    payload: { movie: movie }
}); };
exports.setMovie = setMovie;
var setMovieNotFound = function (notFound) { return ({
    type: action_types_1.ActionTypes.SET_MOVIE_NOT_FOUND,
    payload: { notFound: notFound }
}); };
exports.setMovieNotFound = setMovieNotFound;
var setMovies = function (movies) { return ({
    type: action_types_1.ActionTypes.SET_MOVIES,
    payload: { movies: movies }
}); };
exports.setMovies = setMovies;
var setLoading = function (isLoading) { return ({
    type: action_types_1.ActionTypes.SET_LOADING,
    payload: { isLoading: isLoading }
}); };
exports.setLoading = setLoading;
var setAlert = function (alert) { return ({
    type: action_types_1.ActionTypes.SET_ALERT,
    payload: __assign({}, alert)
}); };
exports.setAlert = setAlert;
var setFilter = function (filter) { return ({
    type: action_types_1.ActionTypes.SET_FILTER,
    payload: { filter: filter }
}); };
exports.setFilter = setFilter;
var setSortOrder = function (sortOrder) { return ({
    type: action_types_1.ActionTypes.SET_SORT_ORDER,
    payload: { sortOrder: sortOrder }
}); };
exports.setSortOrder = setSortOrder;
var setSortBy = function (sortBy) { return ({
    type: action_types_1.ActionTypes.SET_SORT_BY,
    payload: { sortBy: sortBy }
}); };
exports.setSortBy = setSortBy;
var setSearch = function (search) { return ({
    type: action_types_1.ActionTypes.SET_SEARCH,
    payload: { search: search }
}); };
exports.setSearch = setSearch;
var setQueryParams = function (params) { return ({
    type: action_types_1.ActionTypes.SET_QUERY_PARAMS,
    payload: __assign({}, params)
}); };
exports.setQueryParams = setQueryParams;


/***/ }),

/***/ "./src/redux/reducers/alert.ts":
/*!*************************************!*\
  !*** ./src/redux/reducers/alert.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AlertTypesEnum = void 0;
var action_types_1 = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.ts");
var AlertTypesEnum;
(function (AlertTypesEnum) {
    AlertTypesEnum["error"] = "error";
    AlertTypesEnum["success"] = "success";
})(AlertTypesEnum = exports.AlertTypesEnum || (exports.AlertTypesEnum = {}));
var initialState = {
    type: null,
    message: ''
};
function alertReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case action_types_1.ActionTypes.SET_ALERT: {
            return __assign(__assign({}, state), { type: action.payload.type, message: action.payload.message });
        }
        default:
            return state;
    }
}
exports.default = alertReducer;


/***/ }),

/***/ "./src/redux/reducers/index.ts":
/*!*************************************!*\
  !*** ./src/redux/reducers/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var alert_1 = __webpack_require__(/*! ./alert */ "./src/redux/reducers/alert.ts");
var loader_1 = __webpack_require__(/*! ./loader */ "./src/redux/reducers/loader.ts");
var movies_1 = __webpack_require__(/*! ./movies */ "./src/redux/reducers/movies.ts");
var query_params_1 = __webpack_require__(/*! ./query-params */ "./src/redux/reducers/query-params.ts");
exports.default = redux_1.combineReducers({
    movies: movies_1.default,
    alert: alert_1.default,
    loader: loader_1.default,
    queryParams: query_params_1.default
});


/***/ }),

/***/ "./src/redux/reducers/loader.ts":
/*!**************************************!*\
  !*** ./src/redux/reducers/loader.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var action_types_1 = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.ts");
var initialState = {
    isLoading: false
};
function loaderReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case action_types_1.ActionTypes.SET_LOADING: {
            return __assign(__assign({}, state), { isLoading: action.payload.isLoading });
        }
        default:
            return state;
    }
}
exports.default = loaderReducer;


/***/ }),

/***/ "./src/redux/reducers/movies.ts":
/*!**************************************!*\
  !*** ./src/redux/reducers/movies.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var action_types_1 = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.ts");
var initialState = {
    items: [],
    selectedMovie: null,
    notFound: false
};
function moviesReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case action_types_1.ActionTypes.SET_MOVIE: {
            return __assign(__assign({}, state), { selectedMovie: action.payload.movie });
        }
        case action_types_1.ActionTypes.SET_MOVIE_NOT_FOUND: {
            return __assign(__assign({}, state), { notFound: action.payload.notFound });
        }
        case action_types_1.ActionTypes.SET_MOVIES: {
            var selectedMovieId_1 = state.selectedMovie && state.selectedMovie.id;
            return __assign(__assign({}, state), { items: __spreadArrays(action.payload.movies.filter(function (movie) { return movie.id !== selectedMovieId_1; })) });
        }
        default:
            return state;
    }
}
exports.default = moviesReducer;


/***/ }),

/***/ "./src/redux/reducers/query-params.ts":
/*!********************************************!*\
  !*** ./src/redux/reducers/query-params.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var action_types_1 = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.ts");
function queryParamsReducer(state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case action_types_1.ActionTypes.SET_SEARCH: {
            return __assign(__assign({}, state), { search: action.payload.search });
        }
        case action_types_1.ActionTypes.SET_FILTER: {
            return __assign(__assign({}, state), { filter: action.payload.filter });
        }
        case action_types_1.ActionTypes.SET_SORT_BY: {
            return __assign(__assign({}, state), { sortBy: action.payload.sortBy });
        }
        case action_types_1.ActionTypes.SET_SORT_ORDER: {
            return __assign(__assign({}, state), { sortOrder: action.payload.sortOrder });
        }
        case action_types_1.ActionTypes.SET_QUERY_PARAMS: {
            return action.payload || null;
        }
        default:
            return state;
    }
}
exports.default = queryParamsReducer;


/***/ }),

/***/ "./src/redux/selectors.ts":
/*!********************************!*\
  !*** ./src/redux/selectors.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.selectSortByParam = exports.selectSortOrderParam = exports.selectFilterParam = exports.selectMovieQueryParams = exports.selectAlertMessage = exports.selectAlertType = exports.selectIsLoading = exports.selectMovieId = exports.selectMovieNotFound = exports.selectMovie = exports.selectMovies = void 0;
var selectMovies = function (_a) {
    var movies = _a.movies;
    return movies.items;
};
exports.selectMovies = selectMovies;
var selectMovie = function (_a) {
    var movies = _a.movies;
    return movies.selectedMovie;
};
exports.selectMovie = selectMovie;
var selectMovieNotFound = function (_a) {
    var movies = _a.movies;
    return movies.notFound;
};
exports.selectMovieNotFound = selectMovieNotFound;
var selectMovieId = function (_a) {
    var movies = _a.movies;
    return movies.selectedMovie && movies.selectedMovie.id;
};
exports.selectMovieId = selectMovieId;
var selectIsLoading = function (_a) {
    var loader = _a.loader;
    return loader.isLoading;
};
exports.selectIsLoading = selectIsLoading;
var selectAlertType = function (_a) {
    var alert = _a.alert;
    return alert.type;
};
exports.selectAlertType = selectAlertType;
var selectAlertMessage = function (_a) {
    var alert = _a.alert;
    return alert.message;
};
exports.selectAlertMessage = selectAlertMessage;
var selectMovieQueryParams = function (_a) {
    var queryParams = _a.queryParams;
    return queryParams;
};
exports.selectMovieQueryParams = selectMovieQueryParams;
var selectFilterParam = function (_a) {
    var queryParams = _a.queryParams;
    return queryParams && queryParams.filter;
};
exports.selectFilterParam = selectFilterParam;
var selectSortOrderParam = function (_a) {
    var queryParams = _a.queryParams;
    return queryParams && queryParams.sortOrder;
};
exports.selectSortOrderParam = selectSortOrderParam;
var selectSortByParam = function (_a) {
    var queryParams = _a.queryParams;
    return queryParams && queryParams.sortBy;
};
exports.selectSortByParam = selectSortByParam;


/***/ }),

/***/ "./src/redux/store.ts":
/*!****************************!*\
  !*** ./src/redux/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
var redux_thunk_1 = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
var reducers_1 = __webpack_require__(/*! ./reducers */ "./src/redux/reducers/index.ts");
exports.default = redux_1.createStore(reducers_1.default, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));


/***/ }),

/***/ "./src/redux/thunk.ts":
/*!****************************!*\
  !*** ./src/redux/thunk.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deleteMovieThunk = exports.updateMovieThunk = exports.getMoviesThunk = exports.addMovieThunk = exports.getMovieThunk = void 0;
var data_service_1 = __webpack_require__(/*! ../services/data-service */ "./src/services/data-service.ts");
var actions_1 = __webpack_require__(/*! ./actions */ "./src/redux/actions.ts");
var alert_1 = __webpack_require__(/*! ./reducers/alert */ "./src/redux/reducers/alert.ts");
var getMovieThunk = function (id) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var movie, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dispatch(actions_1.setLoading(true));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, data_service_1.getMovie(id)];
            case 2:
                movie = _a.sent();
                dispatch(actions_1.setMovieNotFound(false));
                dispatch(actions_1.setMovie(movie));
                return [3, 4];
            case 3:
                error_1 = _a.sent();
                dispatch(actions_1.setMovie(null));
                dispatch(actions_1.setMovieNotFound(true));
                return [3, 4];
            case 4:
                setTimeout(function () { return dispatch(actions_1.setLoading(false)); }, 1000);
                return [2];
        }
    });
}); }; };
exports.getMovieThunk = getMovieThunk;
var addMovieThunk = function (movieRecord) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var movie, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dispatch(actions_1.setLoading(true));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, data_service_1.addMovie(movieRecord)];
            case 2:
                movie = _a.sent();
                dispatch(actions_1.setMovie(movie));
                dispatch(actions_1.setAlert({
                    type: alert_1.AlertTypesEnum.success,
                    message: "Successfully added movie " + movieRecord.title
                }));
                return [3, 4];
            case 3:
                error_2 = _a.sent();
                dispatch(actions_1.setAlert({
                    type: alert_1.AlertTypesEnum.error,
                    message: error_2.toString()
                }));
                return [3, 4];
            case 4:
                setTimeout(function () { return dispatch(actions_1.setLoading(false)); }, 1000);
                return [2];
        }
    });
}); }; };
exports.addMovieThunk = addMovieThunk;
var getMoviesThunk = function (queryParams) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var movies, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dispatch(actions_1.setLoading(true));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, data_service_1.getMovies(queryParams)];
            case 2:
                movies = _a.sent();
                dispatch(actions_1.setMovies(movies));
                return [3, 4];
            case 3:
                error_3 = _a.sent();
                dispatch(actions_1.setAlert({
                    type: alert_1.AlertTypesEnum.error,
                    message: error_3.toString()
                }));
                return [3, 4];
            case 4:
                setTimeout(function () { return dispatch(actions_1.setLoading(false)); }, 1000);
                return [2];
        }
    });
}); }; };
exports.getMoviesThunk = getMoviesThunk;
var updateMovieThunk = function (movieRecord, movieQueryParams) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var movie, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!movieRecord) {
                    return [2];
                }
                if (!movieRecord.tagline) {
                    movieRecord.tagline = 'Tagline is not defined';
                }
                dispatch(actions_1.setLoading(true));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, data_service_1.updateMovie(movieRecord)];
            case 2:
                movie = _a.sent();
                dispatch(actions_1.setMovie(movie));
                dispatch(exports.getMoviesThunk(movieQueryParams));
                dispatch(actions_1.setAlert({
                    type: alert_1.AlertTypesEnum.success,
                    message: "Successfully updated movie " + movieRecord.title
                }));
                return [3, 4];
            case 3:
                error_4 = _a.sent();
                dispatch(actions_1.setAlert({
                    type: alert_1.AlertTypesEnum.error,
                    message: error_4.toString()
                }));
                return [3, 4];
            case 4:
                setTimeout(function () { return dispatch(actions_1.setLoading(false)); }, 1000);
                return [2];
        }
    });
}); }; };
exports.updateMovieThunk = updateMovieThunk;
var deleteMovieThunk = function (id, movieQueryParams) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dispatch(actions_1.setLoading(true));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, data_service_1.deleteMovie(id)];
            case 2:
                _a.sent();
                dispatch(exports.getMoviesThunk(movieQueryParams));
                dispatch(actions_1.setAlert({
                    type: alert_1.AlertTypesEnum.success,
                    message: 'Successfully deleted movie'
                }));
                return [3, 4];
            case 3:
                error_5 = _a.sent();
                dispatch(actions_1.setAlert({
                    type: alert_1.AlertTypesEnum.error,
                    message: error_5.toString()
                }));
                return [3, 4];
            case 4:
                setTimeout(function () { return dispatch(actions_1.setLoading(false)); }, 1000);
                return [2];
        }
    });
}); }; };
exports.deleteMovieThunk = deleteMovieThunk;


/***/ }),

/***/ "./src/services/data-service.ts":
/*!**************************************!*\
  !*** ./src/services/data-service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMovie = exports.deleteMovie = exports.addMovie = exports.updateMovie = exports.getMovies = void 0;
var movie_query_params_1 = __webpack_require__(/*! ../models/movie-query-params */ "./src/models/movie-query-params.ts");
var BASE_ROUTE = 'http://localhost:4000/movies';
var getMovies = function (queryParams) { return __awaiter(void 0, void 0, void 0, function () {
    var response, rawData, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4, fetch(BASE_ROUTE + "?" + movie_query_params_1.MovieQueryParamsDict.toQueryString(queryParams), {
                        method: 'GET'
                    })];
            case 1:
                response = _a.sent();
                return [4, response.json()];
            case 2:
                rawData = _a.sent();
                return [2, rawData.data];
            case 3:
                error_1 = _a.sent();
                throw new Error("Failed loading movies. " + error_1);
            case 4: return [2];
        }
    });
}); };
exports.getMovies = getMovies;
var updateMovie = function (movieRecord) { return __awaiter(void 0, void 0, void 0, function () {
    var response, rawData_1, rawData, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!movieRecord) {
                    throw new Error('No movie record available.');
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4, fetch("" + BASE_ROUTE, {
                        method: 'PUT',
                        body: JSON.stringify(movieRecord),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })];
            case 2:
                response = _a.sent();
                if (!(response.status === 200)) return [3, 4];
                return [4, response.json()];
            case 3:
                rawData_1 = _a.sent();
                return [2, rawData_1];
            case 4: return [4, response.json()];
            case 5:
                rawData = _a.sent();
                throw new Error(rawData.messages && rawData.messages.join('; ') || rawData.toString());
            case 6:
                error_2 = _a.sent();
                throw new Error("Failed to update a movie. " + error_2);
            case 7: return [2];
        }
    });
}); };
exports.updateMovie = updateMovie;
var addMovie = function (movieRecord) { return __awaiter(void 0, void 0, void 0, function () {
    var response, rawData_2, rawData, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!movieRecord) {
                    throw new Error('No movie record available.');
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4, fetch("" + BASE_ROUTE, {
                        method: 'POST',
                        body: JSON.stringify(movieRecord),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })];
            case 2:
                response = _a.sent();
                if (!(response.status === 201)) return [3, 4];
                return [4, response.json()];
            case 3:
                rawData_2 = _a.sent();
                return [2, rawData_2];
            case 4: return [4, response.json()];
            case 5:
                rawData = _a.sent();
                throw new Error(rawData.messages && rawData.messages.join('; ') || rawData.toString());
            case 6:
                error_3 = _a.sent();
                throw new Error("Failed adding a movie. " + error_3);
            case 7: return [2];
        }
    });
}); };
exports.addMovie = addMovie;
var deleteMovie = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, fetch(BASE_ROUTE + "/" + id, {
                        method: 'DELETE'
                    })];
            case 1:
                response = _a.sent();
                if (response.status === 204) {
                    return [2, true];
                }
                throw new Error('Movie not found');
            case 2:
                error_4 = _a.sent();
                throw new Error("Failed loading a movie. " + error_4);
            case 3: return [2];
        }
    });
}); };
exports.deleteMovie = deleteMovie;
var getMovie = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var response, rawData_3, rawData, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4, fetch(BASE_ROUTE + "/" + id, {
                        method: 'GET'
                    })];
            case 1:
                response = _a.sent();
                if (!(response.status === 200)) return [3, 3];
                return [4, response.json()];
            case 2:
                rawData_3 = _a.sent();
                return [2, rawData_3];
            case 3: return [4, response.json()];
            case 4:
                rawData = _a.sent();
                throw new Error(rawData.messages.join(', '));
            case 5:
                error_5 = _a.sent();
                throw new Error("Failed loading a movie. " + error_5);
            case 6: return [2];
        }
    });
}); };
exports.getMovie = getMovie;


/***/ }),

/***/ "./src/assets/images/header.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/header.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/header.jpg?d245a05fe86680b7afb741dbc171c843");

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/logo.png?486a102cedd7a9240ff0d25359f9e101");

/***/ }),

/***/ "./src/assets/images/no-image.png":
/*!****************************************!*\
  !*** ./src/assets/images/no-image.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/assets/images/no-image.png?b08b6eb67147c00e31334e6e58fbd607");

/***/ }),

/***/ "./src/assets/fonts/fonts.scss":
/*!*************************************!*\
  !*** ./src/assets/fonts/fonts.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/custom-alert/custom-alert.scss":
/*!*******************************************************!*\
  !*** ./src/components/custom-alert/custom-alert.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/custom-loader/custom-loader.scss":
/*!*********************************************************!*\
  !*** ./src/components/custom-loader/custom-loader.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/delete-movie-confirm/delete-movie-confirm.scss":
/*!***********************************************************************!*\
  !*** ./src/components/delete-movie-confirm/delete-movie-confirm.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/error-boundary/error-boundary.scss":
/*!***********************************************************!*\
  !*** ./src/components/error-boundary/error-boundary.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/error-page/error-page.scss":
/*!***************************************************!*\
  !*** ./src/components/error-page/error-page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/filter-bar/filter-bar.scss":
/*!***************************************************!*\
  !*** ./src/components/filter-bar/filter-bar.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/footer/footer.scss":
/*!*******************************************!*\
  !*** ./src/components/footer/footer.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/header/header.scss":
/*!*******************************************!*\
  !*** ./src/components/header/header.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/input-text-field/input-text-field.scss":
/*!***************************************************************!*\
  !*** ./src/components/input-text-field/input-text-field.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/logo/logo.scss":
/*!***************************************!*\
  !*** ./src/components/logo/logo.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/main/main.scss":
/*!***************************************!*\
  !*** ./src/components/main/main.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/modal/modal.scss":
/*!*****************************************!*\
  !*** ./src/components/modal/modal.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/movie-card/movie-card.scss":
/*!***************************************************!*\
  !*** ./src/components/movie-card/movie-card.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/movie-details-form/movie-details-form.scss":
/*!*******************************************************************!*\
  !*** ./src/components/movie-details-form/movie-details-form.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/movie-info-header/movie-info-header.scss":
/*!*****************************************************************!*\
  !*** ./src/components/movie-info-header/movie-info-header.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/movies-list/movies-list.scss":
/*!*****************************************************!*\
  !*** ./src/components/movies-list/movies-list.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/search-header/search-header.scss":
/*!*********************************************************!*\
  !*** ./src/components/search-header/search-header.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/search-panel/search-panel.scss":
/*!*******************************************************!*\
  !*** ./src/components/search-panel/search-panel.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/images sync recursive \\.jpg$":
/*!****************************************!*\
  !*** ./src/assets/images/ sync \.jpg$ ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./header.jpg": "./src/assets/images/header.jpg",
	"assets/images/header.jpg": "./src/assets/images/header.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images sync recursive \\.jpg$";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/index.tsx","vendors-node_modules_date-io_date-fns_build_index_esm_js-node_modules_material-ui_core_esm_Ch-2c04a7"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkReactJSCourse"] = self["webpackChunkReactJSCourse"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map